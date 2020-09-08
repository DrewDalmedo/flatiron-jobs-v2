import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/container';


const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>// Flatiron Jobs</Navbar.Brand>

      <Nav className="justify-content-left">
        <Nav.Item>
          <Nav.Link>
            <Link to="/">Home</Link> 
          </Nav.Link>
        </Nav.Item>


        <Nav.Item>
          <Nav.Link>
            <Link to="/jobs">Jobs</Link>
          </Nav.Link>
        </Nav.Item>


        <Nav.Item>
          <Nav.Link>
            <Link to="/profile">Profile</Link>
          </Nav.Link>
        </Nav.Item>

      </Nav>
    </Navbar> 
  )
}

export default Navigation;