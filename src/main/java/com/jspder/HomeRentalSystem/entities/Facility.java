package com.jspder.HomeRentalSystem.entities;

import java.util.Set;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "facility")
public class Facility {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column
    String name;

    @JsonIgnoreProperties("facilities")
    @ManyToMany
    @JoinTable(name = "facility_property",
            joinColumns = @JoinColumn(name="facility_id"),
            inverseJoinColumns = @JoinColumn(name="property_id")
    )
    Set<Property> properties;

    public Facility(String name) {
        super();
        this.name = name;
    }

    public Facility(int id) {
        super();
        this.id = id;
    }

    public Facility(int id, String name) {
        super();
        this.id = id;
        this.name = name;
    }

}
