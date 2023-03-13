import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import CardModal from './Card-modal';

// so what I need this to do is:
// so that I can use that number to serve up an image and corresponding desc - image is working, need to work on desc
// will also need to set it so a card can't be drawn twice

function MakeNumbers() {
  const [data, setData] = useState(0);
  const [dataContent, setDataContent] = useState(0);
  const [data2, setData2] = useState(0);
  const [dataContent2, setDataContent2] = useState(0);
  const [data3, setData3] = useState(0);
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
    setDataContent(rndInt);

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
    setDataContent2(rndInt2);
    
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
    setDataContent3(rndInt3);
  }

  const handleClickReset = () => {
    setData(0);
    setDataContent(0);
    setData2(0);
    setDataContent2(0);
    setData3(0);
    setDataContent3(0);
  }

  return (
    <Fragment>
      <div>
        <Button className="tarot-deck" variant="tertiary" onClick={handleClickReset}>
          <img src={'images/deck.png'}  alt="Deck of tarot cards"/>
        </Button>
        <Button variant="secondary" onClick={handleClick}>
          Reveal Cards
        </Button>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-2 col-md-3 col-sm-4 col-7" id={'tarot-content-' + data}>
          <p>{data}</p>
          <div className="card text-white bg-dark mb-4">
            <img src={'images/cards/' + dataContent + '.jpg'} className={'card-img-top tarot-' + data} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <CardModal dataContent={dataContent}  data={data}/>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 col-sm-4 col-7" id={'tarot-content-' + data2}>
          <p>{data2}</p>
          <div className="card text-white bg-dark mb-4">
            <img src={'images/cards/' + dataContent2 + '.jpg'} className={'card-img-top tarot-' + data2} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <CardModal />
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 col-sm-4 col-7" id={'tarot-content-' + data3}>
          <p>{data3}</p>
          <div className="card text-white bg-dark mb-4">
            <img src={'images/cards/' + dataContent3 + '.jpg'} className={'card-img-top tarot-' + data3} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <CardModal />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MakeNumbers;