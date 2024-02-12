package com.jspder.HomeRentalSystem.repositories;

import java.util.List;

import com.jspder.HomeRentalSystem.entities.Area;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AreaRepository extends JpaRepository<Area, Integer>{
    @Query("select a from Area a where a.city_id.id = :id ")
    public List<Area> getareabyid(int id);
}
