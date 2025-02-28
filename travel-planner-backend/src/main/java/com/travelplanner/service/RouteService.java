package com.travelplanner.service;

import com.travelplanner.model.Route;
import com.travelplanner.repository.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.util.ArrayList;
import java.util.List;

@Service
public class RouteService {
    
    @Autowired
    private RouteRepository routeRepository;
    
    private final List<WebSocketSession> sessions = new ArrayList<>();

    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    public Route addRoute(Route route) {
        Route savedRoute = routeRepository.save(route);
        sendWebSocketUpdate();
        return savedRoute;
    }

    private void sendWebSocketUpdate() {
        for (WebSocketSession session : sessions) {
            try {
                session.sendMessage(new TextMessage("New route added! Refresh your page."));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
