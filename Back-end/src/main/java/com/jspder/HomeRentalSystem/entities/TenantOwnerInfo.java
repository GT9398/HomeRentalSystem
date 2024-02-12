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
@Table(name = "tenantownerinfo")
public class TenantOwnerInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column
    int owner_id;
    @Column
    int tenant_id;
    @Column
    int property_id;

    @Column
    String fname;
    @Column
    String lname;
    @Column
    String email;
    @Column
    String contact_no;
    public TenantOwnerInfo(int owner_id, int tenant_id, int property_id) {
        super();
        this.owner_id = owner_id;
        this.tenant_id = tenant_id;
        this.property_id = property_id;
    }

    public TenantOwnerInfo(int owner_id, int tenant_id, int property_id, String fname, String lname, String email,
                           String contact_no) {
        super();
        this.owner_id = owner_id;
        this.tenant_id = tenant_id;
        this.property_id = property_id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.contact_no = contact_no;
    }

}
