import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MakeNumbers from './deck/CardShuffle';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/deck/CardShuffle">Deck</Link>
        </li>
        <li>
          <Link to="/list/CardList">List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;