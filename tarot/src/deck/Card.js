import React, {  useState } from 'react';
import CardModal from './CardModal';
import Button from 'react-bootstrap/Button';

function TarotCard({ reverseCard, dataImg, dataContent, layoutTitles }) {
  const [cardFace, setCardFace] = useState('');
  const [showCard, setShowCard] = useState('')

  setTimeout(() => {
    setShowCard('draw-animation-style');
  }, 550);

  const handleVisibility = () => {
    setCardFace('show');
  }

  return (
    <div className="col-auto" id={'tarot-content-' + dataImg + reverseCard}>
      <div className={`card text-white bg-dark mb-4 ${showCard}`}>
        <div className="card-body">
          <h2 className="p">{layoutTitles}</h2>
          <div className="mb-3">
            <Button variant="tertiary" onClick={handleVisibility} aria-label="Reveal card">
              <div className="flip-card">
                <div className={'flip-card-inner ' + cardFace}>
                  <div className="flip-card-front">
                      <img src='/images/cards/back.jpg' className='card-img-top' alt="Back of Tarot Card"/>
                  </div>
                  <div className="flip-card-back">
                      <img src={'/images/cards/' + dataImg + '.jpg'} className={'card-img-top tarot-' + dataImg + reverseCard} alt={'Image of ' + dataContent.title + ' card'}/>
                  </div>
                </div>
              </div>
            </Button>
          </div>
          <CardModal reverseCard={reverseCard} dataImg={dataImg} dataContent={dataContent} />
        </div>
      </div>
    </div>
  );
}

export default TarotCard;