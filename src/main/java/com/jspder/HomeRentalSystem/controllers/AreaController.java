package com.jspder.HomeRentalSystem.controllers;

import java.util.List;

import com.jspder.HomeRentalSystem.entities.Area;
import com.jspder.HomeRentalSystem.services.AreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AreaController {
    @Autowired
    AreaService aService;
    @GetMapping("/getallarea")
    public List<Area> getAll()
    {
        return aService.getAll();
    }

    @GetMapping("/getareabycity")
    public List<Area> getareabycity(@RequestParam("city_id") int id)
    {
        return aService.getareabycity(id);////
    }
}
