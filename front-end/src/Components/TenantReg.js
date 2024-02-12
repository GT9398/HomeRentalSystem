import { useEffect, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"; 




export default function TenantReg() {
   // const cont=new AbortController();
    const[cities,setCities]=useState([]);
    const CITYURL="http://localhost:8080/getallcity";

    var[areas,setAreas]=useState([]);
    const[cityid,setCityid]=useState(1);
    var AREAURL="http://localhost:8080/getareabycity?city_id="+cityid;//need to add areaid
    const ci=()=>{
        setCityid(info.city.value);
    }
    const[filtered,setFiltered]=useState(areas);
    function filt()
    {
        // areas=areas.filter(a=>{
        //     return a.city_id=cityid;
        // })
      // var AREAURL="http://localhost:8080/getareabycity?city_id="+cityid;//need to add areaid

        
        setFiltered(areas.filter(a=>{
            return a.city_id===2;
        }));
    }
    const navigate = useNavigate(); 

    const getArea=(v)=>{
        fetch("http://localhost:8080/getareabycity?city_id="+v)
        .then(resp=>resp.json())
        .then(data=>setAreas(data))
   }

   
 
useEffect(()=>{
    fetch(CITYURL)
    .then(res => res.json())
    .then(data => {setCities(data)})
    //return()=>{cont.abort()};
},[]);
useEffect(()=>{
    fetch(AREAURL)
    .then(res => res.json())
    .then(data => {setAreas(data)})
   // return()=>{cont.abort()};
},[]);

    const init = 
    {
    
        email: { value: "", hasError: true, touched: false, error: "" },
        password : { value: "", hasError: true, touched: false, error: "" },
        fname: { value: "", hasError: true, touched: false, error: "" },
        lname: { value: "", hasError: true, touched: false, error: "" },
        contact_no: { value: "", hasError: true, touched: false, error: "" },
        city: { value: "", hasError: true, touched: false, error: "" },
        areaid: { value: "", hasError: true, touched: false, error: "" },
       //pincode: { value: "", hasError: true, touched: false, error: "" },
        address:{ value: "", hasError: true, touched: false, error: "" },
        isFormValid:false
    }
   


    const validateData = (name, value) => {
        let hasError = false, error = "";
        switch (name) {
            case "email":
                let regex4 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

                if (!regex4.test(value)) {
                    hasError = true;
                    error = "Email should be valid"
                }
                break;
            case "password":
                let regex1 = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{5,}$/;

                if (!regex1.test(value)) {
                    hasError = true;
                    error = "Password Should be more than 5 characters and valid "
                }
                break;
            case "fname":
                let regex2 = /^[A-Za-z]{1,15}$/;

                if (!regex2.test(value)) {
                    hasError = true;
                    error = "First Name Should be valid and not more than 15 characters"
                }
                break;
            case "lname":
                let regex3 = /^[A-Za-z]{1,15}$/;

                if (!regex3.test(value)) {
                    hasError = true;
                    error = "Last Name Should be valid and not more than 15 characters"
                }
                break;
            case "contact_no":
                let regex5 = /^[0-9]{10}$/;

                if (!regex5.test(value)) {
                    hasError = true;
                    error = "contact_no Should be of 10 digits Only"
                }
                break;
           
            case "address":
                let regex10 = /^[A-Za-z\s\d{1,}]{1,}$/;

                if (!regex10.test(value)) {
                    hasError = true;
                    error = "address Should be contain only Words"
                }
                break;
        }
        return { hasError, error }

    }



    const reducer = (state, action) => {
        switch(action.type)
        {
            case 'update': {
                const { name, value, hasError, error, touched, isFormValid } = action.data;
                return {
                    ...state,
                    [name]: { ...state[name], value, hasError, error, touched },
                    isFormValid
                }   //modifying and returning new object as state
            }
            case 'reset':
                return init;
        }
    }

  
    const [info, dispatch] = useReducer(reducer,init);
    

    const onInputChange = (name, value, dispatch) => {
        //validation logic
        const { hasError, error } = validateData(name, value); //form field, latest value
        //which key to be modified - value, hasError, error, touched 
        let isFormValid = true;
        for (const key in info) {
            let item = info[key];
           
            if (item.hasError) {
                isFormValid = false;
                break;
            }
        }
        dispatch({ type: 'update', data: { name, value, hasError, error, touched: true, isFormValid } })
    }

    const onFocusOut = (name, value, dispatch) => {
        const { hasError, error } = validateData(name, value)
        let isFormValid = true
        for (const key in info) {
            const item = info[key]
            if (key === name && hasError) {
                isFormValid = false
                break
            } else if (key !== name && item.hasError) {
                isFormValid = false
                break
            }
        }
        dispatch({
            type: "update",
            data: { name, value, hasError, error, touched: true, isFormValid },
        })
    }


    const sendData= (e) => {
            //json
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {'content-type':'application/json' },
            body: JSON.stringify({
                email: info.email.value,
                password: info.password.value,
                fname: info.fname.value,
                lname: info.lname.value,
               // city: info.city.value,
                areaid: info.areaid.value,
                contact_no: info.contact_no.value,
                address:info.address.value
               // pincode: info.pincode.value
            })
            
        }
        fetch("http://localhost:8080/regtenant", reqOptions)
       // .then(data =>{ localStorage.setItem("loggedOwner",JSON.stringify(data))})
        .then(localStorage.setItem("newReg",JSON.stringify(info.email.value)))
        .then(resp => {
            if (resp.ok) {
                
                navigate("/payment");
            } else {
                alert("errr");
            }
        })
};
        
        


    return (
        <div>
            <h1>Tenant SignUp Form</h1>
   
            <form >


                
            <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter Email id: </label>
                    <input type="text" className="form-control" id="email" name="email" value={info.email.value}
                    onChange={(e) => { onInputChange("email", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("email", e.target.value, dispatch) }} />
                    <div id="emailhelp" className="form-text">....</div>
                    <p style={{ display: info.email.touched && info.email.hasError ? "block" : "none", color: "red" }}> {info.email.error} </p>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Enter Password: </label>
                    <input type="password" className="form-control" id="password" name="password" value={info.password.value}
                    onChange={(e) => { onInputChange("password", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("password", e.target.value, dispatch) }} />
                    <div id="emailhelp" className="form-text">....</div>
                    <p style={{ display: info.password.touched && info.password.hasError ? "block" : "none", color: "red" }}> {info.password.error} </p>
                </div>

               <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Enter First name: </label>
                    <input type="text" className="form-control" id="fname" name="fname" value={info.fname.value}
                    onChange={(e) => { onInputChange("fname", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("fname", e.target.value, dispatch) }} />
                    <div id="fnamehelp" className="form-text">....</div>
                    <p style={{ display: info.fname.touched && info.fname.hasError ? "block" : "none", color: "red" }}> {info.fname.error} </p>
                </div>


                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Enter Last Name: </label>
                    <input type="text" className="form-control" id="lname" name="lname" value={info.lname.value}
                     onChange={(e) => { onInputChange("lname", e.target.value, dispatch) }}
                     onBlur={(e) => { onFocusOut("lname", e.target.value, dispatch) }} />
                    <div id="lnamehelp" className="form-text">....</div>
                    <p style={{ display: info.lname.touched && info.lname.hasError ? "block" : "none", color: "red" }}> {info.lname.error} </p>
                </div> 

               

                 <div className="mb-3">
                    <label htmlFor="contact_no" className="form-label">Enter contact_no No.: </label>
                    <input type="number" className="form-control" id="contact_no" name="contact_no" value={info.contact_no.value}
                  onChange={(e) => { onInputChange("contact_no", e.target.value, dispatch) }}
                  onBlur={(e) => { onFocusOut("contact_no", e.target.value, dispatch) }} />
                    <div id="contact_nohelp" className="form-text">....</div>
                    <p style={{ display: info.contact_no.touched && info.contact_no.hasError ? "block" : "none", color: "red" }}> {info.contact_no.error} </p>
                </div>


                
  
                



                <div className="row">
        <div className="col-md-6">
            <div className="mb-3">
                <label htmlFor="city" className="form-label">Enter City Name: </label>
                <select
                    id="city"
                    name="city"
                    value={info.city.value}
                    onChange={(e) => { onInputChange("city", e.target.value, dispatch); getArea(e.target.value) }}
                    onBlur={(e) => { onFocusOut("city", e.target.value, dispatch); setCityid(info.city.value); }}
                    className="form-select"
                >
                    <option value="">Select City</option>
                    {cities.map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
                <div id="cityhelp" className="form-text">....</div>
            </div>
        </div>

        <div className="col-md-6">
            <div className="mb-3">
                <label htmlFor="areaid" className="form-label">Enter Area Name: </label>
                <select
                    id="areaid"
                    name="areaid"
                    value={info.areaid.value}
                    onChange={(e) => { onInputChange("areaid", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("areaid", e.target.value, dispatch) }}
                    className="form-select"
                >
                    <option value="">Select Area</option>
                    {areas.map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
                <div id="areaidhelp" className="form-text">....</div>
            </div>
        </div>
    </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Enter Address line: </label>
                    <input type="text" className="form-control" id="address" name="address" value={info.address.value}
                     onChange={(e) => { onInputChange("address", e.target.value, dispatch) }}
                     onBlur={(e) => { onFocusOut("address", e.target.value, dispatch) }} />
                    <div id="addresshelp" className="form-text">....</div>
                    <p style={{ display: info.address.touched && info.address.hasError ? "block" : "none", color: "red" }}> {info.address.error} </p>
                </div> 


            <button type="submit" className="btn bttn-primary mb-3" onClick={(e) => {sendData(e)}}>Submit</button>
            <button type="reset" className="btn bttn-primary mb-3" onClick={() => {dispatch({type:'reset'})}}>Reset</button>
                                     
            <p>{JSON.stringify({
                    email: info.email.value,
                    password: info.password.value,
                    fname: info.fname.value,
                    lname: info.lname.value,
                    city: info.city.value,
                    areaid: info.areaid.value,
                    contact_no: info.contact_no.value,
                    address:info.address.value,
                    cityid:cityid,
                    pincode: info.pincode.value//
                 })}</p>//
              </form>
        </div>
    )
}