import React from 'react';
import MakeNumbers from './deck/CardShuffle';
import TarotArray from './static/Tarot-content';
import Layout from './Layout';
import CardList from './list/CardList';
import HomePage from './Home';
import ErrorPage from './ErrorPage';
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
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>    
      <HomePage />    
    </div>
  );
}

export default App;
