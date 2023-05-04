import React from 'react';
import { Container, Row, Card, Button, Col } from "react-bootstrap";


const Corporate = () => {
  return (
    <div>
      <div className="h1-rectangle">
        <Container><h1>Corporate</h1></Container>
      </div>
      {/* TODO: 3 squares with forms */}
      {/* TODO: scrolling photo cards */}
      {/* TODO: 2023-24 sponsors */}
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Corporate Interest Form</Card.Title>
                <Card.Text>Thank you for your interest in sponsoring UC Berkeley SWE! We're glad you want to get involved in our mission or empowering women to reach their full potential as engineers. Here is a company sponsor interest form and we will keep you updated.</Card.Text>
                <Button className="corp-btn" size="sm">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Corporate Package</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Card.Text>Support from our corporate partners enables us to achieve our goal of empowering women to reach their full potential as engineers. Please review our Corporate Package below for a list of opportunities to get involved.</Card.Text>
                <Button className="corp-btn" size="sm">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>LinkedIn/Job Opportunities</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Card.Text>This group is the sole place to learn about any external jobs/opportunities that come SWE's way, especially for students. Check the group out on Linkedin, and follow SWE on Linkedin!</Card.Text>
                <Button className="corp-btn" size="sm">
                  Learn More
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