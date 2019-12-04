import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";

const NavBar = props => (
  <div>
    <Container>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Coin Duel</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/draft">Draft</Nav.Link>
          <Nav.Link href="/coins">Coins</Nav.Link>
          <Nav.Link href="/transactions">Transactions</Nav.Link>

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-warning">Search</Button>
        </Form>
      </Navbar>
    </Container>
  </div>
);

export default NavBar;
