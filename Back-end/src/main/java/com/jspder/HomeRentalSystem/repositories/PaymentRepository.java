package com.jspder.HomeRentalSystem.repositories;

import com.jspder.HomeRentalSystem.entities.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Integer> {

    @Query("select p from Payment p where p.subscription_id.id is not null")
    List<Payment> findBySubscription_idIsNotNull();
}
