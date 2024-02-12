import React, { useState, useEffect } from "react";
import { json, useParams } from "react-router";

const OwnerInfo = () => {
 
  const [owner, setOwner] = useState({});
  const [property, setProperty] = useState(JSON.parse(localStorage.getItem("property")));
  const { ownerId } =useParams();

  useEffect(() => {
    // Fetch owner data based on ownerId from your API
    fetch(`http://localhost:8080/getownerbyid/${JSON.parse(localStorage.getItem("property")).owner_id.id}`)
      .then((response) => response.json())
      .then((data) => setOwner(data));
  }, [ownerId]);

 


  return (
    <div class="container mt-5">
    <h2 class="text-center mb-4">Owner Information</h2>
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th>Name</th>
          <td colspan="3">{owner.fname} {owner.lname}</td>
        </tr>
        <tr>
          <th>Contact No</th>
          <td colspan="3">{owner.contact_no}</td>
        </tr>
        <tr>
          <th>Owner Email</th>
          <td colspan="3">{owner.login_id?.email || "N/A"}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td colspan="3">{owner.address}</td>
        </tr>
        <tr>
          <th>Area Name</th>
          <td colspan="3">{owner.area_id?.name || "N/A"}</td>
        </tr>
        <tr>
          <th>City Name</th>
          <td colspan="3">{owner.area_id?.city_id?.name || "N/A"}</td>
        </tr>
      </tbody>
    </table>
  
    <h2 class="text-center mb-4">Property Information</h2>
    <div class="col-4 mx-auto">
      <img class="d-block img-fluid" src={`data:image/jpeg;base64,${property.image}`} alt="Property Image" />
    </div>
    <table class="table table-bordered mt-4">
      <tbody>
        <tr>
          <th>Property Area Name</th>
          <td colspan="3">{property.area_id?.name || "N/A"}</td>
        </tr>
        <tr>
          <th>Property Area Pincode</th>
          <td colspan="3">{property.area_id?.pincode || "N/A"}</td>
        </tr>
        <tr>
          <th>City</th>
          <td colspan="3">{property.area_id?.city_id?.name || "N/A"}</td>
        </tr>
        <tr>
          <th>Property Type</th>
          <td colspan="3">{property.property_type_id?.name || "N/A"}</td>
        </tr>
        <tr>
          <th>Property Name</th>
          <td colspan="3">{property.property_name}</td>
        </tr>
        <tr>
          <th>Property Description</th>
          <td colspan="3">{property.pdesc}</td>
        </tr>
        <tr>
          <th>Price</th>
          <td colspan="3">{property.price}</td>
        </tr>
        <tr>
          <th>Deposit</th>
          <td colspan="3">{property.deposit}</td>
        </tr>
      </tbody>  
    </table>
      <div className="row mt-4">
        <div className="col-md-12">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th style={{color:"red"}}>Facilities</th>
              </tr>
              {property.facilities.map((facility) => (
                <tr key={facility.id}>
                  <td>{facility.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button class="btn btn-success mt-4" onClick={(e) => { window.history.back() }}>Go Back</button>
  </div>

  );
};

export default OwnerInfo;