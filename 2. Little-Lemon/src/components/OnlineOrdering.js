import React, { useState } from 'react';
import './OnlineOrdering.css';

const sections = {
  Starters: [
    { name: 'Lemon-Herb Hummus', desc: 'Creamy chickpeas with tahini, garlic, and fresh lemon juice, served with warm pita.', price: '$7.00' },
    { name: 'Caprese Skewers', desc: 'Cherry tomatoes, basil, and mozzarella with a balsamic glaze.', price: '$7.50' },
    { name: 'Stuffed Grape Leaves', desc: 'Vine leaves filled with herbed rice and lemon yogurt dip.', price: '$7.25' },
    { name: 'Grilled Halloumi with Citrus Glaze', desc: 'Seared halloumi drizzled with a bright citrus reduction and fresh herbs.', price: '$8.50' },
    { name: 'Feta-Stuffed Peppers', desc: 'Mini bell peppers filled with whipped feta, herbs, and olive oil.', price: '$7.75' },
  ],
  Mains: [
    { name: 'Zesty Lemon Chicken', desc: 'Grilled chicken in lemon and garlic marinade, with roasted veggies.', price: '$15.90' },
    { name: 'Mediterranean Pasta', desc: 'Penne with sun-dried tomatoes, olives, feta, and lemon-garlic sauce.', price: '$14.00' },
    { name: 'Spiced Chickpea Tagine', desc: 'Apricots, cinnamon, and preserved lemon, served over couscous.', price: '$13.50' },
    { name: 'Roasted Aubergine Tagine', desc: 'Slow-roasted aubergine with tomato, garlic, and North African spices.', price: '$14.50' },
    { name: 'Lamb Skewers', desc: 'Tender lamb marinated in lemon and herbs, flame-grilled and served with tzatziki.', price: '$17.25' },
  ],
  Sides: [
    { name: 'Charred Broccoli with Lemon Zest', desc: '', price: '$5.00' },
    { name: 'Orzo Salad with Feta', desc: '', price: '$5.75' },
    { name: 'Rosemary Fries', desc: '', price: '$4.50' },
  ],
  Desserts: [
    { name: 'Little Lemon Tart', desc: 'Buttery crust, lemon curd, toasted meringue.', price: '$6.25' },
    { name: 'Baklava Bites', desc: 'Filo pastry, honey, pistachios.', price: '$6.00' },
    { name: 'Limoncello Sorbet', desc: 'Bright, citrusy refreshment.', price: '$5.50' },
    { name: 'Olive Oil Cake', desc: 'Moist and fragrant cake made with citrus zest and extra-virgin olive oil.', price: '$6.50' },
    { name: 'Fig-and-Honey Tart', desc: 'Fresh figs nestled in a spiced honey-almond filling on shortcrust.', price: '$6.75' },
  ],
  Beverages: [
    { name: 'Peach Iced Tea', desc: '', price: '$3.25' },
    { name: 'Citrus Juice', desc: '', price: '$3.50' },
    { name: 'Espresso & Herbal Teas', desc: '', price: '$2.50' },
    { name: 'Fresh Mint Tea', desc: 'Steeped mint leaves with a hint of lemon, served warm or iced.', price: '$2.75' },
  ]
};

export default function OnlineOrdering() {
  const [cart, setCart] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.name]: prev[item.name]
        ? { ...item, quantity: prev[item.name].quantity + 1 }
        : { ...item, quantity: 1 },
    }));
  };

  const removeFromCart = (itemName) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[itemName].quantity === 1) {
        delete updated[itemName];
      } else {
        updated[itemName].quantity -= 1;
      }
      return updated;
    });
  };

  const getTotal = () =>
    Object.values(cart).reduce(
      (acc, item) => acc + item.quantity * parseFloat(item.price.slice(1)),
      0
    );

  const handleCheckout = () => {
    setShowPopup(true);
    // Optionally reset cart after checkout:
    // setCart({});
  };

  return (
    <>
      <div className="ordering-container">
        <div className="menu-display">
          {Object.entries(sections).map(([sectionName, items]) => (
            <div key={sectionName} className="menu-section">
              <h2>{sectionName}</h2>
              {items.map((item) => (
                <div key={item.name} className="menu-item">
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.desc}</p>
                    <span>{item.price}</span>
                  </div>
                  <button onClick={() => addToCart(item)}>Add</button>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h2>Your Order</h2>
          {Object.keys(cart).length === 0 && <p>No items yet.</p>}
          {Object.entries(cart).map(([name, item]) => (
            <div key={name} className="cart-item">
              <span>{name} × {item.quantity}</span>
              <span>${(item.quantity * parseFloat(item.price.slice(1))).toFixed(2)}</span>
              <button onClick={() => removeFromCart(name)}>−</button>
            </div>
          ))}
          {Object.keys(cart).length > 0 && (
            <div className="cart-total">
              <strong>Total: ${getTotal().toFixed(2)}</strong>
              <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
            </div>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>🎉 Order on the way!</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

