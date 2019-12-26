import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";

const NavBar = props => (
  <div>
    <Container>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/home">Cryptelligent</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/market">Market</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
        <Nav.Link href="/login">Logout</Nav.Link>



        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-dark">Search</Button>
        </Form>
      </Navbar>
    </Container>
  </div>
);

export default NavBar;
