import React from 'react'
import { Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Layout() {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <Nav.Link href='/' className='d-flex gap-2'>
            <h2 className='text-white p-1 rounded' style={{background:"#4C3BCF"}}>TR</h2>
            <h2 style={{fontWeight:"bold"}}>Travel Reservation</h2>
        </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-5 h5">
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/blog">blog</Nav.Link>
            <Nav.Link href="/pricing">pricing</Nav.Link>
          </Nav>
          <Nav className='h5'>
            <Nav.Link href='/login'>login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </div>
  )
}

export default Layout