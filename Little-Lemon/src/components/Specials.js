// Specials.js
import React from "react";
import { useNavigate } from "react-router";
import "./Specials.css";

import pilPilImage from "./assets/Gambas.jpg";
import polpetteImage from "./assets/Polpette.jpg";
import burrataImage from "./assets/Burrata.jpg";

function Specials() {
  const navigate = useNavigate();

  return (
    <div className="specials-container">
      <div className="special-card">
        <img src={pilPilImage} alt="Pil Pil Gambas" />
        <h3>Pil Pil Gambas</h3>
        <p>
          Peeled gambas cooked in rich garlic and red chili olive oil, served with ciabatta bread. A bold, flavorful seafood dish with a touch of heat.
        </p>
        <button onClick={() => navigate("/order")}>Order for delivery →</button>
      </div>

      <div className="special-card">
        <img src={polpetteImage} alt="Polpette Calabria" />
        <h3>Polpette Calabria</h3>
        <p>
          Homemade beef and pork meatballs cooked in a spicy tomato sauce. A comforting dish with a rich, savory taste, perfect for pairing with fresh bread.
        </p>
        <button onClick={() => navigate("/order")}>Order for delivery →</button>
      </div>

      <div className="special-card">
        <img src={burrataImage} alt="Burrata with Heirloom Tomatoes" />
        <h3>Burrata with Heirloom Tomatoes</h3>
        <p>
          Burrata infused with basil oil, served with marinated heirloom tomatoes and crispy crostini. A creamy, refreshing dish that highlights Mediterranean simplicity.
        </p>
        <button onClick={() => navigate("/order")}>Order for delivery →</button>
      </div>
    </div>
  );
}

export default Specials;
