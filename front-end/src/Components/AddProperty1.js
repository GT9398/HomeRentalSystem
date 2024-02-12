import { useEffect, useReducer, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';

export default function AddProperty1() {
//    const cont=new AbortController();//
   const[cities,setCities]=useState([]);
   const CITYURL="http://localhost:8080/getallcity";

   const[areas,setAreas]=useState([]);
   const[cityid,setCityid]=useState(1);
//   const AREAURL="http://localhost:8080/getallarea"+//cityid;//need to add areaid

   const[propertytype,setPropertytype]=useState([]);
   const PROPERTYTYPEURL="http://localhost:8080/getallpropertytype";

   const[homeFacility,setHomeFacility]=useState([]);
   const FACILITYURL="http://localhost:8080/getallfacility";
   
 
   
   var AREAURL="http://localhost:8080/getareabycity?city_id="+cityid;//need to add areaid

   const getArea=(v)=>{
    fetch("http://localhost:8080/getareabycity?city_id="+v)
    .then(resp=>resp.json())
    .then(data=>setAreas(data))
}

useEffect(()=>{
   fetch(CITYURL)
   .then(res => res.json())
   .then(data => {setCities(data)})
    // return()=>{cont.abort()};
},[]);
/*useEffect(()=>{
   fetch(AREAURL)
   .then(res => res.json())
   .then(data => {setAreas(data)})
    return()=>{cont.abort()};
},[]);//
useEffect(()=>{
   fetch(PROPERTYTYPEURL)
   .then(res => res.json())
   .then(data => {setPropertytype(data)})
    return()=>{cont.abort()};
},[]);//
useEffect(()=>{
   fetch(FACILITYURL)
   .then(res => res.json())
   .then(data => {setHomeFacility(data)})
   return()=>{cont.abort()};
},[]);

const [item, setItem] = useState(1);

useEffect(() => {
const items = JSON.parse(localStorage.getItem('loggedOwner')).id;
if (items) {
setItem(items);
}
}, []);*/


    const init = {
        owner_id:{value: "", hasError: true, touched: false, error: ""},
        areaid:  { value: "", hasError: true, touched: false, error: "" },             
        propertytype_id:  { value: "", hasError: true, touched: false, error: "" },
        propertyname:  { value: "", hasError: true, touched: false, error: "" },
        pdesc:  { value: "", hasError: true, touched: false, error: "" },
        price:  { value: "", hasError: true, touched: false, error: "" },
        deposit:  { value: "", hasError: true, touched: false, error: "" },
        city: { value: "", hasError: true, touched: false, error: "" },
        facility: { value: "", hasError: true, touched: false, error: "" },//
        image: { value: "", hasError: true, touched: false, error: "" },
        facility: { value: [], hasError: true, touched: false, error: "" }
        
    }


    const validateData = (name, value) => {
        let hasError = false, error = "";
        switch (name) {
            
            case "propertyname":
                let regex10 = /^[A-Za-z\s\d{1,}]{1,}$/;

                if (!regex10.test(value)) {
                    hasError = true;
                    error = "property name Should be contain only Words"
                }
                break;
            case "pdesc":
                let regex11 = /^[A-Za-z\s\d{1,}]{1,}$/;

                if (!regex11.test(value)) {
                    hasError = true;
                    error = "property description Should be contain only Words"
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



    const [info, dispatch] = useReducer(reducer,init);
    const [file, setFile] = useState();
    const navigate=useNavigate();
    
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
                // owner_id:
                owner_id:JSON.parse(localStorage.getItem('loggedOwner')).id,
                area_id: info.areaid.value,
                property_type_id: info.propertytype_id.value,
                property_name: info.propertyname.value,
                pdesc: info.pdesc.value,
                price: info.price.value,
                deposit: info.deposit.value,
                facilities:[info.facility.value],//
                facilities: info.facility.value,
               image:info.image.value//
            })
            
        }
        fetch("http://localhost:8080/regproperty", reqOptions)
        .then(resp => {
            if(resp.ok)
                return resp.json();
            else 
                throw new Error("server error");
        })
        .then(obj =>{
            const fd=new FormData();
            fd.append('file',file);
            const reqOptions1={
                method:'POST',
               headers:{'content-type':'multipart/form-data'},//
                body:fd
            }
            fetch("http://localhost:8080/uploadimage/"+obj.id,reqOptions1)
            .then(resq=>resq.json())
            .then(obj=>{
                console.log(obj)
                if(obj)
                {
                   alert("Reg suuccesfull.Try Login");//
                    navigate('/ownerhome');
                }
                else
                {
                    alert("Reg suuccesfull.Photo Upload Failed.Try Later");
                    navigate('/ownerhome');
                }
            })
            
        })
        .catch((error)=>alert("Server error.Try later"))
        
    }

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
            <h1>Add Property</h1>
            <h1> Welcome {JSON.parse(localStorage.getItem('loggedOwner')).fname}</h1>
           <form >
           <div className="mb-3">
                <label htmlFor="city" className="form-label">Enter City Name: </label>
                    <select id="city" name="city" value={info.city.value}  
                    onChange={(e) => { onInputChange("city", e.target.value, dispatch);getArea(e.target.value)}}
                    onBlur={(e) => { onFocusOut("city", e.target.value, dispatch);setCityid(info.city.value) }} >
                       
                        {cities.map((c)=>(
                             <option key={c.id} value={c.id}>{c.name}</option>
                        ))}             
                    </select>
                    <div id="cityhelp" className="form-text">....</div>
                </div>


                <div className="mb-3">
                <label htmlFor="areaid" className="form-label">Enter area Name: </label>
                    <select id="areaid" name="areaid" value={info.areaid.value}  
                    onChange={(e) => { onInputChange("areaid", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("areaid", e.target.value, dispatch) }} >
                      
                        {areas.map((c)=>(
                             <option key={c.id} value={c.id}>{c.name}</option>
                        ))}     
                    

                    </select>
                    <div id="areaidhelp" className="form-text">....</div>
                </div>

                
                

                {/* we are using a table data here */}
                <div className="mb-3">
                <label htmlFor="propertytype_id" className="form-label">Enter propertytype Name: </label>
                    <select id="propertytype_id" name="propertytype_id" value={info.propertytype_id.value}  
                    onChange={(e) => { onInputChange("propertytype_id", e.target.value, dispatch) ;setCityid(info.propertytype_id.value)}}
                    onBlur={(e) => { onFocusOut("propertytype_id", e.target.value, dispatch) }} >
                       
                        {propertytype.map((c)=>(
                             <option key={c.id} value={c.id}>{c.name}</option>
                        ))}             
                    </select>
                    <div id="propertytype_idhelp" className="form-text">....</div>
                </div>



                <div className="mb-3">
                    <label htmlFor="propertyname" className="form-label">Enter Property Name: </label>
                    <input type="text" className="form-control" id="propertyname" name="propertyname" value={info.propertyname.value}
                    onChange={(e) => { onInputChange("propertyname", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("propertyname", e.target.value, dispatch) }} />
                   <div id="propertynamehelp" className="form-text">....</div>
                   <p style={{ display: info.propertyname.touched && info.propertyname.hasError ? "block" : "none", color: "red" }}> {info.propertyname.error} </p>
                </div>


                <div className="mb-3">
                    <label htmlFor="pdesc" className="form-label">Enter Property description : </label>
                    <input type="text" className="form-control" id="pdesc" name="pdesc" value={info.pdesc.value}
                     onChange={(e) => { onInputChange("pdesc", e.target.value, dispatch) }}
                     onBlur={(e) => { onFocusOut("pdesc", e.target.value, dispatch) }} />
                    <div id="pdeschelp" className="form-text">....</div>
                    <p style={{ display: info.pdesc.touched && info.pdesc.hasError ? "block" : "none", color: "red" }}> {info.pdesc.error} </p>
                </div>



                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Enter Price : </label>
                    <input type="number" className="form-control" id="price" name="price" value={info.price.value}
                   onChange={(e) => { onInputChange("price", e.target.value, dispatch) }}
                   onBlur={(e) => { onFocusOut("price", e.target.value, dispatch) }} />
                  <div id="pricehelp" className="form-text">....</div>
                  <p style={{ display: info.price.touched && info.price.hasError ? "block" : "none", color: "red" }}> {info.price.error} </p>
                </div>

                <div className="mb-3">
                    <label htmlFor="deposit" className="form-label">Enter deposit Amount : </label>
                    <input type="number" className="form-control" id="deposit" name="deposit" value={info.deposit.value}
                   onChange={(e) => { onInputChange("deposit", e.target.value, dispatch) }}
                   onBlur={(e) => { onFocusOut("deposit", e.target.value, dispatch) }} />
                  <div id="deposithelp" className="form-text">....</div>
                  <p style={{ display: info.deposit.touched && info.deposit.hasError ? "block" : "none", color: "red" }}> {info.deposit.error} </p>
                </div>


                <div className="mb-3">
                <label htmlFor="facility" className="form-label">Enter facility Name: </label>
                    <select id="facility" name="facility" multiple value={info.facility.value}  
                    onChange={(e) => 
                        { 
                            onInputChange("facility", e.target.value, dispatch);//
                        const selectedFacilities = Array.from(e.target.selectedOptions, option => option.value);
                        onInputChange("facility", selectedFacilities, dispatch); }}
                    onBlur={(e) => { onFocusOut("facility", e.target.value, dispatch) }} //
                     >
                       
                        {homeFacility.map((c)=>(
                             <option key={c.id} value={c.id}>{c.name}</option>
                        ))}             
                    </select>
                    <div id="facilityype_idhelp" className="form-text">....</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Upload Image : </label>
                    <input type="file" className="form-control" id="image" name="image" 
                   onChange={(e) => { setFile(e.target.files[0]) }}
                   onBlur={(e) => { onFocusOut("image", e.target.value, dispatch) }} //
                />
                  <div id="imagehelp" className="form-text">....</div>
                  <p style={{ display: info.deposit.touched && info.deposit.hasError ? "block" : "none", color: "red" }}> {info.image.error} </p>
                </div>




                <button type="submit" className="btn btn-primary mb-3" onClick={(e) => {sendData(e)}}>Submit</button>
                <button type="reset" className="btn btn-primary mb-3" onClick={() => {dispatch({type:'reset'})}}>Reset</button>
                                                
                <p>
                    {
                        JSON.stringify({
                        // owner_id:item,
                        area_id: info.areaid.value,
                        property_type_id: info.propertytype_id.value,
                        property_name: info.propertyname.value,
                        pdesc: info.pdesc.value,
                        price: info.price.value,
                        deposit: info.deposit.value,
                        facilities: info.facility.value
                    })}
                </p>
                {/*  */}
                <p>{file && file.name}</p>

                <a href="/ownerhome"><button type="button" className="btn btn-primary mb-3" >back To OwnerHome</button></a>
            </form>
        </div>
    )
}