import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import {Link} from "react-router-dom"
function Home() {
  const [allflights, setAllFlights] = useState([]);

  const fetchFlight = async () => {
    let result = await fetch("http://localhost:5000/flightlist");
    const data = await result.json();
    setAllFlights(data);
  };

  useEffect(() => {
    fetchFlight();
  }, []);
  const updateFlight = () => {
    console.log("update will be done");
  };

  return (
    <div className="flight-container">
      <h1>IndiGo Flight details</h1>
      <div className="flight-list-topic">
        <p>S.No</p>
        <p>Flight Name</p>
        <p>Delay</p>
        <p>Gate</p>
        <p>Cancellation</p>
        <p>Delay Time</p>
        <p>Update</p>
      </div>
      <div className="flight-list-details">
        <hr />
        {allflights.map((flight, index) => {
          return (
            <>
              <div key={flight._id} className="flight-list-main-details">
                <p>{index + 1}</p>
                <p>{flight.name}</p>
                <p>{flight.delay}</p>
                <p>{flight.gate}</p>
                <p>{flight.cancellation ?'yes':'no'}</p>
                <p>{flight.delayTime}</p>
                <Link to={'/updateflight/'+ flight._id}>
                <button
                  onClick={() => {
                    updateFlight(flight._id);
                  }}
                >
                  Update
                </button>
                </Link>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
