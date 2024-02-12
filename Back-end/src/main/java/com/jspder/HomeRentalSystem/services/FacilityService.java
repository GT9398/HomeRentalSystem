package com.jspder.HomeRentalSystem.services;

import com.jspder.HomeRentalSystem.entities.Facility;
import com.jspder.HomeRentalSystem.repositories.FacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacilityService {

    @Autowired
    FacilityRepository frepo;

    public Facility save(Facility f)
    {
        return frepo.save(f);
    }
    public List<Facility> getAll()
    {
        return frepo.findAll();
    }
    public Facility getById(int id)
    {
        return frepo.findById(id).get();
    }

    public List<Facility> getFacilitiesByPropertyId(int propertyId) {
        return frepo.findFacilitiesByPropertyId(propertyId);
    }

}
