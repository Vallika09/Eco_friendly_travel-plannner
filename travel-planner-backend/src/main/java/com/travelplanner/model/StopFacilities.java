package com.travelplanner.model;

import java.util.List;

public class StopFacilities {
    private List<PetrolPump> petrolPumps;
    private List<Restaurant> restaurants;
    private List<Restroom> restrooms;

    public StopFacilities(List<PetrolPump> petrolPumps, List<Restaurant> restaurants, List<Restroom> restrooms) {
        this.petrolPumps = petrolPumps;
        this.restaurants = restaurants;
        this.restrooms = restrooms;
    }

    public List<PetrolPump> getPetrolPumps() { return petrolPumps; }
    public List<Restaurant> getRestaurants() { return restaurants; }
    public List<Restroom> getRestrooms() { return restrooms; }
}
