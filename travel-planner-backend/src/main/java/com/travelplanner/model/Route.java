package com.travelplanner.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "routes")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) // Prevents circular references
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER) // Avoids unnecessary data loading
    @JoinColumn(name = "start_location_id", referencedColumnName = "id", nullable = false)
    @JsonIgnoreProperties("routes") // Prevents infinite nesting
    private Location startLocation;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "end_location_id", referencedColumnName = "id", nullable = false)
    @JsonIgnoreProperties("routes")
    private Location endLocation;

    @Column(nullable = false)
    private double distance;

    @Column(nullable = false)
    private double travelTime;

    @Column(nullable = false)
    private boolean ecoFriendly;

    public Route() {}

    public Route(Location startLocation, Location endLocation, double distance, double travelTime, boolean ecoFriendly) {
        this.startLocation = startLocation;
        this.endLocation = endLocation;
        this.distance = distance;
        this.travelTime = travelTime;
        this.ecoFriendly = ecoFriendly;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Location getStartLocation() { return startLocation; }
    public void setStartLocation(Location startLocation) { this.startLocation = startLocation; }

    public Location getEndLocation() { return endLocation; }
    public void setEndLocation(Location endLocation) { this.endLocation = endLocation; }

    public double getDistance() { return distance; }
    public void setDistance(double distance) { this.distance = distance; }

    public double getTravelTime() { return travelTime; }
    public void setTravelTime(double travelTime) { this.travelTime = travelTime; }

    public boolean isEcoFriendly() { return ecoFriendly; }
    public void setEcoFriendly(boolean ecoFriendly) { this.ecoFriendly = ecoFriendly; }
}
