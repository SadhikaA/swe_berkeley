import React from "react";
import "../App.css";
import "./about.css";
import gold from "../images/gold.png";
import silver from "../images/silver.png";
import { Container, Row, Col, Accordion } from "react-bootstrap";


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
        {/**TODO: find out if we have any new awards */}
        <div className="about-heading">Awards</div>
        <Row>
          <Col sm={2}>
            <img src={gold} className="awards" alt="Gold Award" />
            {/**<a href="https://www.flaticon.com/free-icons/gold-medal" title="gold medal icons">Gold medal icons created by Freepik - Flaticon</a>*/}
          </Col>
          <Col sm={4}>
            <h5>Gold</h5>
            <p>
              FY10: Strategic Communications Print Newsletter<br></br>
              FY16: Outstanding Collegiate Section<br></br>
              FY17: Outstanding Collegiate Section<br></br>
              FY18: Outstanding Collegiate Section<br></br>
              FY19: Outstanding Collegiate Section<br></br>
              FY20: Outstanding Collegiate Section<br></br>
              FY21: Outstanding Collegiate Section<br></br>
              FY22: Outstanding Collegiate Section
            </p>
          </Col>
          <Col sm={2}>
            <img src={silver} className="awards" alt="Silver Award" />
            {/**<a href="https://www.flaticon.com/free-icons/silver-medal" title="silver medal icons">Silver medal icons created by Freepik - Flaticon</a> */}</Col>
          <Col sm={4}>
            <h5>Silver</h5>
            <p>          FY10: Outstanding Collegiate Section<br></br>
              FY13: Outstanding Collegiate Section</p>
          </Col>
        </Row>
        <Row>
          <h5>Other</h5>
          <p>          FY19: 1st Place Team Tech Competition<br></br>
            FY19: SWE Advocacy<br></br>
            FY20: Best Practice: Multicultural<br></br>
            FY20: Best Practice: Partnerships with Collegiates, Professionals, Industry and Academia<br></br>
            FY21: Best Practice: Multicultural
          </p>
        </Row>
        <div className="about-heading">Land Acknowledgement</div>
        <p>
          UC Berkeley SWE  acknowledges that UC Berkeley sits on the territory of xučyun (Huichin), the ancestral and unceded land of the Chochenyo speaking Ohlone people, the successors of the sovereign Verona Band of Alameda County.
          We recognize that every member of the Berkeley community has, and continues to benefit from, the use and occupation of this land, since the institution’s founding in 1868. Consistent with our values of community, inclusion, and diversity, we have a responsibility to acknowledge and make visible the university’s relationship to Native peoples. As members of the Berkeley community, it is vitally important that we not only recognize the history of the land on which we stand but also, we recognize that the Muwekma Ohlone people are alive and flourishing members of the Berkeley and broader Bay Area communities today.
        </p>
        <div className="about-heading">Frequently Asked Questions</div>
        {/**TODO: create custom toggles for FAQ that are purple */}
        <Accordion defaultActiveKey="4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What opportunities does SWE provide for UC Berkeley students?</Accordion.Header>
            <Accordion.Body>
              SWE organizes many different events for students throughout the semester. We hold infosessions and career workshops with our sponsors, giving students the unique opportunity to network with industry leaders and professionals. There are also volunteer opportunities through our various outreach programs. Furthermore, we have socials and hangouts for members to come and have fun together. We also can't forget about our advocacy, equity, and inclusion focused workshops! To stay up to date with all the latest events, sign up for our weekly SWEmails!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What opportunities does SWE provide for elementary, middle school, and high school students?</Accordion.Header>
            <Accordion.Body>
              SWE has many different outreach programs for all elementary, middle school, high school, and prospective students. To learn more about them visit our outreach page.
              Who can join?
              SWE is open to all UC Berkeley students who are interested! Our members come from a diverse background of engineers and other STEM-related fields. Regardless of major, gender, and identities, SWE is an inclusive space for anyone who is passionate about Gender Equality in STEM.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How can I get involved in SWE?</Accordion.Header>
            <Accordion.Body>
              The best way to get involved is to become a committee member and/or apprentice. Our committee applications open at our first General Meeting of the semester. Our officer applications open towards the end of every semester. To learn more about each position visit our get involved page.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Our company is interested in partnering with SWE. Where do we start?</Accordion.Header>
            <Accordion.Body>
              We're excited to have you join us! You can view our corporate package and learn more at our corporate page.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>More questions?</Accordion.Header>
            <Accordion.Body>
              You can email us at swe.berkeley@gmail.com for any of your inquiries. We try to respond as soon as possible.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default About;
