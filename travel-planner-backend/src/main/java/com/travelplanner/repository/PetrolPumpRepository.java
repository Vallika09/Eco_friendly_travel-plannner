package com.travelplanner.repository;

import com.travelplanner.model.PetrolPump;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PetrolPumpRepository extends JpaRepository<PetrolPump, Long> {
    List<PetrolPump> findByStopId(Long stopId);
}
