

import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import bootstrap from 'bootstrap';
import { useEffect, useReducer, useState } from "react"


export default function ShowAllProperties() {
    const[cityid,setCityid]=useState();
    const[areaid,setAreaid]=useState();

    const[city,setCity]=useState();
    const[area,setArea]=useState();
    useEffect(()=>{
        fetch("http://localhost:8080/getallcity")
        .then(res => res.json())
        .then(data => {setCity(data)})
        //return()=>{cont.abort()};
     },[]);
    
    const getAreaByCity=(v)=>{
        fetch("http://localhost:8080/getareabycity?city_id="+v)
        .then(resp=>resp.json())
        .then(data=>setArea(data))
    }


    const[property,setProperty]=useState();
    useEffect(()=>{
       // fetch("http://localhost:9000/egetallproperty")
        fetch("http://localhost:8080/getallproperty")
        .then(res => res.json())
        .then(data => {setProperty(data)})
     },[]);

     const getPropertyByCity=(v)=>{
        fetch("http://localhost:8080/getpropertybycityid/"+v)
        .then(resp=>resp.json())
        .then(data=>setProperty(data))
    }
    const getPropertyByArea=(v)=>{
        fetch("http://localhost:8080/getpropertybyareaid/"+v)
        .then(resp=>resp.json())
        .then(data=>setProperty(data))
    }

    const deleteProperty =(id) =>
    {
       fetch("http://localhost:8080/deleteproperty/"+id,{ method: 'DELETE'})
       .then(resp => {
           if(resp.ok)
           { 
               console.log(resp)
               return resp.text();
           }
         else
           {
              console.log("server error")
             throw  new Error("server error")  
           }
         })
         .then(text => text.length ? JSON.parse(text):{})
       .then(obj => {
               
               if(Object.keys(obj).length===0)
               {

                   //alert("Property deleted successfully");
                  window.location.reload();
               }
               else{
                   //alert("Propery can not deleted");
                   window.location.reload();

               }
       })
    }



        return (
            <div>
                <div className='nav-item'>
                    <ul className="nav navbar">
                        <li className="nav-item">
                        <Link to="/getalltenants" className="nav-link">ShowAllTenant</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/getallowners" className="nav-link">ShowAllOwner</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/getallproperties" className="nav-link">ShowAllProperties</Link></li>
                        <li className="nav-item">
                        <Link to="/getalltransactions" className="nav-link">ShowAllTransaction</Link></li>
                        
                        <li className="nav-item">
                        <Link to="/logout" className="nav-link">Log Out</Link></li>
                    </ul>
                </div>
            <h1>Welcome Admin</h1>
            {/* <p>Welcome {JSON.parse(localStorage.getItem("loggedUser")).email}</p>       */}


           
               
               < div className="mb-3">
                <label htmlFor="city" className="form-label">Enter City Name: </label>
                    <select id="city" name="city" 
                    onChange={(e) => { setCityid(e.target.value);getAreaByCity(e.target.value);getPropertyByCity(e.target.value)}}>
                        {city && city.map((c)=>(
                             <option key={c.id} value={c.id} >{c.name}</option>
                        ))}             
                    </select>
                </div>


            <div className="mb-3">
                <label htmlFor="area" className="form-label">Enter area Name: </label>
                    <select id="area" name="area"  onChange={(e) => {setCityid(e.target.value); getPropertyByArea(e.target.value)}}>
                        {area && area.map((c)=>(
                             <option key={c.id} value={c.id} >{c.name}</option>
                        ))}     
                    </select>
            </div>


            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {property && property.map((property) => (
                        <div className="card" style={{ width: '18rem', margin: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }} key={property.id}>
                        <img src={`data:image/jpeg;base64,${property.image}`} className="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">{property.property_name}</h5>
                            <p className="card-text">{property.pdesc}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price: {property.price}</li>
                            <li className="list-group-item">Deposit: {property.deposit}</li>
                        </ul>
                        <div className="card-body">
                            
                            <Link
                                to={{
                                pathname: `/ownerinfo`,
                                 state: property.id, // Pass property as a prop
                                }}
                                className="card-link"
                                onClick={(e)=>{localStorage.setItem("property",JSON.stringify(property))}}
                            >
                                View More
                            </Link>
                            <Link>
                                <button className="btn  btn-block" id="c-displanbtn" onClick={() => deleteProperty(property && property.id)}>Delete</button>
                           </Link>
                            <button value={property.id} onClick={(e)=>{ localStorage.setItem("property",JSON.stringify(property));}}>click</button> 
                             <a href="#" className="card-link">Like</a>
                             {/*  */}
                        </div>
                        </div>
                    ))}
                </div>
                    

        </div>
        );
    }


   