import React, { useState } from 'react'
import "../styles/Search.css";

function Search() {

const [flightName,setFlightName]=useState("");
const [flightDetails,setFlightDetails]=useState(null);
const [error,setError]=useState(false);

const searchFlight=async(e)=>{
  e.preventDefault();
  
  if(!flightName){
    console.log("search something");
    setError(true);
    setFlightDetails(null);
  }

  try{
    const response=await fetch(`http://localhost:5000/api/IndiGo/flights/${flightName}`)
 console.log(response.ok)
    if(!response.ok){
    console.error("Flight not found");
    setFlightDetails(null); 
    return; 
  }
    const data=await response.json()
    if(!data ){
      console.log("no flight found")
      setFlightDetails(null);
      setError(true);
    }
    else{
    setFlightDetails(data);
    console.log("flight details fetched")
    }
  }
  catch(error){
    console.error("error occuring",error);
    
  }
  
}


  return (
    <div className='search' id='search'>  
    <form className='search-info' onSubmit={searchFlight} >
    <input type="text" name='searchInput' value={flightName} onChange={(e)=>setFlightName(e.target.value)} placeholder="Search Flight Number"/>
    <button type="submit" ><i class='bx bx-search'></i></button>
    </form>
{error && (<div className='error-messgae'><h2>No flight found with name {flightName}</h2></div>)}

    {flightDetails && !error && (
        <div className="flight-details">
          <h3>Flight Details</h3>
          <p>
            <strong>Airline Name:</strong> {flightDetails.name}
          </p>
          <p>
            <strong>From:</strong> {flightDetails.from}
          </p>
          <p>
            <strong>To:</strong> {flightDetails.to}
          </p>
          <p>
            <strong>Delay:</strong> {flightDetails.delay}
          </p>
          <p>
            <strong>Gate Number:</strong> {flightDetails.gate}
          </p>
          <p>
            <strong>Cancellation:</strong>{' '}
            {flightDetails.cancellation ? 'Yes' : 'No'}
          </p>
        </div>
      )}
    </div>
  )
}

export default Search