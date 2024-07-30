import React from "react";
import "../styles/Home.css";
import {Link} from "react-router-dom"
import Photo from "../assets/home.avif";
function Home() {
  return (<div className="home-container">
  <div className="content">
          <div className="image-container">
            <img src={Photo} alt='not avail' />
          </div>
            <Link to='/search'>
            <button className="flightbtn">Check Flight Updates</button>
            </Link>  
          <div className="text-container">
            <h2>IndiGo</h2>
            <p>IndiGo is a leading airline offering exceptional flight experiences across the globe. With a fleet of state-of-the-art aircraft and a team of dedicated professionals, we ensure every flight is a memorable journey. Our commitment to safety, customer satisfaction, and innovation sets us apart as a preferred choice for travelers worldwide.</p>
            <h3>Our Mission</h3>
            <p>To provide a safe, comfortable, and memorable flying experience for every traveler.</p>
            <h3>Our Vision</h3>
            <p>Connecting the world with our exceptional flight services, where every journey is cherished.</p>
            <h3>Our Core Values</h3>
            <ul>
            <li>Customer-Centric: We prioritize passenger comfort and satisfaction.",</li>
   <li> "Innovation: Constantly evolving to deliver cutting-edge services.",</li>
   <li> "Safety: Safety is at the forefront of all operations.",</li>
    <li>"Sustainability: Committed to eco-friendly practices."</li>
            </ul>
          </div>
        </div>
  </div>
  );
}

export default Home;
