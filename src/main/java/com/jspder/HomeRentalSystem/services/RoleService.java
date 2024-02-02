package com.jspder.HomeRentalSystem.services;

import com.jspder.HomeRentalSystem.entities.Role;
import com.jspder.HomeRentalSystem.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    @Autowired
    RoleRepository rrepo;

    public List<Role> getAll()
    {
        return rrepo.findAll();
    }

    public Role getRole(int id)
    {
        return rrepo.findById(id).get();
    }
}
