package com.jspder.HomeRentalSystem.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PropertyReg {

    int area_id,property_type_id,owner_id;
    String property_name,pdesc;
    float price,deposit;
    Set<Integer> facilities;

}
