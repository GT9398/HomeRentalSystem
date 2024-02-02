package com.jspder.HomeRentalSystem.repositories;

import com.jspder.HomeRentalSystem.entities.Owner;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@Transactional
@Repository
public interface OwnerRepository extends JpaRepository<Owner,Integer> {
    @Query("SELECT o.contact_no FROM Owner o WHERE o.id = :ownerId")
    String findContactNoByOwnerId(@Param("ownerId") int ownerId);

    @Query("SELECT o FROM Owner o WHERE o.login_id.id = :id")
    public Owner findByLogin(int id);

    @Modifying
    @Query("delete from Owner o where o.login_id.id = :id")
    public void deleteOwnerByLoginId(int id);

    @Query("SELECT o FROM Owner o WHERE o.id = :id")
    public Owner getOwnerById(int id);
}
