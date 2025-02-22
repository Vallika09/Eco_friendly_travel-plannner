package com.travelplanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.travelplanner.model.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
}
