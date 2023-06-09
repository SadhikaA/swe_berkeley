import swe from '../images/swe.png';
import React from "react";
import "../App.css";
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'


const Navigation = () => {
  return (
    <Navbar className='color-nav'>
      {/* TODO: highlight selected component in navbar instead of blue glitch */}
      <Container>
        <Navbar.Brand>
          <LinkContainer to="/">
            <Nav.Link>
              <img
                src={swe}
                width="90"
                height="60"
                className="d-inline-block align-top"
                alt="SWE logo"
              />
            </Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>HOME</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>ABOUT</Nav.Link>
            </LinkContainer>
            <NavDropdown title="OUTREACH" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <LinkContainer to="/outreach_e">
                  <Nav.Link>Elementary School</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to="/outreach_m">
                  <Nav.Link>Middle School</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to="/outreach_h">
                  <Nav.Link>High School</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/corporate">
              <Nav.Link>CORPORATE</Nav.Link>
            </LinkContainer>
            <NavDropdown title="GET INVOLVED" id="basic-nav-dropdown">
              {/* FIXME: Weird blue glitch when clicked on - related to css? */}
              <NavDropdown.Item>
                <LinkContainer to="/involved_s">
                  <Nav.Link>Students</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to="/involved_a">
                  <Nav.Link>Alumni</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/officers">
              <Nav.Link>OFFICERS</Nav.Link>
            </LinkContainer>
            {/* TODO: add link to SWE medium: https://medium.com/uc-berkeley-swe */}
            <LinkContainer to="">
              <Nav.Link>BLOG</Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;