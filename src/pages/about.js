import React from "react";
import "../App.css";
import "./about.css";
import gold from "../images/gold.png";
import silver from "../images/silver.png";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div className="about">
      <div className="h1-rectangle">
        <Container><h1>About Us</h1></Container>
      </div>
      <Container>
        <div className="about-heading">Mission</div>
        <p>The UC Berkeley SWE section strives to support the next generation of women and non-binary engineers by: providing professional development resources and networking opportunities to help students navigate the start of their careers; hosting socials to connect engineers with others in their area of study; organizing STEM advocacy and inclusion workshops, encouraging both women and non-binary engineers and allies to fight for an equitable workplace; and leading outreach programs for local K-12 students — geared especially towards underrepresented youth — to help them learn more about STEM.
        </p>
        {/* TODO: award graphic should tilt */}
        {/**TODO: find out if we have any new awards */}
        <div className="about-heading">Awards</div>
        <Row>
          <Col>
            <img src={gold} alt="Gold Award" />
            {/**<a href="https://www.flaticon.com/free-icons/gold-medal" title="gold medal icons">Gold medal icons created by Freepik - Flaticon</a>*/}
          </Col>
          <Col>
            <p>Gold</p>
            <p> 
              FY10: Strategic Communications Print Newsletter
              FY16: Outstanding Collegiate Section
              FY17: Outstanding Collegiate Section
              FY18: Outstanding Collegiate Section
              FY19: Outstanding Collegiate Section
              FY20: Outstanding Collegiate Section
              FY21: Outstanding Collegiate Section
              FY22: Outstanding Collegiate Section</p>
          </Col>
          <Col>
            <img src={silver} alt="Silver Award" />
            {/**<a href="https://www.flaticon.com/free-icons/silver-medal" title="silver medal icons">Silver medal icons created by Freepik - Flaticon</a> */}</Col>
          <Col>
            <p>Silver</p>
            <p>          FY10: Outstanding Collegiate Section
              FY13: Outstanding Collegiate Section</p>
          </Col>
        </Row>
        {/* TODO: land acknowledgement */}
        <div className="about-heading">Land Acknowledgement</div>
        {/* TODO: FAQ */}
        <div className="about-heading">Frequently Asked Questions</div>
      </Container>
    </div>
  );
}

export default About;
