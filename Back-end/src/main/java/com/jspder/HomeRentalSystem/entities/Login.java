package com.jspder.HomeRentalSystem.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name="login")
public class Login {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String email;
    String password;
    @ManyToOne
    @JoinColumn(name = "role_id")
    Role role_id;
    boolean status;

    public Login(String email, String password, Role role_id, boolean status) {
        super();
        this.email = email;
        this.password = password;
        this.role_id = role_id;
        this.status = status;
    }
}
