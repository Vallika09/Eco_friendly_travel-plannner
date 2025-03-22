package com.travelplanner.service;

import com.travelplanner.model.Route;
import com.travelplanner.repository.RouteRepository;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class RouteService {
    private final RouteRepository routeRepository;
    private final Map<String, List<Route>> adjacencyList = new HashMap<>();

    public RouteService(RouteRepository routeRepository) {
        this.routeRepository = routeRepository;
        loadRoutes();
    }

    private void loadRoutes() {
        List<Route> routes = routeRepository.findAll();
        for (Route route : routes) {
            if (route.getStartLocation() == null || route.getEndLocation() == null) continue;
            String startLocation = route.getStartLocation().getName();
            adjacencyList.computeIfAbsent(startLocation, k -> new ArrayList<>()).add(route);
        }
    }

    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    public List<String> findShortestPath(String start, String end) {
        if (start == null || end == null || !adjacencyList.containsKey(start) || !adjacencyList.containsKey(end)) {
            return Collections.emptyList();
        }

        Map<String, Double> distances = new HashMap<>();
        Map<String, String> previousNodes = new HashMap<>();
        PriorityQueue<String> queue = new PriorityQueue<>(Comparator.comparingDouble(distances::get));

        for (String location : adjacencyList.keySet()) {
            distances.put(location, Double.MAX_VALUE);
        }
        distances.put(start, 0.0);
        queue.add(start);

        while (!queue.isEmpty()) {
            String current = queue.poll();

            for (Route route : adjacencyList.getOrDefault(current, Collections.emptyList())) {
                if (route.getEndLocation() == null) continue;

                double newDist = distances.get(current) + route.getDistance();
                String endLocation = route.getEndLocation().getName();

                if (newDist < distances.getOrDefault(endLocation, Double.MAX_VALUE)) {
                    distances.put(endLocation, newDist);
                    previousNodes.put(endLocation, current);
                    queue.offer(endLocation);
                }
            }
        }

        if (!previousNodes.containsKey(end)) {
            return Collections.emptyList();
        }

        List<String> path = new ArrayList<>();
        for (String at = end; at != null; at = previousNodes.get(at)) {
            path.add(at);
        }
        Collections.reverse(path);
        return path;
    }
}
