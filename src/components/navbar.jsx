import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="navigation">
      <nav className="navbar">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            SWE Website 
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/elem_outreach">
                      Outreach
                  </NavLink>
                  <NavDropdown>
                  <NavDropdown.Item>
                      <NavLink className="nav-link" to="/elem_outreach">
                      Elem Outreach
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

