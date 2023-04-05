import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import MakeNumbers from './deck/CardShuffle';
import TarotArray from './static/Tarot-content';
import CardList from './list/CardList';
import HomePage from './Home';

function App() {
  const tarotContent = TarotArray();

  return (
    <div>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <HomePage />
        </Tab>
        <Tab eventKey="TarotApp" title="Tarot App">
        <MakeNumbers tarotContent={tarotContent} />
          </Tab>
        <Tab eventKey="TarotCardList" title="Tarot Card List">
          <CardList tarotContent={tarotContent} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
