package com.jspder.HomeRentalSystem.services;

import com.jspder.HomeRentalSystem.entities.City;
import com.jspder.HomeRentalSystem.repositories.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService {

    @Autowired
    CityRepository crepo;

    public City save(City l)
    {
        return crepo.save(l);
    }

    public City getRole(int id)
    {
        return crepo.findById(id).get();
    }

    public List<City> getAll()
    {
        return crepo.findAll();
    }


}
