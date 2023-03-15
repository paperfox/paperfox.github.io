import React from 'react';
import MakeNumbers from './CardShuffle';
import TarotArray from './Tarot-content';

function App() {
  const tarotContent = TarotArray();

  return (
    <div className="text-center">
      <header>
        <h1>Tarot</h1>
      </header>
      <div className="container-xl">
        <MakeNumbers tarotContent={tarotContent} />
      </div>
    </div>
  );
}

export default App;
