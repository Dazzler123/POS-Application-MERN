import {Navbar, Nav, Container} from 'react-bootstrap';
import React from "react";

const NavbarHeader = () => {
  return (
      <header id="header_container">
          <Navbar expand="lg" fixed="top" style={{ backgroundColor: '#e3f2fd' }}>
              <Container fluid>
                  {/* Heading & Icon */}
                  <Navbar.Brand href="/" className="font-weight-bold">
                      Dazzler's POS System
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarSupportedContent" />
                  <Navbar.Collapse id="navbarSupportedContent">
                      <Nav className="me-auto mb-2 mb-lg-0">
                          {/* Home */}
                          <Nav.Link id="btn_To_Home" href="#" active>
                              Home
                          </Nav.Link>
                          {/* Orders */}
                          <Nav.Link id="btn_To_Manage_Orders" href="#" active>
                              Orders
                          </Nav.Link>
                          {/* Items */}
                          <Nav.Link id="btn_To_Items" href="#" active>
                              Items
                          </Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </header>
  )
}

export default NavbarHeader;