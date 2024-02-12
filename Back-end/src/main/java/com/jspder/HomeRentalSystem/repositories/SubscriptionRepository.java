package com.jspder.HomeRentalSystem.repositories;

import com.jspder.HomeRentalSystem.entities.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription,Integer> {
    @Query("select s from Subscription s where s.id=:id")
    public Subscription getSubById(int id) ;
}
