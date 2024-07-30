import React,{useState,useEffect} from 'react';
import "../styles/Update.css";
import {useParams,useNavigate} from 'react-router-dom'


function Update() {

  const [flightName,setFlightName]=useState("");
  const [delayStatus,setDelayStatus]=useState("");
  const [cancelStatus,setCancelStatus]=useState("");
  const [gate,setGate]=useState("");
  const [delayTime,setDelayTime]=useState("");

  const params=useParams();
  const navigate=useNavigate();

  useEffect(()=>{
    displayFlightDetails();
  },[]);

  const displayFlightDetails= async()=>{
    console.log(params);
    let result= await fetch(`http://localhost:5000/flightlist/${params.id}`)
  result=await result.json();
  console.log(result)
  setFlightName(result.name);
  setDelayStatus(result.delay);
  setCancelStatus(result.cancellation ?'yes':'no');
  setGate(result.gate);
  setDelayTime(result.delayTime);
  }

  const updateFlight=async()=>{
console.log(flightName,delayStatus,gate,cancelStatus,delayTime);
let result=await fetch(`http://localhost:5000/flightlist/${params.id}`,{
  method:'Put',
  body:  JSON.stringify({flightName,delayStatus,cancelStatus,gate,delayTime}),
headers: {
  'Content-Type':'application/json'
}
});
result=await result.json();
console.log(result);
navigate('/flightlist');

}

  return (
    <div className='update-container'>
      <h2>Update Flight Details </h2>
      <div className='update-details'>
        <label>Flight Name</label>
        <input type='text' placeholder='update flight name' value={flightName} onChange={(e)=>{setFlightName(e.target.value)}}>
        </input>
        <label>Delay</label>
        <input type='text' placeholder='update delay status' value={delayStatus} onChange={(e)=>{setDelayStatus(e.target.value)}}>
        </input>
        <label>Cancellation</label>
        <input type='text' placeholder='update cancellation status' value={cancelStatus} onChange={(e)=>{setCancelStatus(e.target.value)}}>
        </input>
        <label>Gate</label>
        <input type='text' placeholder='update gate no' value={gate} onChange={(e)=>{setGate(e.target.value)}}>
        </input>
        <label>Delay Time</label>
        <input type='text' placeholder='update delay time' value={delayTime} onChange={(e)=>{setDelayTime(e.target.value)}}>
        </input>

        <button onClick={updateFlight} >Update</button>
      </div>
    </div>
  )
}

export default Update