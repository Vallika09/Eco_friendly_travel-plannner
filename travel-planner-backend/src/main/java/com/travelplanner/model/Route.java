package com.travelplanner.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor  // Generates a default constructor (needed by JPA)
@AllArgsConstructor // Generates a constructor with all fields
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
    private boolean ecoFriendly; // Marks green routes

    public Route() {}
    
    // ✅ Custom constructor for easy object creation
    public Route(Location source, Location destination, double distance, double travelTime, boolean ecoFriendly) {
        this.source = source;
        this.destination = destination;
        this.distance = distance;
        this.travelTime = travelTime;
        this.ecoFriendly = ecoFriendly;
    }
}
