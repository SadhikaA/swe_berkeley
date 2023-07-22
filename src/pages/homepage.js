import React from 'react';
import { Container, Row, Button, Col, Card } from "react-bootstrap";
import "./home.css";

const Home = () => {
  return (
    <div>
      {/* TODO: add background image */}
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
          {/* TODO: what is swe JESSIE: I need to know what website looks like lol*/} 
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
        <Row>
          <Col>
          <div class="jigsaw1">
          <span class="r"></span>
          <span class="r"></span>
          <span class="r"></span>
          <span class="b"></span>
          <span class="text">SWE is</span>
        </div>
        <div class="jigsaw2">
          <span class="b"></span>
          <span class="b"></span>
          <span class="b"></span>  {/* this has to be bottom out */}
          <span class="l"></span>
          <span class="text">Drag me</span>
        </div>
        <div class="jigsaw3">
          <span class="r"></span>
          <span class="r"></span>
          <span class="b"></span>
          <span class="l"></span>
          <span class="text">Drag me</span>
        </div>
        <div class="jigsaw4">
          <span class="r"></span>
          <span class="r"></span>
          <span class="b"></span>
          <span class="l"></span>
          <span class="text">Drag me</span>
        </div>
          </Col>
          <Col> 
          <h3>Currently, SWE is...</h3>
          
          </Col>
        </Row>
        
        
      </Container>
    </div>
  );
};

export default Home;