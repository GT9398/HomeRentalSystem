package com.jspder.HomeRentalSystem.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "area")
public class Area {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column
    String name;
    @Column
    String pincode;
    @ManyToOne
    @JoinColumn(name = "city_id")
    City city_id;

    public Area(String name, String pincode, City city_id) {
        super();
        this.name = name;
        this.pincode = pincode;
        this.city_id = city_id;
    }

}
