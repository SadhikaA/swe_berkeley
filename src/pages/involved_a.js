import React from 'react';
import { Container, Row, Button, Col } from "react-bootstrap";
import empty from "../images/empty.png";
  
const InvolvedAlumni = () => {
  return (
    <div>
      <div className="h1-rectangle">
        <Container><h1>Alumni Involvement</h1></Container>
      </div>
    <Container>
    <h5>Our alumni go on to successful careers in all fields of engineering, and become role models and mentors for current undergraduate students. Alumni can stay in touch with UCB SWE through our alumni newsletter, our LinkedIn presence, and more. Alumni near Berkeley are also invited to the several alumni socials we hold each semester. In addition, many alumni choose to stay involved with the national Society of Women Engineers as professional members.</h5>
    <Button>Sign up for the alumni mailing list</Button>
      <Row>
        <Col>
          <img src={empty} alt="empty"/>
          <h5>Alumni Brunch</h5>
        </Col>  
        <Col>
        <img src={empty} alt="empty"/>
        </Col>
      </Row>
      <Row>
      <Col>
          <img src={empty} alt="empty"/>
        </Col>  
        <Col>
        <img src={empty} alt="empty"/>
        </Col>
      </Row>
    </Container>
  </div>
  );
};
  
export default InvolvedAlumni;