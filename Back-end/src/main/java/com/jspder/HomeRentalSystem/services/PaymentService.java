package com.jspder.HomeRentalSystem.services;

import com.jspder.HomeRentalSystem.entities.Login;
import com.jspder.HomeRentalSystem.entities.Payment;
import com.jspder.HomeRentalSystem.repositories.LoginRepository;
import com.jspder.HomeRentalSystem.repositories.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {
    @Autowired
    PaymentRepository prepo;

    @Autowired
    LoginRepository lrepo;

    public void updateLoginStatusBasedOnPayments() {
        List<Payment> paymentsWithSubscription = prepo.findBySubscription_idIsNotNull();

        for (Payment payment : paymentsWithSubscription) {
            Login login = payment.getLogin_id();
            login.setStatus(true);  // Set the status to true
            lrepo.save(login);
        }
    }

    public Payment save(Payment l)
    {
        return prepo.save(l);
    }

    public List<Payment> getAll()
    {
        return prepo.findAll();
    }


}
