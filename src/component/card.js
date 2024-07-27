// src/Card.js
import React from 'react';

const Card = ({ id, title, description, image,price, onDelete }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Package: {price}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Card;
