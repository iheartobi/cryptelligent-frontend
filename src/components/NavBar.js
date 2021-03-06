import React from 'react';
import Search from './Search';
import { Navbar, Nav, Form, Container } from 'react-bootstrap';

const NavBar = props => (
  <div>
    <Container>
      <Navbar className="navbar" bg="dark" variant="dark">
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
          <Search handleChange={props.handleChange} />
        </Form>
      </Navbar>
    </Container>
  </div>
);

export default NavBar;
