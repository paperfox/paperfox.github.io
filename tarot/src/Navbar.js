import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';

function PageNav() {
  return (

    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand href="https://paperfox.github.io">
          <img
            alt="Paperfox Logo"
            src="https://paperfox.github.io/images/paperfoxlogo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/deck/CardShuffle">Draw Cards</Nav.Link>
          <Navbar.Text> . </Navbar.Text>
          <Nav.Link href="/list/CardList">Full Card List</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
  );
}

export default PageNav;