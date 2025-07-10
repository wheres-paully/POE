// About.js
import React from 'react';
import './About.css';
import lemonImage from './assets/ChefSprinkles.jpg';
import { useNavigate } from 'react-router';

function About() {
  const navigate = useNavigate();

  return (
    <div className="little-lemon-container" style={{ backgroundImage: `url(${lemonImage})` }}>
      <div className="text-section">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Adrian and Mario, two Italian brothers, are the passionate minds behind Little Lemon, a Mediterranean restaurant that blends tradition with modern flavors. Their journey began with a shared dream of bringing authentic Mediterranean cuisine to a wider audience.</p>
        <p>Mario, a seasoned chef, draws inspiration from family recipes and his experience cooking in Italy, ensuring that each dish reflects the rich culinary heritage of the region. Adrian, on the other hand, leads the marketing and business strategy, expanding the menu beyond classic Italian dishes to incorporate flavors from across the Mediterranean.</p>
        <p>Their vision for Little Lemon is rooted in warm hospitality, fresh ingredients, and a relaxed dining experience. The restaurant has become a beloved spot for those seeking vibrant, flavorful meals in a welcoming atmosphere.</p>
        <button
          className="reserve-button"
          onClick={() => navigate("/reservationstepone")}
        >
          Reserve a Table
        </button>
      </div>
    </div>
  );
}

export default About;
