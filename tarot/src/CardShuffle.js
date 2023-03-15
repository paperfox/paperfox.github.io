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
        class: randomInt + '_' + randomBinary,
        tarotText: deck[randomInt]
      }
    ]);    

    // deck.pop(randomInt); 
    deck.splice(randomInt, 1)
    // figure out what the right thing is here - not pop but something similar
    console.log(deck);
  }

  // const handleClickReset = () => {
    // setData(0);
    // setDataImg(0);
    // setDataContent(0);
  // }

  return (
    <Fragment>
      <div>
        <Button className="tarot-deck mb-4" variant="tertiary" onClick={handleClick}>
          <img src={'/images/deck.png'}  alt="Deck of tarot cards"/>
        </Button>
        {/* <Button variant="secondary"  onClick={handleClickReset}>
          Reveal Cards
        </Button> */}
      </div>
      <div className="row justify-content-center">
        {createCard.map((exampleCard) => {
          return (
            <TarotCard key={exampleCard.tarotText.id} data={exampleCard.class} dataImg={exampleCard.tarotText.id} dataContent={exampleCard.tarotText} tarotContent={tarotContent}/>
          )
        })}
      </div>
    </Fragment>
  );
}

export default MakeNumbers;