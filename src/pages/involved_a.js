import React from 'react';
import { Container, Row, Button, Col } from "react-bootstrap";
import alum1 from "../images/alum1.jpg";
import alum2 from "../images/alum2.jpg";
  
const InvolvedAlumni = () => {
  return (
    <div>
      <div className="h1-rectangle">
        <Container><h1>Alumni Involvement</h1></Container>
      </div>
    <Container>
    <h5>Our alumni go on to successful careers in all fields of engineering, and become role models and mentors for current undergraduate students. Alumni can stay in touch with UCB SWE through our alumni newsletter, our LinkedIn presence, and more. Alumni near Berkeley are also invited to the several alumni socials we hold each semester. In addition, many alumni choose to stay involved with the national Society of Women Engineers as professional members.</h5>
    <a href="https://tinyurl.com/ucbswealumni"><Button>Sign up for the alumni mailing list</Button></a>
      <Row>
        <Col>
          <img src={alum1} style={{width: '50%'}} alt="empty"/>
          <h5>Alumni Brunch</h5>
        </Col>  
        <Col>
        <img src={alum2} style={{width: '50%'}} alt="empty"/>
        </Col>
      </Row>
    </Container>
  </div>
  );
};
  
export default InvolvedAlumni;