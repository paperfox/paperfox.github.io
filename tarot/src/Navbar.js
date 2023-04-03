import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MakeNumbers from './deck/CardShuffle';

function Navbar() {
  return (
    <nav>
      <ul className="text-end">
        <li className="d-inline-block m-2">
          <Link to="/deck/CardShuffle">Deck</Link>
        </li>
        <li className="d-inline-block m-2">
          <Link to="/list/CardList">List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;