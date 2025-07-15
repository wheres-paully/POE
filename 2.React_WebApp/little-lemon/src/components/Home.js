// Home.js
import React from "react";
import "./Home.css";
import restaurantImage from './assets/Restaurant.jpg';
import { useNavigate } from 'react-router';
import CustomerReviews from './CustomerReviews'; 
import About from './About';

function Home() {
  const navigate = useNavigate();
  
  return (
    <>
      <div
        className="restaurant-container"
        style={{ backgroundImage: `url(${restaurantImage})` }}
      >
        <div className="text-section">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a charming restaurant that specializes in Mediterranean cuisine
            with a focus on fresh, locally sourced ingredients. Known for its vibrant flavors,
            the menu features dishes inspired by Greek, Italian, and Middle Eastern traditions,
            including handmade pasta, grilled seafood, and flavorful mezze platters.
          </p>
          <button
            className="reserve-button"
            onClick={() => navigate("/reservationstepone")}
          >
            Reserve a Table
          </button>
        </div>
      </div>

      <CustomerReviews /> 
      <About />
    </>
  );
}

export default Home;
