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
@Table(name="tenants")
public class Tenant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column
    String fname,lname;
    @Column
    int no_of_req_rem;
    @Column
    String contact_no;
    @Column
    String address;
    @ManyToOne
    @JoinColumn(name = "area_id")
    Area area_id;

    @OneToOne
    @JoinColumn(name = "login_id")
    Login login_id;

    @OneToOne
    @JoinColumn(name = "payment_id")
    Payment payment_id;



    public Tenant(String fname, String lname, int no_of_req_rem, String contact_no, String address, Area area_id,
                  Login login_id, Payment payment_id) {
        super();
        this.fname = fname;
        this.lname = lname;
        this.no_of_req_rem = no_of_req_rem;
        this.contact_no = contact_no;
        this.address = address;
        this.area_id = area_id;
        this.login_id = login_id;
        this.payment_id = payment_id;
    }

    public Tenant(String fname, String lname, int no_of_req_rem, String contact_no, String address, Area area_id,
                  Login login_id) {
        super();
        this.fname = fname;
        this.lname = lname;
        this.no_of_req_rem = no_of_req_rem;
        this.contact_no = contact_no;
        this.address = address;
        this.area_id = area_id;
        this.login_id = login_id;
    }

}
