import { Link} from 'react-router-dom';
import { useEffect,  useState } from "react";


export default function HomeFunc(){
    const[cityid,setCityid]=useState();
    const[areaid,setAreaid]=useState();

    const[city,setCity]=useState();
    const[area,setArea]=useState();

       
        useEffect(() => {
            const secondURL = 'http://localhost:8080/getallcity';

            fetch(secondURL)
            .then(resp =>{
                if(resp.ok){
                    return resp.json();
                }
                else{
                    throw new Error('Server error');
                }
            }).then(data =>{
                setCity(data);
            }).catch(secondUrlError =>{
                console.error('Error fetching from the first URL:', secondUrlError);
            })
            
          },[]);

     
    const getAreaByCity=(v)=>{
        fetch("http://localhost:8080/getareabycity?city_id="+v)
        .then(resp=>resp.json())
        .then(data=>setArea(data))
    }


    const[property,setProperty]=useState();
    useEffect(()=>{
        fetch("http://localhost:8080/getallproperty")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProperty(data)})
        //return()=>{cont.abort()};
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
    return(
        <div className="container mt-5">
    <h1 className="text-center mb-4">Welcome To Home Page</h1>

    <div className="mb-3">
        <label htmlFor="city" className="form-label">Select City:</label>
        <select
            className="form-select"
            id="city"
            name="city"
            onChange={(e) => {
                setCityid(e.target.value);
                getAreaByCity(e.target.value);
                getPropertyByCity(e.target.value);
            }}
        >
            <option value={'Select City'}>Select City</option>
            {city &&
                city.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                ))}
        </select>
    </div>

    <div className="mb-3">
        <label htmlFor="area" className="form-label">Select Area:</label>
        <select
            className="form-select"
            id="area"
            name="area"
            onChange={(e) => {
                setCityid(e.target.value);
                getPropertyByArea(e.target.value);
            }}
        >
            <option value={'Select Area'}>Select Area</option>
            {area &&
                area.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                ))}
        </select>
    </div>

    <div className="d-flex flex-wrap">
        {property &&
            property.map((property) => (
                <div className="card" style={{ width: '18rem', margin: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }} key={property.id}>
                    <img
                        src={`data:image/jpeg;base64,${property.image}`}
                        className="card-img-top"
                        alt="..."
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
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
                                
                                pathname: `/login`,
                                state: property.id,
                            }}
                            className="btn btn-primary"
                            onClick={(e) => {
                               alert("For more Information about Owner Please login as a tenant");
                                localStorage.setItem("property", JSON.stringify(property));
                            }}
                        >
                            View More
                        </Link>
                    </div>
                </div>
            ))}
    </div>
</div>
    )
}
