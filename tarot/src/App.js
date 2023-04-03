import React from 'react';
import MakeNumbers from './deck/CardShuffle';
import TarotArray from './static/Tarot-content';
import Layout from './Layout';
import CardList from './list/CardList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
  


function App() {
  const tarotContent = TarotArray();

  return (
    <div>
      <header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/deck/CardShuffle" element={<MakeNumbers tarotContent={tarotContent} />} />
              <Route path="/list/CardList" element={<CardList tarotContent={tarotContent} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>        
      {/* <div className="container-xl">
        <MakeNumbers tarotContent={tarotContent} />
      </div> */}
    </div>
  );
}

export default App;
