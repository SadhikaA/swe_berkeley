import React from 'react';
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import "./corporate.css"

const Corporate = () => {
  return (
    <div>
      <div className="h1-rectangle">
        <Container><h1>Corporate</h1></Container>
      </div>
      {/* TODO: 3 squares with forms */}
      {/* TODO: scrolling photo cards */}
      {/* TODO: update 2023-24 sponsors + corporate forms */}
      <Container>
        <Row>
          <Col>
            <Card className="text-center" bsClass="swe-card">
              <Card.Body>
                <Card.Title>Corporate Interest Form</Card.Title>
                <Card.Text>Thank you for your interest in sponsoring UC Berkeley SWE! We're glad you want to get involved in our mission or empowering women to reach their full potential as engineers. Here is a company sponsor interest form and we will keep you updated.</Card.Text>
                <Button variant="primary" style={{background: "#603B8E", borderColor: "#603B8E"}} className="corp-btn" size="sm" href="https://docs.google.com/forms/d/e/1FAIpQLSd38NvNC5iJW4xYXYh4j-tfjeOeTVArNdemW51A9p7zDIkreg/viewform">
                  Interest Form
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Corporate Package</Card.Title>
                <Card.Text>Support from our corporate partners enables us to achieve our goal of empowering women to reach their full potential as engineers. Please review our Corporate Package below for a list of opportunities to get involved.</Card.Text>
                <Button className="corp-btn" size="sm" style={{background: "#603B8E", borderColor: "#603B8E"}} href="https://swe.berkeley.edu/img/corporate/UC-Berkeley-SWE-Corporate-Package-2022-23.pdf">
                  Review Package
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>LinkedIn/Job Opportunities</Card.Title>
                <Card.Text>This group is the sole place to learn about any external jobs/opportunities that come SWE's way, especially for students. Check the group out on Linkedin, and follow SWE on Linkedin!</Card.Text>
                <Button className="corp-btn" size="sm" style={{background: "#603B8E", borderColor: "#603B8E"}} href="https://www.linkedin.com/company/uc-berkeley-swe">
                  Follow SWE on LinkedIn
                </Button>
                <Button className="corp-btn" size="sm" style={{background: "#603B8E", borderColor: "#603B8E"}} href="https://www.linkedin.com/groups/12462059/">
                  Join the SWE Jobs & Opportunities Group
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Corporate;