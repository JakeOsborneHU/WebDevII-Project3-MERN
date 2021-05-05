import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand to="#home">Chikopedia</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/create">
                        <Nav.Link to="#create">Create</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/browse">
                        <Nav.Link to="#browse">Browse</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/compare">
                        <Nav.Link to="#compare">Compare</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/logout">
                        <Nav.Link to="#logout">Logout</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header