package com.jspder.HomeRentalSystem.repositories;

import com.jspder.HomeRentalSystem.entities.PropertyType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyTypeRepository extends JpaRepository<PropertyType,Integer> {
}
