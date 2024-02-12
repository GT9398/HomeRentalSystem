package com.jspder.HomeRentalSystem.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RequestInfo {

    int owner_id;

    int tenant_id;

    int property_id;

    String fname;

    String lname;

    String email;

    String contact_no;

}
