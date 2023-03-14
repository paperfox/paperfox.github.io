import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import CardModal from './Card-modal';

// To do list:
// make art
// write text
// remove duplicate card draws
// clean up code
// make it pretty

function MakeNumbers({ tarotContent }) {
  const [data, setData] = useState(0);
  const [dataImg, setDataImg] = useState(0);
  const [data2, setData2] = useState(0);
  const [dataImg2, setDataImg2] = useState(0);
  const [data3, setData3] = useState(0);
  const [dataImg3, setDataImg3] = useState(0);
  const [dataContent, setDataContent] = useState(0);
  const [dataContent2, setDataContent2] = useState(0);
  const [dataContent3, setDataContent3] = useState(0);

  const handleClick = () => {
    // first card
    function randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function randomBinary(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const rndInt = randomIntFromInterval(1, 78);
    const rndBinary = randomBinary(1, 2);
    setData(rndInt + '_' + rndBinary);
    setDataImg(rndInt);
    setDataContent(tarotContent[rndInt]);

    // second card
    function randomIntFromInterval2(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function randomBinary2(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const rndInt2 = randomIntFromInterval2(1, 78);
    const rndBinary2 = randomBinary2(1, 2);
    setData2(rndInt2 + '_' + rndBinary2);
    setDataImg2(rndInt2);
    setDataContent2(tarotContent[rndInt2]);
    
    // third card
    function randomIntFromInterval3(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function randomBinary3(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const rndInt3 = randomIntFromInterval3(1, 78);
    const rndBinary3 = randomBinary3(1, 2);
    setData3(rndInt3 + '_' + rndBinary3);
    setDataImg3(rndInt3);
    setDataContent3(tarotContent[rndInt3]);
  }

  const handleClickReset = () => {
    setData(0);
    setDataImg(0);
    setData2(0);
    setDataImg2(0);
    setData3(0);
    setDataImg3(0);
    setDataContent(0);
    setDataContent2(0);
    setDataContent3(0);
  }

  return (
    <Fragment>
      <div>
        <Button className="tarot-deck mb-4" variant="tertiary" onClick={handleClickReset}>
          <img src={'images/deck.png'}  alt="Deck of tarot cards"/>
        </Button>
        <Button variant="secondary" onClick={handleClick}>
          Reveal Cards
        </Button>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-2 col-md-3 col-sm-4 col-7" id={'tarot-content-' + data}>
          <div className="card text-white bg-dark mb-4">
            <img src={'images/cards/' + dataImg + '.jpg'} className={'card-img-top tarot-' + data} alt="..."/>
            <div className="card-body">
              <CardModal data={data} dataImg={dataImg} dataContent={dataContent} tarotContent={tarotContent} />
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 col-sm-4 col-7" id={'tarot-content-' + data2}>
          <div className="card text-white bg-dark mb-4">
            <img src={'images/cards/' + dataImg2 + '.jpg'} className={'card-img-top tarot-' + data2} alt="..."/>
            <div className="card-body">
              <CardModal data={data2} dataImg={dataImg2} dataContent={dataContent2} tarotContent={tarotContent} />
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 col-sm-4 col-7" id={'tarot-content-' + data3}>
          <div className="card text-white bg-dark mb-4">
            <img src={'images/cards/' + dataImg3 + '.jpg'} className={'card-img-top tarot-' + data3} alt="..."/>
            <div className="card-body">
              <CardModal data={data3} dataImg={dataImg3} dataContent={dataContent3} tarotContent={tarotContent} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MakeNumbers;