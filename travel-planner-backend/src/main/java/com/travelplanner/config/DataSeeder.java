package com.travelplanner.config;

import com.travelplanner.model.Location;
import com.travelplanner.model.Route;
import com.travelplanner.repository.LocationRepository;
import com.travelplanner.repository.RouteRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class DataSeeder {
	private static final Logger logger = LoggerFactory.getLogger(DataSeeder.class);
    private final LocationRepository locationRepository;
    private final RouteRepository routeRepository;

    // ✅ Explicit Constructor Injection (Fixes the issue)
    public DataSeeder(LocationRepository locationRepository, RouteRepository routeRepository) {
        this.locationRepository = locationRepository;
        this.routeRepository = routeRepository;
    }

    @PostConstruct
    public void seedDatabase() {
    	logger.info("Seeding database...");
    	
        if (locationRepository.count() == 0) {
            Location loc1 = new Location("Delhi", 28.7041, 77.1025);
            Location loc2 = new Location("Mumbai", 19.0760, 72.8777);

            locationRepository.saveAll(Arrays.asList(loc1, loc2));
            logger.info("Inserted locations: Delhi & Mumbai");

            Route route = new Route(loc1, loc2, 1400, 20, true);
            routeRepository.save(route);
            logger.info("Inserted route: Delhi -> Mumbai");
        }
    }
}
