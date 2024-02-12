package com.jspder.HomeRentalSystem.repositories;

import com.jspder.HomeRentalSystem.entities.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LoginRepository extends JpaRepository<Login,Integer> {
    @Query("Select l from Login l where email= :email and password= :password")
    public Optional<Login> getLogin(String email, String password);

    @Query("SELECT l FROM Login l WHERE l.email = ?1")
    Login findByEmail(String email);
}
