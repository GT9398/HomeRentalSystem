package com.jspder.HomeRentalSystem.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentReg {

    int no_of_requests,no_of_properties;
    float amount;
    int login_id,subscription_id;
    String email;

}
