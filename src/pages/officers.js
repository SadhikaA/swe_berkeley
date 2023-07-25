import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

/** Officers */
/** When updating officers here, make a new folder officersSEM/person's name */
/** Execs */
import president from "../images/officersFA23/kirthi.jpg";
import vpInternal from "../images/officersFA23/vivian.png";
import vpOutreach from "../images/officersFA23/clara.jpeg";
import vpCorporate from "../images/officersFA23/joelle.jpg";
import secretary from "../images/officersFA23/olivia.jpeg";
import treasurer from "../images/officersFA23/alexis.png";
/** Internal Relations */

/** External Relations */

/** Outreach */

/** Corporate */

/** Marketing */

/** Project Team */

const Officers = () => {
  return (
    <div>
      {/* TODO: add everyone's photos */}
      <div className="h1-rectangle">
        <h1>Officers</h1>
      </div>
      <div className="content">
        <Container>
          <Row>
            <h3>Executive</h3>
            <Col className="text-center" md={2}>
              <Row className="mb-2"><Image src={president} /></Row>
              <Row><strong>Kirthi Kumar</strong><br></br><em>she/her/hers</em>President</Row>
            </Col>
            <Col className="text-center" md={2}>
              <Row className="mb-2"><Image src={vpInternal} /></Row>
              <Row><strong>Vivian Chung</strong><br></br><em>she/her/hers</em>VP of Internal Relations</Row>
            </Col>
            <Col className="text-center" md={2}>
              <Row className="mb-2"><Image src={vpOutreach} /></Row>
              <Row><strong>Clara Hung</strong><br></br><em>she/her/hers</em>VP of Outreach</Row>
            </Col>
            <Col className="text-center" md={2}>
              <Row className="mb-2"><Image src={vpCorporate} /></Row>
              <Row><strong>Joelle Siong Sin</strong><br></br><em>she/her/hers</em>VP of Corporate Relations</Row>
            </Col>
            <Col className="text-center" md={2}>
              <Row className="mb-2"><Image src={secretary} /></Row>
              <Row><strong>Olivia Kris</strong><br></br><em>she/her/hers</em>Secretary</Row>
            </Col>
            <Col className="text-center" md={2}>
              <Row className="mb-2"><Image src={treasurer} /></Row>
              <Row><strong>Alexis Alburo</strong><br></br><em>she/her/hers</em>Treasurer</Row>
            </Col>
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
    </div>
  );
};

export default Officers;