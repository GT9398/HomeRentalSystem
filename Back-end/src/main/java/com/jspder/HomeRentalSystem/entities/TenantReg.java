package com.jspder.HomeRentalSystem.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TenantReg {
    String email,password,fname,lname,contact_no,address;
    int areaid;

}
