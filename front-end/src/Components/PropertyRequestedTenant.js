import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PropertyRequestedTenant = () => {
  const [tenants, setTenants] = useState([]);
  const [obj, setObj] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getallrequests")
      .then(res => res.json())
      .then(data => {
        setObj(data);

        // Assuming data structure: { fname, lname, email, contact_no, tenant_id, property_id, owner_id }
        const extractedTenantData = data.filter(item => item.owner_id === JSON.parse(localStorage.getItem('loggedOwner')).id);
        setTenants(extractedTenantData);
      });
  }, []);

  return (
    <div>
      <div className='nav-item'>
                <ul className="nav navbar">
                    <li className="nav-item">
                    <Link to="/addproperty" className="nav-link">Add Property</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/showmyproperty" className="nav-link">Show My Property</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/propreq" className="nav-link">Property Request</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/ownerhome" className="nav-link">Owner Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/logout" className="nav-link">Log Out</Link></li>
                </ul>
                </div>
      <div>
        <h1 class="mb-4">Tenant Information</h1>
        <div class="mb-3">
          <h2>Tenant IDs</h2>
        </div>
        <table class="table table-striped table-bordered">
          <thead class="thead-dark">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>Tenant Id</th>
              <th>Property Id</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map(tenant => (
              <tr key={tenant.tenant_id}>
                <td>{tenant.fname}</td>
                <td>{tenant.lname}</td>
                <td>{tenant.email}</td>
                <td>{tenant.contact_no}</td>
                <td>{tenant.tenant_id}</td>
                <td>{tenant.property_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyRequestedTenant;