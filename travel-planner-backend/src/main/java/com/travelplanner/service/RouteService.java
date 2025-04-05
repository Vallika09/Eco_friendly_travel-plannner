package com.travelplanner.service;

import com.travelplanner.model.Route;
import com.travelplanner.repository.RouteRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import jakarta.annotation.PostConstruct;
import java.util.*;

@Service
@Transactional
public class RouteService {
    private final RouteRepository routeRepository;
    private final Map<String, List<Route>> adjacencyList = new HashMap<>();

    public RouteService(RouteRepository routeRepository) {
        this.routeRepository = routeRepository;
        loadRoutes();
    }

    @PostConstruct
    private void loadRoutes() {
        List<Route> routes = routeRepository.findAll();
        for (Route route : routes) {
            if (route.getStartLocation() == null || route.getEndLocation() == null) continue;
            String startLocation = route.getStartLocation().getName();
            adjacencyList.computeIfAbsent(startLocation, k -> new ArrayList<>()).add(route);
        }
        System.out.println("Final Adjacency List: " + adjacencyList);
    }

    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    public List<String> findShortestPath(String start, String end) {
        if (start == null || end == null || !adjacencyList.containsKey(start)) {
            System.out.println("Start or End location not found in adjacency list.");
            return Collections.emptyList();
        }

        // Special case if start equals end
        if (start.equals(end)) {
            return Collections.singletonList(start);
        }

        System.out.println("Finding shortest path from " + start + " to " + end);

        Map<String, Double> distances = new HashMap<>();
        Map<String, String> previousNodes = new HashMap<>();
        PriorityQueue<String> queue = new PriorityQueue<>(Comparator.comparingDouble(distances::get));

        // Initialize distances for all locations
        for (String location : adjacencyList.keySet()) {
            distances.put(location, Double.MAX_VALUE);
        }
        distances.put(start, 0.0);
        queue.add(start);

        while (!queue.isEmpty()) {
            String current = queue.poll();
            System.out.println("Visiting: " + current + " with distance " + distances.get(current));

            // Ensure we are processing the correct node
            if (current.equals(end)) {
                System.out.println("Reached destination: " + current);
                break;  // No need to continue if we've reached the destination
            }

            // Iterate over neighbors and update distances
            for (Route route : adjacencyList.getOrDefault(current, Collections.emptyList())) {
                if (route.getEndLocation() == null) continue;

                String endLocation = route.getEndLocation().getName();
                double newDist = distances.get(current) + route.getDistance();

                if (newDist < distances.getOrDefault(endLocation, Double.MAX_VALUE)) {
                    distances.put(endLocation, newDist);
                    previousNodes.put(endLocation, current);

                    // Remove and re-add to the queue to update the distance
                    queue.remove(endLocation);
                    queue.offer(endLocation);
                    System.out.println("Updating distance of " + endLocation + " to " + newDist);
                }
            }
        }

        if (!previousNodes.containsKey(end)) {
            System.out.println("No path found!");
            return Collections.singletonList("No path found");
        }

        // Build the path by backtracking from the end node
        List<String> path = new ArrayList<>();
        for (String at = end; at != null; at = previousNodes.get(at)) {
            path.add(at);
        }
        Collections.reverse(path);

        System.out.println("Shortest path found: " + path);
        return path;
    }
}
