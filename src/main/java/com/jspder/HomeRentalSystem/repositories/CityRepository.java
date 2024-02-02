package com.jspder.HomeRentalSystem.repositories;

import com.jspder.HomeRentalSystem.entities.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends JpaRepository<City,Integer> {
    @Query("select c from City c where c.id=:id ")
    public List<City> getcitybyid(int id);

}
