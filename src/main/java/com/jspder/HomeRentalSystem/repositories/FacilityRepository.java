package com.jspder.HomeRentalSystem.repositories;

import java.util.List;

import com.jspder.HomeRentalSystem.entities.Facility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FacilityRepository  extends JpaRepository<Facility, Integer>{

    @Query("SELECT f FROM Facility f JOIN f.properties p WHERE p.id = :propertyId")
    List<Facility> findFacilitiesByPropertyId(@Param("propertyId") int propertyId);
}
