import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
  
const Home = () => {
  return (
    <div>
      {/* TODO: add background image */}
      {/* TODO: what is swe */}
      {/* TODO: puzzle pieces */}
      {/* TODO: live instagram feed */}
      {/* TODO: calendar of events */}
      {/* TODO: connect with us */}
      <header className="masthead">
        <div className="gradient"></div>
        <div className="graphics fadeIn"></div>
            <h1><div className="fadeIn">Aspire. Advance. Achieve.</div></h1>
            <span className="subheading"><div class="fadeInAfter">Society of Women Engineers is a national nonprofit organization which strives to highlight the achievements of non-male individuals as leaders and engineers.
            </div></span>
            <div className="clearfix">
              <div className="fadeInAfter"><a class="btn btn-primary" href="involved">Get Involved</a></div>
          </div>
      </header>
    <Container>
      <Row>
        <Col>
          <h1>UC Berkeley SWE</h1>
          <h2>Mission, Vision, Values</h2>
          <p>Content goes here</p>
          </Col>
      </Row>
    </Container>
  </div>
  );
};
  
export default Home;