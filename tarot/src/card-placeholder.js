import React from 'react';
import CardModal from './card-modal';

function CardPlaceholder() {
  return (
    <div className="card text-white bg-dark mb-4">
      <img src="images/cards/sylver-sm.png" className="card-img-top card-1_2" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Death</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <CardModal />
      </div>
    </div>
  );
}

export default CardPlaceholder;