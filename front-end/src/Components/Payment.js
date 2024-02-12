import { useEffect, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"; 

export default function Payment() {

    const[amount,setAmount]=useState(100);
    const[subId,setSubId]=useState(1);
    const[no_of_requests,setNo_of_requests]=useState(1);
    const[no_of_properties,setNo_of_properties]=useState(1);
    const[data,setData]=useState(1);


    const[sub,setSub]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/getallsubscriptions")
        .then(res => res.json())
        .then(data => {setSub(data)})
        // return()=>{cont.abort()};//
    },[]);
    const navigate = useNavigate(); 

    

    const sendData= (e) => {
            //json
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {'content-type':'application/json' },
            body: JSON.stringify({
               no_of_requests:data.no_of_requests,
               no_of_properties:data.no_of_properties,
               amount:data.amount+100,
               subscription_id:data.id,
               email:JSON.parse(localStorage.getItem("newReg"))
            })
        }
        fetch("http://localhost:8080/regpayment", reqOptions)

        //.then(resp => resp.json())
        .then(resp => {
            if (resp.ok) {
                navigate("/login");
            } else {
                alert("errr");
            }
        })
    }

    const populate=(id)=>{
        fetch("http://localhost:8080/getsubbyid/"+id)
        .then(res => res.json())
        .then(data => {setData(data)})
    }
    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">{JSON.parse(localStorage.getItem("newReg"))}</h1>
                        <h2 className="card-title">Payment</h2>
                        <h3 className="card-title">Welcome</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Enter Email ID:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={JSON.parse(localStorage.getItem("newReg"))}
                                    readOnly
                                />
                            </div>
    
                            <div className="mb-3">
                                <label htmlFor="noOfReq" className="form-label">Enter No of Requests:</label>
                                <select
                                    id="noOfReq"
                                    name="noOfReq"
                                    onChange={(e) => {
                                        setSubId(e.target.value);
                                        populate(e.target.value);
                                    }}
                                    onBlur={(e) => {}}
                                    className="form-select"
                                >
                                    {sub.map((c) => (
                                        <option key={c.id} value={c.id}>
                                            {c.no_of_requests}
                                        </option>
                                    ))}
                                </select>
                            </div>
    
                            <div className="mb-3">
                                <p>Amount for No of Request is {data.amount}</p>
                                <p>Amount for Subscription is 100</p>
                                <label className="form-label">Amount to Pay:</label>
                                <div className="input-group">
                                    <span className="input-group-text">$</span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={data.amount + 100}
                                        readOnly
                                    />
                                </div>
                            </div>
    
                            <button type="submit" className="btn btn-primary me-2" onClick={(e)=>{sendData(e)}}>Pay</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
      )
}