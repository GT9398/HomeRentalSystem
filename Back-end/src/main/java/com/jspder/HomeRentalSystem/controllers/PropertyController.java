package com.jspder.HomeRentalSystem.controllers;

import java.util.*;
import java.util.Set;

import com.jspder.HomeRentalSystem.entities.*;
import com.jspder.HomeRentalSystem.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PropertyController {
    @Autowired
    PropertyService pservice;
    @Autowired
    AreaService aservice;
    @Autowired
    OwnerService oservice;
    @Autowired
    PropertyTypeService ptservice;
    @Autowired
    FacilityService fservice;

    @PostMapping("/saveproperty")
    public Property savFacility(@RequestBody Property f)
    {
        return pservice.save(f);
    }

    @GetMapping("/getallproperty")
    public List<Property> getAll()
    {
        return pservice.getAll();
    }

    @PostMapping("/regproperty")
    public Property regProperty(@RequestBody PropertyReg pr)
    {
        Area area = aservice.getById(pr.getArea_id());
        PropertyType pt=ptservice.getById(pr.getProperty_type_id());
        Owner owner=oservice.getById(pr.getOwner_id());
        Set<Integer> fids = pr.getFacilities();

        Set<Facility> facilities = new HashSet<>();
        for(int n : fids)
        {
            Facility facility = fservice.getById(n);
            facilities.add(facility);
        }

        Property p=new Property(owner, area, pt, pr.getProperty_name(), pr.getPdesc(), pr.getPrice(), pr.getDeposit(), facilities);
        Property saved=pservice.save(p);
        return saved;

    }

    @PostMapping(value = "uploadimage/{did}",consumes = "multipart/form-data")
    public boolean uploadImage(@PathVariable("did") int did,@RequestBody MultipartFile file)
    {
        boolean flag=true;
        try
        {
            flag=pservice.upload(did, file.getBytes());
        }
        catch(Exception e)
        {
            flag=false;
        }
        return flag;
    }

    @GetMapping("getpropertybyareaid/{aid}")
    public List<Property> getByAreaId(@PathVariable("aid") int id)
    {
        return pservice.getbyAreaId(id);
    }

    @GetMapping("getpropertybycityid/{cid}")
    public List<Property> getByCityId(@PathVariable("cid") int id)
    {
        return pservice.getbyCityId(id);
    }

    @GetMapping("/propertyTypeName/{propertyId}")
    public ResponseEntity<String> getPropertyTypeNameByPropertyId(@PathVariable int propertyId) {
        String propertyTypeName = pservice.getPropertyTypeNameByPropertyId(propertyId);
        return ResponseEntity.ok(propertyTypeName);
    }

    @DeleteMapping("deleteproperty/{propertyId}")
    public ResponseEntity<Void> deletePropertyById(@PathVariable int propertyId)
    {
        pservice.deletePropertyById(propertyId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/getpropertybyownerid/{cid}")
    public List<Property> getPropertiesByOwnerId(@PathVariable("cid") int id)
    {
        return pservice.getPropertiesByOwnerId(id);
    }
}
