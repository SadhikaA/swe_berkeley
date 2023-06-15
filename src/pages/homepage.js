import React from 'react';
import { Container, Row, Button, Col, Card } from "react-bootstrap";
import "./home.css";

const Home = () => {
  return (
    <div>
      {/* TODO: add background image */}

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
          <h3>What is SWE?</h3>
          {/* TODO: what is swe */}
          <Card body style={{ width: '30em' }} className="text-center" >SWE is a...</Card>
        </Row>
        <Row>
          <Button variant="primary" size="sm" href=""
              style={{ 
                background: "#603B8E", 
                padding: "5px",
                borderColor: "#603B8E", 
                width: '10em' 
              }} >
            Get Involved
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Home;