package com.travelplanner.repository;

import com.travelplanner.model.Location;
import com.travelplanner.model.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {
    List<Route> findByStartLocationAndEndLocation(Location startLocation, Location endLocation);
}
