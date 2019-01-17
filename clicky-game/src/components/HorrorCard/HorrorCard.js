import React from 'react';
import './HorrorCard.css';

const HorrorCard = props => {
  return (
    <div className="card" onClick={() => props.handlePick(props)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
};
export default HorrorCard;
