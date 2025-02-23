package com.travelplanner.config;

import com.travelplanner.model.Location;
import com.travelplanner.model.Route;
import com.travelplanner.repository.LocationRepository;
import com.travelplanner.repository.RouteRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;
import java.util.Arrays;

@Component
public class DataSeeder {

    private final LocationRepository locationRepository;
    private final RouteRepository routeRepository;

    public DataSeeder(LocationRepository locationRepository, RouteRepository routeRepository) {
        this.locationRepository = locationRepository;
        this.routeRepository = routeRepository;
    }

    @PostConstruct
    public void seedDatabase() {
        // ✅ Insert locations
        Location delhi = new Location("Delhi", 28.7041, 77.1025);
        Location mumbai = new Location("Mumbai", 19.0760, 72.8777);

        locationRepository.saveAll(Arrays.asList(delhi, mumbai));

        // ✅ Insert a route
        Route route = new Route(delhi, mumbai, 1400, 20, true);
        routeRepository.save(route);
    }
}
