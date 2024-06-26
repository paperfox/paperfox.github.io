import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import TarotCard from './Card';
import TitlesArray from '../static/Layout-titles';

// To do list:
// make art
// make it pretty

// Improvements:
// render card when user clicks to flip instead of on draw

function MakeNumbers({ tarotContent }) {
  const [createCard, setCreateCard] = useState([]);
  const [animateCard, setAnimateCard] = useState('')
  const [counter, setCounter] = useState(0)
  const [deck, setDeck] = useState([...tarotContent])

  const drawTitles = TitlesArray();

  const handleClick = () => {
    let min = 1;
    let max = deck.length - 2;

    let randomInt = Math.floor(Math.random() * (max - min));
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

      setCounter(counter + 1)
    }
  }

  const handleClickReset = () => {
    setCreateCard([])
    setAnimateCard('')
    setCounter(0)
    setDeck([...tarotContent])
  }

  return (
    <div className="container-xxl text-center">
      <h1>Three Card Draw</h1>
      <div className="mb-4">
        <Button className="tarot-deck" variant="tertiary" onClick={handleClick} aria-label="Click to draw card from Tarot Deck" disabled={counter === 3 ? true : false}>
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
        Reset
      </Button>
    </div>
  );
}

export default MakeNumbers;