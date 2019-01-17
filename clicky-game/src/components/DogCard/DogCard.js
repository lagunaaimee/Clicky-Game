import React from 'react';
import './DogCard.css';

const DogCard = props => {
  return (
    <div className="card" onClick={() => props.handlePick(props)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
};
export default DogCard;
