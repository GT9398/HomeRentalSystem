package com.jspder.HomeRentalSystem.entities;

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
@Table(name = "subscription")
public class Subscription {

    @Id
    int id;
    @Column
    int no_of_requests;
    @Column
    float amount;
    @Column
    int no_of_properties;
}
