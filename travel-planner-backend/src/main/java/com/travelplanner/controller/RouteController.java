package com.travelplanner.controller;

import com.travelplanner.model.Route;
import com.travelplanner.service.RouteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController  // annotation to mark controller class
@CrossOrigin(origins = "http://localhost:5173")  // url of frontend 
@RequestMapping("/api/routes")  // maps url to request body
public class RouteController {
    private final RouteService routeService;  // injecting routeservice class code

    public RouteController(RouteService routeService) {  // constructor to initialize the class
        this.routeService = routeService;
    }

    @GetMapping("/all-routes") //return all routes present in database 
    public ResponseEntity<List<Route>> getAllRoutes() {    // function getallroutes which return a list of routes
        List<Route> routes = routeService.getAllRoutes();   // call the function getallroutes 
        return ResponseEntity.ok(routes);  // return statement
    }

    @GetMapping("/shortest-path") //returns shortest path between two locations
    public ResponseEntity<List<String>> getShortestPath(@RequestParam String start, @RequestParam String end) { //requestparam to accepts the parameters
        List<String> path = routeService.findShortestPath(start, end);
        return ResponseEntity.ok(path);
    }
}
