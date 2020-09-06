import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/container';


const Navigation = () => {
  return (
    <div className="container-fluid">
      <Navbar sticky="top" bg="primary" variant="dark">
        <Navbar.Brand href="/">Flatiron Jobs</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/jobs">Jobs</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Navigation;