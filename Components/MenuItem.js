import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="MenuItem">
      <div style={{ backgroundImage: `url(${image})` }}> 
       <h1> {name} </h1>
       <p> ₹{price} </p>
    </div>
    </div>
  );
}
export default MenuItem;
