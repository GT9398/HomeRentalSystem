import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import LogInComp from './Components/LogInComp';
import HomeFunc from './Components/HomeFunc';
import TenantReg from './Components/TenantReg';
import ContactUs from './Components/ContactUs';
import OwnerReg from './Components/OwnerReg';
import AdminHome from './Components/AdminHome';
import TenantHome from './Components/TenantHome';
import AddProperty1 from './Components/AddProperty1';
import OwnerHome from './Components/OwnerHome';
import { useSelector } from 'react-redux';
import LogoutComp from './Components/LogoutComp';
import ShowMyProperty from './Components/ShowMyProperty';
import ShowAllTenant from './Components/ShowAllTenant';
import ShowAllOwners from './Components/ShowAllOwners';
import ShowAllProperties from './Components/ShowAllProperties';
import OwnerInfo from './Components/OwnerInfo';
import FooterComponent from './Components/Footer';
import Payment from './Components/Payment';
import ShowAllTransaction from './Components/ShowAllTransaction';
import PropertyRequestedTenant from './Components/PropertyRequestedTenant';

function App() {

    const mystate = useSelector((state)=>state.logged)
  return (
    <div className="App">
       <div style={{display:mystate.loggedIn?"none":"block"}}>
           <ul class="nav navbar">
                <li class="nav-item">
                    <Link to="/" class="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/login" class="nav-link">Log In</Link>
                </li>
                <li class="nav-item">
                    <Link to="/tenantreg" class="nav-link">Tenant Registration</Link>
                </li>
                <li class="nav-item">
                    <Link to="/ownerreg" class="nav-link">Owner Registration</Link>
                </li>
               
            </ul>
           
       </div>



        <Routes>
            <Route path='/' element={<HomeFunc/>}/>
            <Route path='/login' element={<LogInComp/>}/>
            <Route path='/tenantreg' element={<TenantReg/>}/>
            <Route path='/ownerreg' element={<OwnerReg/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/adminhome' element={<AdminHome/>}/>
            <Route path='/getalltenants' element={<ShowAllTenant/>}/>
            <Route path='/getallowners' element={<ShowAllOwners/>}/>
            <Route path='/getallproperties' element={<ShowAllProperties/>}/>
            <Route path='/getalltransactions' element={<ShowAllTransaction/>}/>
            <Route path='/tenanthome' element={<TenantHome/>}/> 
            <Route path='/ownerinfo' element={<OwnerInfo/>} /> 
            <Route path='/ownerhome' element={<OwnerHome/>}/> 
            <Route path='/addproperty' element={<AddProperty1/>}/>
            <Route path='/showmyproperty' element={<ShowMyProperty/>}/>
            <Route path='/propreq' element={<PropertyRequestedTenant/>}/>
            <Route path='/logout' element={<LogoutComp/>}/>
            <Route path='/payment' element={<Payment/>}/>
       </Routes>
       <FooterComponent/>
    </div>
  );
}


export default App;
