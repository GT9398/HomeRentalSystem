package com.jspder.HomeRentalSystem.repositories;


import com.jspder.HomeRentalSystem.entities.TenantOwnerInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TenantOwnerInfoRepository extends JpaRepository<TenantOwnerInfo, Integer> {

    @Query("select t.tenant_id from TenantOwnerInfo t where t.owner_id=:id")
    public TenantOwnerInfo getTenantId(int id);

}
