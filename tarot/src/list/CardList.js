import React from 'react';
import CardDesc from './CardDesc';

function CardList({ tarotContent }) {
  let tarotList = tarotContent;

  const fullDescriptions = tarotList.map((exampleCard) => {
    return <CardDesc dataContent={exampleCard} key={exampleCard.id}/>
  });

  const hideFirstElement = fullDescriptions.shift();

  return (
    <div className="container-xxl">
        <h1 className="text-center mb-4">Complete Card Listing</h1>
        <div className="row justify-content-center mb-4">
          <div className="col-lg-2 col-md-3">
            <ul className="list-unstyled h4 mx-2 side-nav">
              <li><a href="#TheFool">Major Arcana</a></li>
              <li><a href="#AceofWands">Minor Arcana - Wands</a></li>
              <li><a href="#AceofCups">Minor Arcana - Cups</a></li>
              <li><a href="#AceofSwords">Minor Arcana - Swords</a></li>
              <li><a href="#AceofPentacles">Minor Arcana - Pentacles</a></li>
            </ul>
          </div>
          <div className="col-lg-10 col-md-9">
            {fullDescriptions}
          </div>
        </div>
    </div>
  );
}

export default CardList;