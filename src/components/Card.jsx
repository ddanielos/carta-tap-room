import React from 'react';
import './Card.css';

const Card = (props) => {
    const { plato } = props;
    return(
    <div className="card">
      <img src={plato.imagen} alt="" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{plato.nombre}</h2>
        <p className="card-description">{plato.descripcion}</p>
        <p className="card-price">{plato.precio}</p>
      </div>
    </div>
  );
}

export default Card;