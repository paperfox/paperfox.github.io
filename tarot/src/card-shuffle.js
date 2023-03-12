import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import CardPlaceholder from './card-placeholder';
import CardModal from './card-modal';

// so what I need this to do is on each click generate a random number in the range an populate it 
// in a spot so that I can use that number to serve up an image and corresponding desc
// will also need to set it so a card can't be drawn twice

class MakeNumbers extends Component {
  constructor(){
    super();
    this.state = {data: '0'};
    this.state = {dataImg: '0'};
  }

  btnClick(){
    function randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function randomBinary(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const rndInt = randomIntFromInterval(1, 5);
    const rndBinary = randomBinary(1, 2);
    this.setState({data: rndInt + '_' + rndBinary});
    this.setState({dataImg: rndInt});
  }

  btnClickReset(){
    this.setState({data: '0'});
    this.setState({dataImg: '0'});
  }

  render(){
    return (
      <Fragment>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <Button onClick={this.btnClick.bind(this)}>Draw</Button>
          <Button variant="secondary" onClick={this.btnClickReset.bind(this)}>Reset</Button>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-4 col-5" id={'tarot-content-' + this.state.data}>
            <p>{this.state.data}</p>
            <div className="card text-white bg-dark mb-4">
            <img src={'images/cards/' + this.state.dataImg + '.png'} className={'card-img-top tarot-' + this.state.data} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <CardModal />
            </div>
          </div>
          </div>
          <div className="col-lg-3 col-sm-4 col-5">
            <p>{this.state.data}</p>
            <CardPlaceholder />
          </div>
          <div className="col-lg-3 col-sm-4 col-5">
            <p>{this.state.data}</p>
            <CardPlaceholder />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MakeNumbers;