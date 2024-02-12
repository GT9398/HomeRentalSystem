import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ShowAllProperties from './ShowAllProperties';





export default function AdminHome() {
  return (

    <div>
      <div className='nav-item'>
        <h1>Welcome To AdminHome</h1>
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
      
    </div>
  );
}