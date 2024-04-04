import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import TarotCard from './Card';
import TitlesArray from '../static/Layout-titles';

// To do list:
// make art
// rewrite array in json
// make it pretty

function MakeNumbers({ tarotContent }) {
  const [createCard, setCreateCard] = useState([]);
  const [animateCard, setAnimateCard] = useState('')
  const [counter, setCounter] = useState(0)

  let deck = tarotContent;
  const drawTitles = TitlesArray();

  // if I section off the array I'll need to flatten it here
  const handleClick = () => {
    let min = 1;
    let max = deck.length - 2;

    let randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    let randomBinary = Math.floor(Math.random() * 2 + 1);

    if (deck.length > 75) {
      setCreateCard([...createCard,
        {
          id: randomInt,
          reverseCard: '_' + randomBinary,
          tarotText: deck[randomInt]
        }
      ]);
      setAnimateCard(`draw-animation-${counter}`);
      setTimeout(() => {
        setAnimateCard('draw-animation-time');
      }, 500);

      deck.splice(randomInt, 1)
      // console.log(randomInt);

      setCounter(counter + 1)
    }
  }

  const handleClickReset = () => {
    // there's got to be a better way to do this than refreshing the whole page
    window.location.reload(false);
    // setCreateCard([])
    // setAnimateCard('')
    // setCounter(0)
    // setDeck(tarotContent)
    // console.log(tarotContent.length);
    // trying to figure out how to un-splice the array above
  }

  return (
    <div className="container-xxl text-center">
      <h1>Three Card Draw</h1>
      <div className="mb-4">
        <Button className="tarot-deck" variant="tertiary" onClick={handleClick} aria-label="Click to draw card from Tarot Deck">
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="mx-4 build-deck">
                <img src='/images/cards/back.jpg' className="deck-card-stack" alt="..."/>
                <img src='/images/cards/back.jpg' className="deck-card-stack" alt="..."/>
                <img src='/images/cards/back.jpg' className="deck-card-stack" alt="..."/>
                <img src='/images/cards/back.jpg' className="deck-card-stack" alt="..."/>
                <img src='/images/cards/back.jpg' className="deck-card-stack" alt="..."/>
                <img src='/images/cards/back.jpg' className={`deck-card-stack ${animateCard}`} alt="..." id="top"/>
                {/* for or while loop here */}
              </div>
            </div>
          </div>
        </Button>
      </div>
      <div className="row justify-content-center mb-4">
        {createCard.map((exampleCard, index) => {
          return (
            <TarotCard
              layoutTitles={drawTitles[index].title}
              key={exampleCard.tarotText.cardValue}
              dataImg={exampleCard.tarotText.cardValue}
              dataContent={exampleCard.tarotText}
              reverseCard={exampleCard.reverseCard}
              // showCard={showCard}
            />
          )
        })}
      </div>

      <Button variant="secondary" className="mb-4" onClick={handleClickReset}>
        Reset Deck
      </Button>
    </div>
  );
}

export default MakeNumbers;