// Admin.js
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin() {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/admin/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/admin/student">Student Progress</Nav.Link>
              <Nav.Link as={Link} to="/admin/tutor">Tutor Profiles</Nav.Link>
              <Nav.Link as={Link} to="/admin/alum">Alumni Portal</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  );
}

export default Admin;
