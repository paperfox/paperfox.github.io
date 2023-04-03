import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import TarotCard from './Card';

// To do list:
// make art
// write text
// rewrite array - remove 0 and 80 from deck, rewrite in json
// make it pretty

function MakeNumbers({ tarotContent }) {
  const [createCard, setCreateCard] = useState([]);
  let deck = tarotContent;

  const handleClick = () => {
    let min = 1;
    let max = deck.length - 2;

    let randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    let randomBinary = Math.floor(Math.random() * (2 - 1 + 1) + 1);

    if (deck.length > 77) {
      setCreateCard([...createCard, 
        {
          id: randomInt,
          reverseCard: '_' + randomBinary,
          tarotText: deck[randomInt]
        }
      ]);    
  
      deck.splice(randomInt, 1)
    }
  }

  const handleClickReset = () => {
    // there's got to be a better way to do this than refreshing the whole page
    window.location.reload(false);
    console.log(deck);
  }

  return (
    <div className="container-xl text-center">
      <h1>Tarot</h1>
      <div className="mb-4">
        <Button className="tarot-deck" variant="tertiary" onClick={handleClick} aria-label="Click to draw card from Tarot Deck">
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="mx-4 build-deck">
                <img src='/images/cards/0.jpg' className="deck-card-stack" alt="..."/>
                <img src='/images/cards/0.jpg' className="deck-card-stack" alt="..."/>
                <img src='/images/cards/0.jpg' className="deck-card-stack" alt="..."/>
                <img src='/images/cards/0.jpg' className="deck-card-stack" alt="..."/>
                <img src='/images/cards/0.jpg' className="deck-card-stack" alt="..."/>
              </div>
            </div>
          </div>
        </Button>
      </div>
      <div className="row justify-content-center mb-4">
        {createCard.map((exampleCard) => {
          return (
            <TarotCard key={exampleCard.tarotText.id} dataImg={exampleCard.tarotText.id} dataContent={exampleCard.tarotText} reverseCard={exampleCard.reverseCard} />
          )
        })}
      </div>
      
      <Button variant="secondary" className="mb-4" onClick={handleClickReset}>
        Reset
      </Button>
    </div>
  );
}

export default MakeNumbers;