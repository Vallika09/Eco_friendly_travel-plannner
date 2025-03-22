package com.travelplanner.repository;

import com.travelplanner.model.Restroom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface RestroomRepository extends JpaRepository<Restroom, Long> {
    List<Restroom> findByStopId(Long stopId);
}
