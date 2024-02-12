package com.jspder.HomeRentalSystem.services;

import com.jspder.HomeRentalSystem.entities.Subscription;
import com.jspder.HomeRentalSystem.repositories.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscriptionService {
    @Autowired
    SubscriptionRepository srepo;


    public Subscription save(Subscription s)
    {
        return srepo.save(s);
    }


    public Subscription getSub(int id)
    {
        return srepo.findById(id).get();
    }

    public List<Subscription> getAll()
    {
        return srepo.findAll();
    }

    public Subscription getSubById(int id) {
        return srepo.getSubById(id);
    }

}
