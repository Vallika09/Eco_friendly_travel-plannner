package com.travelplanner.controller;
import com.travelplanner.model.Location;
import com.travelplanner.model.Route;
import com.travelplanner.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/routes")
public class RouteController {

    @Autowired
    private RouteService routeService;

    @GetMapping("/search")
    public List<Route> getRoutes(@RequestParam Location source, @RequestParam Location destination) {
        return routeService.getRoutesBySourceAndDestination(source, destination);
    }

    @PostMapping("/add")
    public Route addRoute(@RequestBody Route route) {
        return routeService.saveRoute(route);
    }
}
