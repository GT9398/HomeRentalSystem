package com.jspder.HomeRentalSystem.repositories;

import com.jspder.HomeRentalSystem.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role,Integer> {
}
