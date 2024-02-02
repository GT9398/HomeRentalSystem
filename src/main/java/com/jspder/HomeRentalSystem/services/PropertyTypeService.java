package com.jspder.HomeRentalSystem.services;

import com.jspder.HomeRentalSystem.entities.PropertyType;
import com.jspder.HomeRentalSystem.repositories.PropertyTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyTypeService {

    @Autowired
    PropertyTypeRepository ptrepo;

    public PropertyType save(PropertyType l)
    {
        return ptrepo.save(l);
    }

    public PropertyType getById(int id)
    {
        return ptrepo.findById(id).get();
    }

    public List<PropertyType> getAll()
    {
        return ptrepo.findAll();
    }

	/*public List<PropertyType> getareabycity(int id)
	{
		return arepo.getareabyid(id);
	}*/

}
