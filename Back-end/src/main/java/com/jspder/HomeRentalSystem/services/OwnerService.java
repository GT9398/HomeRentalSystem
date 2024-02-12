package com.jspder.HomeRentalSystem.services;

import com.jspder.HomeRentalSystem.entities.Owner;
import com.jspder.HomeRentalSystem.repositories.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OwnerService {
    @Autowired
    OwnerRepository orepo;

    public Owner save(Owner l)
    {
        return orepo.save(l);
    }

    public Owner getById(int id)
    {
        return orepo.findById(id).get();
    }

    public String getContactNoByOwnerId(int ownerId) {
        return orepo.findContactNoByOwnerId(ownerId);
    }

    public Owner findOwnerByLogin(int id)
    {
        return orepo.findByLogin(id);
    }

    public List<Owner> getAll()
    {
        return orepo.findAll();
    }

    public void deleteOwnerById(int id)
    {
        orepo.deleteById(id);
    }

    public void deleteOwnerByLoginId(int id)
    {
        orepo.deleteOwnerByLoginId(id);
    }
    public Owner getOwnerByid(int id)
    {
        return orepo.getOwnerById(id);
    }

}
