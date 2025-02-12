package com.travelplanner.service;

import com.travelplanner.model.Route;
import com.travelplanner.repository.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RouteService {

    @Autowired
    private RouteRepository routeRepository;

    public List<Route> getRoutesBySourceAndDestination(String source, String destination) {
        return routeRepository.findBySourceAndDestination(source, destination);
    }

    public Route saveRoute(Route route) {
        return routeRepository.save(route);
    }
}
