package config;

import com.travelplanner.model.Location;
import com.travelplanner.model.Route;
import com.travelplanner.repository.LocationRepository;
import com.travelplanner.repository.RouteRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
@RequiredArgsConstructor
public class DataSeeder {
    private final LocationRepository locationRepository = null;
    private final RouteRepository routeRepository = null;

    @PostConstruct
    public void seedDatabase() {
        if (locationRepository.count() == 0) {
            Location loc1 = new Location();
            loc1.setName("Delhi");
            loc1.setLatitude(28.7041);
            loc1.setlongitude(77.1025);

            Location loc2 = new Location();
            loc2.setName("Mumbai");
            loc2.setLatitude(19.0760);
            loc2.setlongitude(72.8777);

            locationRepository.saveAll(Arrays.asList(loc1, loc2));

            Route route = new Route();
            route.setSource(loc1);
            route.setDestination(loc2);
            route.setDistance(1400);
            route.setTravelTime(20);
            route.setEcoFriendly(true);

            routeRepository.save(route);
        }
    }
}