import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <Link to={" "}><i class="fa-solid fa-users-line fa-3x"></i></Link>
         <strong className='ms-4 fs-3 me-5' > Employee Management</strong></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><strong>Home</strong></Nav.Link>
            <Nav.Link href="#features"><strong>Features</strong></Nav.Link>
            <Nav.Link href="#pricing"><strong>Pricing</strong></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header