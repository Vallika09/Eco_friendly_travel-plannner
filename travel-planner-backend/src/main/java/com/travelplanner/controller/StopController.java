package com.travelplanner.controller;
import com.travelplanner.model.Stop;
import com.travelplanner.service.StopService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stops")
public class StopController {
    private final StopService stopService;

    public StopController(StopService stopService) {
        this.stopService = stopService;
    }

    @GetMapping("/nearby")
    public List<Stop> getNearbyStops(@RequestParam String location) {
        return stopService.findNearbyStops(location);
    }
}
