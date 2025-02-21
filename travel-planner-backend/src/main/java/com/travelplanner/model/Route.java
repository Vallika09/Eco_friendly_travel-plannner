package com.travelplanner.model;

import jakarta.persistence.*;

@Entity
@Table(name = "routes")
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "source_id", nullable = false)
    private Location source;

    @ManyToOne
    @JoinColumn(name = "destination_id", nullable = false)
    private Location destination;

    @Column(nullable = false)
    private double distance; // in kilometers

    @Column(nullable = false)
    private double travelTime; // in hours

    @Column(nullable = false)
    private boolean isEcoFriendly; // Marks green routes

    // Constructors
    public Route() {}

    public Route(Location source, Location destination, double distance, double travelTime, boolean isEcoFriendly) {
        this.source = source;
        this.destination = destination;
        this.distance = distance;
        this.travelTime = travelTime;
        this.isEcoFriendly = isEcoFriendly;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Location getSource() {
        return source;
    }

    public void setSource(Location source) {
        this.source = source;
    }

    public Location getDestination() {
        return destination;
    }

    public void setDestination(Location destination) {
        this.destination = destination;
    }

    public double getDistance() {
        return distance;
    }

    public void setDistance(double distance) {
        this.distance = distance;
    }

    public double getTravelTime() {
        return travelTime;
    }

    public void setTravelTime(double travelTime) {
        this.travelTime = travelTime;
    }

    public boolean isEcoFriendly() {
        return isEcoFriendly;
    }

    public void setEcoFriendly(boolean ecoFriendly) {
        isEcoFriendly = ecoFriendly;
    }
}
