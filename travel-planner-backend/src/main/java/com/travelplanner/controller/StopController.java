package com.travelplanner.controller;

import com.travelplanner.model.*;
import com.travelplanner.repository.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StopController {

    private final StopRepository stopRepository;
    private final PetrolPumpRepository petrolPumpRepository;
    private final RestaurantRepository restaurantRepository;
    private final RestroomRepository restroomRepository;

    public StopController(StopRepository stopRepository,
                          PetrolPumpRepository petrolPumpRepository,
                          RestaurantRepository restaurantRepository,
                          RestroomRepository restroomRepository) {
        this.stopRepository = stopRepository;
        this.petrolPumpRepository = petrolPumpRepository;
        this.restaurantRepository = restaurantRepository;
        this.restroomRepository = restroomRepository;
    }

    @GetMapping("/routes/{routeId}/stops")
    public List<Stop> getStopsByRoute(@PathVariable Long routeId) {
        return stopRepository.findByRouteId(routeId);
    }

    @GetMapping("/stops/{stopId}/facilities")
    public StopFacilities getFacilitiesByStop(@PathVariable Long stopId) {
        return new StopFacilities(
                petrolPumpRepository.findByStopId(stopId),
                restaurantRepository.findByStopId(stopId),
                restroomRepository.findByStopId(stopId)
        );
    }
}
