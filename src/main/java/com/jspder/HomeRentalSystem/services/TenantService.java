package com.jspder.HomeRentalSystem.services;

import com.jspder.HomeRentalSystem.entities.Tenant;
import com.jspder.HomeRentalSystem.repositories.TenantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TenantService {


    @Autowired
    TenantRepository trepo;

    public Tenant save(Tenant l)
    {
        return trepo.save(l);
    }

    public Tenant findTenantByLogin(int id) {
        return trepo.findTenantByLogin(id);
    }

    public List<Tenant> getAll()
    {
        return trepo.findAll();
    }

    public void deleteTenantById(int id)
    {
        trepo.deleteById(id);
    }

    public void deleteTenantByLoginId(int id)
    {
        trepo.deleteTenantByLoginId(id);
    }

    public Tenant getTenantByid(int id)
    {
        return trepo.getTenantById(id);
    }

}
