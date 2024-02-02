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
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "property")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    Owner owner_id;
    @OneToOne
    @JoinColumn(name = "area_id")
    Area area_id;
    @ManyToOne
    @JoinColumn(name = "property_type_id")
    PropertyType property_type_id;
    @Column
    String property_name;
    @Column
    String pdesc;
    @Column
    float price;
    @Column
    float deposit;
    byte [] image;
    @JsonIgnoreProperties("properties")
    @ManyToMany
    @JoinTable(name = "facility_property",
            joinColumns = @JoinColumn(name="property_id"),
            inverseJoinColumns = @JoinColumn(name="facility_id")
    )
    Set<Facility> facilities;


    public Property(Owner owner_id, Area area_id, PropertyType property_type_id, String property_name, String pdesc,
                    float price, float deposit, Set<Facility> facilities) {
        super();
        this.owner_id = owner_id;
        this.area_id = area_id;
        this.property_type_id = property_type_id;
        this.property_name = property_name;
        this.pdesc = pdesc;
        this.price = price;
        this.deposit = deposit;
        this.facilities = facilities;
    }

    public Property(Owner owner_id, Area area_id, PropertyType property_type_id, String property_name, String pdesc,
                    float price, float deposit, byte[] image, Set<Facility> facilities) {
        super();
        this.owner_id = owner_id;
        this.area_id = area_id;
        this.property_type_id = property_type_id;
        this.property_name = property_name;
        this.pdesc = pdesc;
        this.price = price;
        this.deposit = deposit;
        this.image = image;
        this.facilities = facilities;
    }

    public Property(Owner owner_id, Area area_id, PropertyType property_type_id, String property_name, String pdesc,
                    float price, float deposit) {
        super();
        this.owner_id = owner_id;
        this.area_id = area_id;
        this.property_type_id = property_type_id;
        this.property_name = property_name;
        this.pdesc = pdesc;
        this.price = price;
        this.deposit = deposit;
    }

    public Property(int id, Owner owner_id, Area area_id, PropertyType property_type_id, String property_name,
                    String pdesc, float price, float deposit, Set<Facility> facilities) {
        super();
        this.id = id;
        this.owner_id = owner_id;
        this.area_id = area_id;
        this.property_type_id = property_type_id;
        this.property_name = property_name;
        this.pdesc = pdesc;
        this.price = price;
        this.deposit = deposit;
        this.facilities = facilities;
    }


    public Property(Area area_id, PropertyType property_type_id, String property_name, String pdesc, float price,
                    float deposit, Set<Facility> facilities) {
        super();
        this.area_id = area_id;
        this.property_type_id = property_type_id;
        this.property_name = property_name;
        this.pdesc = pdesc;
        this.price = price;
        this.deposit = deposit;
        this.facilities = facilities;
    }

    public Property(int id) {
        super();
        this.id = id;
    }

}
