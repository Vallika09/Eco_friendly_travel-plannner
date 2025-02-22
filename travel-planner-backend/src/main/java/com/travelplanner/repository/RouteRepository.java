package com.travelplanner.repository;

import com.travelplanner.model.Route;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {

	List<Route> findBySourceAndDestination(String source, String destination);
}