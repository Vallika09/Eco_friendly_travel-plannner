package com.travelplanner.service;
import com.travelplanner.model.Stop;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class StopService {
    private List<Stop> stops;

    public StopService() {
        this.stops = new ArrayList<>();
    }

    public void addStop(Stop stop) {
        stops.add(stop);
    }

    public List<Stop> findNearbyStops(String location) {
        List<Stop> nearbyStops = new ArrayList<>();
        for (Stop stop : stops) {
            if (stop.getLocation().equalsIgnoreCase(location)) {
                nearbyStops.add(stop);
            }
        }
        return nearbyStops;
    }
}
