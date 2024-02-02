package com.jspder.HomeRentalSystem.controllers;

import java.util.List;

import com.jspder.HomeRentalSystem.entities.RequestInfo;
import com.jspder.HomeRentalSystem.entities.TenantOwnerInfo;
import com.jspder.HomeRentalSystem.services.TenantOwnerInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TenantOwnerInfoController {

    @Autowired
    TenantOwnerInfoService toiservice;

//	@PostMapping("/save")
//	public TenantOwnerInfo saveTenantOwnerInfo(@RequestBody TenantOwnerInfo f)
//	{
//		return toiservice.save(f);
//	}

    @PostMapping("/saverequest")
    public TenantOwnerInfo saveInfo(@RequestBody RequestInfo rf)
    {
        TenantOwnerInfo t=new TenantOwnerInfo(rf.getOwner_id(), rf.getTenant_id(), rf.getProperty_id(),rf.getFname(),rf.getLname(),rf.getEmail(),rf.getContact_no());
        TenantOwnerInfo saved=toiservice.save(t);
        return saved;
    }

    @GetMapping("/gettenantid/{id}")
    public TenantOwnerInfo getTenantId(@PathVariable("id") int id)
    {
        return toiservice.getTenantId(id);
    }
    @GetMapping("getallrequests")
    public List<TenantOwnerInfo> getAllReq()
    {
        return toiservice.getAllReq();
    }

}
