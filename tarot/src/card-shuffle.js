import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import CardPlaceholder from './card-placeholder';

// so what I need this to do is on each click generate a random number in the range an populate it 
// in a spot so that I can use that number to serve up an image and corresponding desc
// will also need to set it so a card can't be drawn twice

class MakeNumbers extends Component {
  constructor(){
    super();
    this.state = {data: '0'};
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
  }

  btnClickReset(){
    this.setState({data: '0'});
  }

  render(){
    return (
      <Fragment>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <Button onClick={this.btnClick.bind(this)}>Draw</Button>
          <Button variant="secondary" onClick={this.btnClickReset.bind(this)}>Reset</Button>
        </div>
        <div className="row">
          <div className="col">
            <p>{this.state.data}</p>
            <CardPlaceholder />
          </div>
          <div className="col">
            <p>{this.state.data}</p>
            <CardPlaceholder />
          </div>
          <div className="col">
            <p>{this.state.data}</p>
            <CardPlaceholder />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MakeNumbers;