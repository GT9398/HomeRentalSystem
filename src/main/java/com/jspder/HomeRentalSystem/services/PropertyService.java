package com.jspder.HomeRentalSystem.services;

import com.jspder.HomeRentalSystem.entities.Property;
import com.jspder.HomeRentalSystem.repositories.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService {

    @Autowired
    PropertyRepository prepo;

    public Property save(Property p)
    {
        return prepo.save(p);
    }
    public List<Property> getAll()
    {
        return prepo.findAll();
    }

    public boolean upload(int id,byte[] photo)
    {
        if(prepo.uploadPhoto(id, photo)==1)
            return true;
        else
        {
            return false;
        }
    }

    public List<Property> getbyAreaId(int id)
    {
        return prepo.getbyareaid(id);
    }

    public List<Property> getbyCityId(int id)
    {
        return prepo.getbycityid(id);
    }

    public String getPropertyTypeNameByPropertyId(int propertyId)
    {
        return prepo.findPropertyTypeNameByPropertyId(propertyId);
    }

    public void deletePropertyById(int id)
    {
        prepo.deleteById(id);
    }

    public List<Property> getPropertiesByOwnerId(int id)
    {
        return prepo.findByOwner_id(id);
    }


}
