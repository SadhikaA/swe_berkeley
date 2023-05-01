import swe from '../swe.png';
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'


const Navigation = () => {
  return (
    <Navbar className='color-nav' expand="lg">
        <Container>
        <Navbar.Brand>
            <img
              src={swe}
              width="90"
              height="60"
              className="d-inline-block align-top"
              alt="SWE logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/about">
                  <Nav.Link>ABOUT</Nav.Link>
              </LinkContainer>
              <NavDropdown title="OUTREACH" id="basic-nav-dropdown">
              <NavDropdown.Item>Elementary</NavDropdown.Item>
              <NavDropdown.Item>Middle School</NavDropdown.Item>
              <NavDropdown.Item>High School</NavDropdown.Item>
            </NavDropdown>
              <LinkContainer to="/corporate">
                <Nav.Link>CORPORATE</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/involved">
                <Nav.Link>GET INVOLVED</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cal">
                <Nav.Link>CALENDAR</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/blog">
                <Nav.Link>BLOG</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Navigation;