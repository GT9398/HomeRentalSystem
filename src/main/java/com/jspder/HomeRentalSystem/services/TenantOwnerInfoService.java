package com.jspder.HomeRentalSystem.services;

import com.jspder.HomeRentalSystem.entities.TenantOwnerInfo;
import com.jspder.HomeRentalSystem.repositories.TenantOwnerInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TenantOwnerInfoService {

    @Autowired
    TenantOwnerInfoRepository toirepo;

    public TenantOwnerInfo save(TenantOwnerInfo l)
    {
        return toirepo.save(l);
    }

    public TenantOwnerInfo getTenantId(int id)
    {
        return toirepo.getTenantId(id);
    }
    public List<TenantOwnerInfo> getAllReq() {
        return toirepo.findAll();
    }

}
