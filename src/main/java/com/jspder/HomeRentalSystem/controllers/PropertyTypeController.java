package com.jspder.HomeRentalSystem.controllers;

import java.util.List;

import com.jspder.HomeRentalSystem.entities.PropertyType;
import com.jspder.HomeRentalSystem.services.PropertyTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PropertyTypeController {


    @Autowired
    PropertyTypeService ptservice;

    @GetMapping("/getallpropertytype")
    public List<PropertyType> getAll()
    {
        return ptservice.getAll();
    }
}
