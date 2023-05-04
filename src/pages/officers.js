import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Officers = () => {
  return (
    <div>
      {/* TODO: add descriptions for mission */}
      {/* TODO: add everyone's photos */}
      <div className="h1-rectangle">
        <Container><h1>Officers</h1></Container>
      </div>
    <Container>
      <Row>
        <h3>Executive</h3>
        <Col>Kirthi Kumar, President</Col>
        <Col>Vivian Chung, VP of Internal Relations</Col>
        <Col>Clara Hung, VP of Outreach</Col>
        <Col>Joelle Siong Sin, VP of Corporate Relations</Col>
        <Col>Olivia Kris, Secretary</Col>
        <Col>Alexis Abigail Amuro, Treasurer</Col>
      </Row>
      <Row>
        <h3>Internal Relations</h3>
      </Row>
      <Row>
        <h3>External Relations</h3>
      </Row>
      <Row>
        <h3>Outreach</h3>
      </Row>
      <Row>
        <h3>Corporate</h3>
      </Row>
      <Row>
        <h3>Marketing</h3>
      </Row>
      <Row>
        <h3>Project Team</h3>
      </Row>
    </Container>
  </div>
  );
};
  
export default Officers;