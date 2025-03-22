package com.travelplanner.controller;

import com.travelplanner.model.Route;
import com.travelplanner.service.RouteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/routes")
public class RouteController {
    private final RouteService routeService;

    public RouteController(RouteService routeService) {
        this.routeService = routeService;
    }

    @GetMapping("/all-routes")
    public ResponseEntity<List<Route>> getAllRoutes() {
        List<Route> routes = routeService.getAllRoutes();
        return ResponseEntity.ok(routes);
    }

    @GetMapping("/shortest-path")
    public ResponseEntity<List<String>> getShortestPath(@RequestParam String start, @RequestParam String end) {
        List<String> path = routeService.findShortestPath(start, end);
        return ResponseEntity.ok(path);
    }
}
