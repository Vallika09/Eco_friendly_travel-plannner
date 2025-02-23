package com.travelplanner.service;

import com.travelplanner.model.Location;
import com.travelplanner.model.Route;
import com.travelplanner.repository.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RouteService {

    @Autowired
    private RouteRepository routeRepository;

    public List<Route> getRoutesBySourceAndDestination(Location source, Location destination) {
        return routeRepository.findByStartLocationAndEndLocation(source, destination); // ✅ Corrected method name
    }

    public Route saveRoute(Route route) {
        return routeRepository.save(route);
    }
}
