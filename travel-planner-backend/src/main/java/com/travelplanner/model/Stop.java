package com.travelplanner.model;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "stops")
public class Stop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "route_id", referencedColumnName = "id", nullable = false)
    @JsonBackReference
    private Route route;

    private String name;
    private double latitude;
    private double longitude;

    @OneToMany(mappedBy = "stop", cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<PetrolPump> petrolPumps;

    @OneToMany(mappedBy = "stop", cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Restaurant> restaurants;

    @OneToMany(mappedBy = "stop", cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Restroom> restrooms;

    public Stop() {}

    public Stop(Route route, String name, double latitude, double longitude) {
        this.route = route;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Long getId() { return id; }
    public Route getRoute() { return route; }
    public void setRoute(Route route) { this.route = route; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public double getLatitude() { return latitude; }
    public void setLatitude(double latitude) { this.latitude = latitude; }
    public double getLongitude() { return longitude; }
    public void setLongitude(double longitude) { this.longitude = longitude; }
    
    @JsonIgnore  // Prevent infinite recursion when serializing
    public List<PetrolPump> getPetrolPumps() { return petrolPumps; }
    public void setPetrolPumps(List<PetrolPump> petrolPumps) { this.petrolPumps = petrolPumps; }

    @JsonIgnore
    public List<Restaurant> getRestaurants() { return restaurants; }
    public void setRestaurants(List<Restaurant> restaurants) { this.restaurants = restaurants; }

    @JsonIgnore
    public List<Restroom> getRestrooms() { return restrooms; }
    public void setRestrooms(List<Restroom> restrooms) { this.restrooms = restrooms; }

    public String getLocation() {
        return latitude + ", " + longitude;
    }

    @Override
    public String toString() {
        return "Stop{id=" + id + ", name='" + name + "', latitude=" + latitude +
               ", longitude=" + longitude + ", route=" + (route != null ? route.getId() : "null") + "}";
    }
}
