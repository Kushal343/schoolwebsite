import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css'; 
const Header = () => (
  <header className="custom-header">
    <Container className="header-container">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        Springdale Public School
      </Navbar.Brand>
      <Nav className="ml-auto nav-links">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
        <Nav.Link as={Link} to="/academics">Academics</Nav.Link>
        <Nav.Link as={Link} to="/admissions">Admissions</Nav.Link>
        <Nav.Link as={Link} to="/faculty">Faculty</Nav.Link>
        <Nav.Link as={Link} to="/students">Students</Nav.Link>
        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
      </Nav>
    </Container>
  </header>
);

export default Header;


