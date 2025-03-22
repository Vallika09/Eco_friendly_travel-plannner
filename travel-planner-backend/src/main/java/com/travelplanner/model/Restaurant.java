package com.travelplanner.model;

import jakarta.persistence.*;

@Entity
@Table(name = "restaurants")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "stop_id", referencedColumnName = "id", nullable = false)
    private Stop stop;

    private String name;
    private double latitude;
    private double longitude;

    public Restaurant() {}

    public Restaurant(Stop stop, String name, double latitude, double longitude) {
        this.stop = stop;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Long getId() { return id; }
    public Stop getStop() { return stop; }
    public void setStop(Stop stop) { this.stop = stop; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public double getLatitude() { return latitude; }
    public void setLatitude(double latitude) { this.latitude = latitude; }
    public double getLongitude() { return longitude; }
    public void setLongitude(double longitude) { this.longitude = longitude; }
}
