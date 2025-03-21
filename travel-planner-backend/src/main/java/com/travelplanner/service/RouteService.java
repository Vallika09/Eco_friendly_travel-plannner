package com.travelplanner.service;

import com.travelplanner.model.Route;
import com.travelplanner.repository.RouteRepository;
import com.travelplanner.websocket.RouteWebSocketHandler;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RouteService {

    private final RouteRepository routeRepository;

    public RouteService(RouteRepository routeRepository) {
        this.routeRepository = routeRepository;
    }

    public Route addRoute(Route route) {
        Route savedRoute = routeRepository.save(route);

        // Send real-time update to WebSocket clients
        RouteWebSocketHandler.sendUpdate("New route added: " + savedRoute.toString());

        return savedRoute;
    }

    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }
}
