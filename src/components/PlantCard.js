import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSold, setIsSold] = useState(true);

  function handleSold() {
    setIsSold((isSold) => !isSold);
  }
  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isSold ? (
        <button onClick={handleSold} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleSold}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
