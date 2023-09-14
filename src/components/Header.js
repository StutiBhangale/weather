import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const location = useLocation();
    return (
      <div>
        <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Weather App</Navbar.Brand>
        {location.pathname !== '/' && <Navbar.Brand href="/">Logout</Navbar.Brand>}
      </Container>
    </Navbar>
    </div>
  );
}
export default Header;
