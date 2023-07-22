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
        <h3>Executive Board</h3>
        <Col>Kirthi Kumar, President</Col>
        <Col>Vivian Chung, VP of Internal Relations</Col>
        <Col>Clara Hung, VP of Outreach</Col>
        <Col>Joelle Siong Sin, VP of Corporate Relations</Col>
        <Col>Olivia Kris, Secretary</Col>
        <Col>Alexis Abigail Amuro, Treasurer</Col>
      </Row>
      <Row>
        <h3>President</h3>
        <Col>Julie Lynch, Senior Advisor</Col>
        <Col>Esme Cohen, President Advisor</Col>
        <Col>Ayla Karmali, Equity and Inclusion Advisor</Col>
        <Col>Addie Brandt, Advocacy Director</Col>
        <Col>Rachel Burdick Toy, Advocacy Director </Col>
        <Col>Mara Alonso, Transfer Student Outreach Co-Chair</Col>
        <Col>Laura Wong, Transfer Student Outreach Co-Chair</Col>

      </Row>
      <Row>
        <h3>Internal Relations</h3>
        <Col>Jennifer Toy, Internal Advisor</Col>
        <Col>Rachel Burdick, Membership Director</Col>
        <Col>Kaylie Ching, Intersocietal Chair</Col>
        <Col>Jessica Young, Mentorship Chair</Col>
      </Row>
      <Row>
        <h3>Outreach</h3>
        <Col>Elaine Tong, SWENext Co-Chair</Col>
        <Col>Arundhati Parikh, SWENext Co-Chair</Col>
        <Col>Heather Wei, Elementary and Middle School Outreach Co-Chair</Col>
        <Col>Farah Cisse, Elementary and Middle School Outreach Co-Chair</Col>
        <Col>Amelyn Phang, Mini University Co-Chair</Col>
        <Col>Camille Dang, Mini University Co-Chair</Col>
        <Col>Negar Mordeshian, High School Engineering Program Co-Chair</Col>
        <Col>Kristen Song, High School Engineering Program Co-Chair</Col>
        <Col>Aisha Gupta, Engineering Day</Col>
        <Col>America Castenada, SWE++</Col>
        <Col>Inas Zulaikha, SWE++</Col>
      </Row>
      <Row>
        <h3>Corporate Relations</h3>
        <Col>Breanna Yang, Corporate Advisor</Col>
        <Col>REbecca Costa, Shadow and Engineer Co-Chair</Col>
        <Col>Swetha Rajkumar, Shadow and Engineer Co-Chair</Col>
        <Col>Erica Cardozo, Professional Development Month Co-Chair+</Col>
        <Col>Yujin Huh, Professional Development Month Co-Chair+</Col>
        <Col>Allison Hong, Evening with Industry</Col>
        <Col>Cerise Wong, Evening with Industry</Col>
      </Row>
      <Row>
        <h3>Secretary</h3>
        <Col>Sadhika Akula, Public Relations</Col>
        <Col>Ciela Cheung, Public Relations</Col>
        <Col>Michelle Park, Social Media</Col>
        <Col>Amanda Shiu, Social Media</Col>
        <Col>Jessie Liu, Webmaster</Col>
      </Row>
      <Row>
        <h3>Treasurer</h3>
        <Col>Megan Chan, Treasurer Advisor</Col>
        <Col>Aditi Bhat, Team Tech Co-Chair</Col>
        <Col>Kelly Tsai, Team Tech Co-Chair</Col>
        <Col>Annie Lin, Society and Alumni</Col>
        <Col>Grace Qian, Academic Chair</Col>
      </Row>
    </Container>
  </div>
  );
};
  
export default Officers;