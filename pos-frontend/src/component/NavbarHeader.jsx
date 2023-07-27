import {Navbar, Nav, Container} from 'react-bootstrap';
import React from "react";
import {Link} from "react-router-dom";

const NavbarHeader = () => {
    const linkStyle = {
        textDecoration: 'none',
        fontfamily:'bold'
    };

    return (
        <header id="header_container">
            <Navbar expand="lg" fixed="top" style={{backgroundColor: '#e3f2fd'}}>
                <Container fluid>
                    {/* Heading & Icon */}
                    <Navbar.Brand href="/" style={{ fontWeight: 'bold', color: 'black', fontFamily: 'Arial' }}>
                        <Link to="/" style={linkStyle}>Dazzler's POS System</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent"/>
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto mb-2 mb-lg-0">
                            {/* Home */}
                            <Nav.Link>
                                <Link to="/" style={linkStyle}>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/customer" style={linkStyle}>Customer</Link>
                            </Nav.Link>
                            {/* Items */}
                            <Nav.Link>
                                <Link to="/items" style={linkStyle}>Items</Link>
                            </Nav.Link>
                            {/* Items */}
                            <Nav.Link>
                                <Link to="/place-order" style={linkStyle}>Place Order</Link>
                            </Nav.Link>
                            {/* Orders */}
                            <Nav.Link>
                                <Link to="/manage-order" style={linkStyle}>Orders</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavbarHeader;