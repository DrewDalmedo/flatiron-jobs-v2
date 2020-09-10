import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/container';


const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand><strong className="slash">//</strong> Flatiron Jobs</Navbar.Brand>

      <Nav className="justify-content-left">
        <Nav.Item>
          <Nav.Link>
            <Link to="/" className="link">Home</Link> 
          </Nav.Link>
        </Nav.Item>


        <Nav.Item>
          <Nav.Link>
            <Link to="/about" className="link">About</Link>
          </Nav.Link>
        </Nav.Item>


        <Nav.Item>
          <Nav.Link>
            <Link to="/jobs" className="link">Jobs</Link>
          </Nav.Link>
        </Nav.Item>


        <Nav.Item>
          <Nav.Link>
            <Link to="/profile" className="link">Profile</Link>
          </Nav.Link>
        </Nav.Item>


        <Nav.Item>
          <Nav.Link>
            <Link to="/contact" className="link">Contact</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>


    </Navbar> 
  )
}

export default Navigation;