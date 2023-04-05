import React from 'react';
import CardDesc from './CardDesc';

function CardList({ tarotContent }) {
  let tarotList = tarotContent;

  const fullDescriptions = tarotList.map((exampleCard) => {
    return <CardDesc dataContent={exampleCard} key={exampleCard.id}/>
  });

  const hideFirstElement = fullDescriptions.shift();

  return (
    <div className="container-xl">
        <h1 className="text-center mb-4">Tarot</h1>
        <div className="row justify-content-center mb-4">
          {fullDescriptions}
        </div>
    </div>
  );
}

export default CardList;