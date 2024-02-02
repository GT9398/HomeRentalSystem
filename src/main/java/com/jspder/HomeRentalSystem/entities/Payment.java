package com.jspder.HomeRentalSystem.entities;

import java.sql.Date;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "payment")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column
    String date;
    @Column
    float amount;
    @Column
    String transcation;


    @ManyToOne
    @JoinColumn(name = "login_id")
    Login login_id;

    @ManyToOne
    @JoinColumn(name = "subscription_id")
    Subscription subscription_id;
    public Payment(String date, float amount, String transcation, Login login_id, Subscription subscription_id) {
        super();
        this.date = date;
        this.amount = amount;
        this.transcation = transcation;
        this.login_id = login_id;
        this.subscription_id = subscription_id;
    }

}
