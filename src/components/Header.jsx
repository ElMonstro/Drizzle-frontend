import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar expand='lg' variant ="light" bg="light" id="header">
            <Container>
                <Navbar.Brand href='/'>Drizzle</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="basic-navbar-nav" />
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/vacancy">Vacancies</Nav.Link>
                    <Nav.Link href="/faq">FAQ</Nav.Link>
                    <Nav.Link href="/contacts">Contacts</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login"><Button id="login-btn">Login</Button></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    
    )
}
