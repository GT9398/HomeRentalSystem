package com.jspder.HomeRentalSystem.controllers;

import java.util.List;

import com.jspder.HomeRentalSystem.entities.Role;
import com.jspder.HomeRentalSystem.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RollController {

    @Autowired
    RoleService rservice;

    @GetMapping("/getallroles")
    public List<Role> getAll()
    {
        return rservice.getAll();
    }
}
