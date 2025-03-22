package com.travelplanner.model;
import java.util.*;

public class Graph {
    private Map<String, List<Edge>> adjacencyList;

    public Graph() {
        this.adjacencyList = new HashMap<>();
    }

    public void addLocation(String location) {
        adjacencyList.putIfAbsent(location, new ArrayList<>());
    }

    public void addRoute(String from, String to, int distance) {
        adjacencyList.get(from).add(new Edge(to, distance));
        adjacencyList.get(to).add(new Edge(from, distance)); // Bidirectional
    }

    public List<Edge> getRoutes(String location) {
        return adjacencyList.get(location);
    }
}
