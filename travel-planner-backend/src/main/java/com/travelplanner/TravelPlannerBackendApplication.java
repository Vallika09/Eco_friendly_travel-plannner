package com.travelplanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages = {"com.travelplanner"})
@EntityScan("com.travelplanner.model")  // Explicitly scan for entity classes
public class TravelPlannerBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(TravelPlannerBackendApplication.class, args);
    }
}