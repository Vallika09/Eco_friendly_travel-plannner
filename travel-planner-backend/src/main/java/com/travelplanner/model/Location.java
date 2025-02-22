package com.travelplanner.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor  // Generates a default constructor (needed by JPA)
@AllArgsConstructor // Generates a constructor with all fields
@Table(name = "locations")
public class Location {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double latitude;
    private double longitude;

    public Location() {}
    
    // ✅ Custom constructor for easy object creation
    public Location(String name, double latitude, double longitude) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
