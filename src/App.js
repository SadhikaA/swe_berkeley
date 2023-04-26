import swe from './swe.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar className='color-nav' expand="lg">
        <Container>
        <Navbar.Brand href="#home">
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
              <Nav.Link href="#home">ABOUT</Nav.Link>
              <NavDropdown title="OUTREACH" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Elementary</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Middle School</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">High School</NavDropdown.Item>
            </NavDropdown>
              <Nav.Link href="#corp">CORPORATE</Nav.Link>
              <Nav.Link href="#involved">GET INVOLVED</Nav.Link>
              <Nav.Link href="#cal">CALENDAR</Nav.Link>
              <Nav.Link href="#blog">BLOG</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    </div>
  );
}

export default App;