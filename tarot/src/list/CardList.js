import React from 'react';
import TarotArray from '../Tarot-content';

function CardList() {
  const tarotContent = TarotArray();

  return (
    <div className="text-center">
      <header>
        <h1>Tarot</h1>
      </header>
      <div className="container-xl">
        <p>sample text</p>
      </div>
    </div>
  );
}

export default CardList;
