import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import TarotCard from './Card';

// To do list:
// make art
// write text
// remove duplicate card draws
// clean up code - 
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

    setCreateCard([...createCard, 
      {
        id: randomInt,
        reverseCard: '_' + randomBinary,
        tarotText: deck[randomInt]
      }
    ]);    

    
    deck.splice(randomInt, 1)
    console.log(deck);
  }

  const handleClickReset = () => {
    // setCreateCard([]);
    // there's got to be a better way to do this than the line below
    { window. location. reload(false); } 
    console.log(deck);

  }

  return (
    <Fragment>
      <div>
        <div className="mb-4">
          <Button className="tarot-deck" variant="tertiary" onClick={handleClick}>
            <img src={'/images/deck.png'}  alt="Deck of tarot cards"/>
          </Button>
          <br />
          <Button variant="secondary"  onClick={handleClickReset}>
            Clear Cards
          </Button>
        </div>
      </div>
      <div className="row justify-content-center">
        {createCard.map((exampleCard) => {
          return (
            <TarotCard key={exampleCard.tarotText.id} dataImg={exampleCard.tarotText.id} dataContent={exampleCard.tarotText} reverseCard={exampleCard.reverseCard} />
          )
        })}
      </div>
    </Fragment>
  );
}

export default MakeNumbers;