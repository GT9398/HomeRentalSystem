package com.jspder.HomeRentalSystem.controllers;

import java.util.List;

import com.jspder.HomeRentalSystem.entities.City;
import com.jspder.HomeRentalSystem.services.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CityController {

    @Autowired
    CityService rservice;

    @GetMapping("/getallcity")
    public List<City> getAll()
    {
        return rservice.getAll();
    }
}
