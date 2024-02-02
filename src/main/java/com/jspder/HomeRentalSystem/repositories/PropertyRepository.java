package com.jspder.HomeRentalSystem.repositories;

import com.jspder.HomeRentalSystem.entities.Property;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Transactional
@Repository
public interface PropertyRepository extends JpaRepository<Property,Integer> {
    @Modifying
    @Query("update Property set image=:file where id=:id")
    public int uploadPhoto(int id,byte[] file);

    @Query("select p from Property p where p.area_id.id = :id")
    public List<Property> getbyareaid(int id);

    @Query("select p from Property p where p.area_id.city_id.id = :id")
    public List<Property> getbycityid(int id);

    @Query("SELECT pt.name FROM Property p JOIN p.property_type_id pt WHERE p.id = :propertyId")
    String findPropertyTypeNameByPropertyId(@Param("propertyId") int propertyId);

    @Query("select p from Property p where p.owner_id.id = :id")
    List<Property> findByOwner_id(int id);
}
