package com.jspder.HomeRentalSystem.services;

import com.jspder.HomeRentalSystem.entities.Area;
import com.jspder.HomeRentalSystem.repositories.AreaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AreaService {
    @Autowired
    AreaRepository arepo;

    public Area save(Area l)
    {
        return arepo.save(l);
    }

    public Area getById(int id)
    {
        return arepo.findById(id).get();
    }

    public List<Area> getAll()
    {
        return arepo.findAll();
    }

    public List<Area> getareabycity(int id)
    {
        return arepo.getareabyid(id);
    }

}
