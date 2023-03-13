import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import CardModal from './Card-modal';

// so what I need this to do is:
// so that I can use that number to serve up an image and corresponding desc - image is working, need to work on desc
// will also need to set it so a card can't be drawn twice

class MakeNumbers extends Component {
  constructor(){
    super();
    this.state = {data: '0'};
    this.state = {dataContent: '0'};
    this.state = {data2: '0'};
    this.state = {dataContent2: '0'};
    this.state = {data3: '0'};
    this.state = {dataContent3: '0'};
  }

  btnClick(){
    // first card
    function randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function randomBinary(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const rndInt = randomIntFromInterval(1, 78);
    const rndBinary = randomBinary(1, 2);
    this.setState({data: rndInt + '_' + rndBinary});
    this.setState({dataContent: rndInt});

    // second card
    function randomIntFromInterval2(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function randomBinary2(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const rndInt2 = randomIntFromInterval2(1, 78);
    const rndBinary2 = randomBinary2(1, 2);
    this.setState({data2: rndInt2 + '_' + rndBinary2});
    this.setState({dataContent2: rndInt2});

    // third card    
    function randomIntFromInterval3(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function randomBinary3(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const rndInt3 = randomIntFromInterval3(1, 78);
    const rndBinary3 = randomBinary3(1, 2);
    this.setState({data3: rndInt3 + '_' + rndBinary3});
    this.setState({dataContent3: rndInt3});
  }

  btnClickReset(){
    this.setState({data: '0'});
    this.setState({dataContent: '0'});
    this.setState({data2: '0'});
    this.setState({dataContent2: '0'});
    this.setState({data3: '0'});
    this.setState({dataContent3: '0'});
  }

  render(){
    return (
      <Fragment>
        <div>
          <Button className="tarot-deck" variant="tertiary" onClick={this.btnClickReset.bind(this)}>
            <img src={'images/deck.png'}  alt="Deck of tarot cards"/>
          </Button>
          <Button variant="secondary" onClick={this.btnClick.bind(this)}>
            Reveal Cards
          </Button>
          {/* <div className="test-section" id={'tarot-content-' + this.state.data3}>
            <p>{this.state.data3}</p>
          </div> */}
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-2 col-md-3 col-sm-4 col-7" id={'tarot-content-' + this.state.data}>
            <p>{this.state.data}</p>
            <div className="card text-white bg-dark mb-4">
              <img src={'images/cards/' + this.state.dataContent + '.jpg'} className={'card-img-top tarot-' + this.state.data} alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Title</h5>
                <CardModal />
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-sm-4 col-7" id={'tarot-content-' + this.state.data2}>
            <p>{this.state.data2}</p>
            <div className="card text-white bg-dark mb-4">
              <img src={'images/cards/' + this.state.dataContent2 + '.jpg'} className={'card-img-top tarot-' + this.state.data2} alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Title</h5>
                <CardModal />
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-sm-4 col-7" id={'tarot-content-' + this.state.data3}>
            <p>{this.state.data3}</p>
            <div className="card text-white bg-dark mb-4">
              <img src={'images/cards/' + this.state.dataContent3 + '.jpg'} className={'card-img-top tarot-' + this.state.data3} alt="..."/>
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
}

export default MakeNumbers;