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

/** External Relations */
// import presAdvisor from "../images/officersFA23/_.jpg";
// import seniorAdvisor from "../images/officersFA23/_.jpg";
// import eiDirector from "../images/officersFA23/_.jpg";
// import advocacy from "../images/officersFA23/_.jpg";
// import transfer1 from "../images/officersFA23/_.jpg";
// import transfer2 from "../images/officersFA23/_.jpg";
// import team1 from "../images/officersFA23/_.jpg";
// import team2 from "../images/officersFA23/_.jpg";

/** Internal Relations */ 
// import internalAdvisor from "../images/officersFA23/_.jpg";
// import membership from "../images/officersFA23/_.jpg";
// import intersocietal from "../images/officersFA23/_.jpg";
// import mentorship from "../images/officersFA23/_.jpg";
// import treasurerAdvisor from "../images/officersFA23/_.jpg";
// import academicChair from "../images/officersFA23/_.jpg";
// import society from "../images/officersFA23/_.jpg";

/** Outreach */
// import sweNext1 from "../images/officersFA23/_.jpg";
// import sweNext2 from "../images/officersFA23/_.jpg";
// import eM1 from "../images/officersFA23/_.jpg";
// import eM2 from "../images/officersFA23/_.jpg";
// import miniU1 from "../images/officersFA23/_.jpg";
// import miniU2 from "../images/officersFA23/_.jpg";
// import hsep1 from "../images/officersFA23/_.jpg";
// import hsep2 from "../images/officersFA23/_.jpg";
// import eday from "../images/officersFA23/_.jpg";
// import sweP1 from "../images/officersFA23/_.jpg";
// import sweP2 from "../images/officersFA23/_.jpg";

/** Corporate */
// import corporateAdvisor from "../images/officersFA23/_.jpg";
// import shadow1 from  "../images/officersFA23/_.jpg";
// import shadow2 from "../images/officersFA23/_.jpg";
// import proDev1 from "../images/officersFA23/_.jpg";
// import proDev2 from "../images/officersFA23/_.jpg";
// import ewi1 from "../images/officersFA23/_.jpg";
// import ewi2 from "../images/officersFA23/_.jpg";

/** Marketing */
import pr1 from "../images/officersFA23/sadhika.jpg";
// import pr2 from "../images/officersFA23/_.jpg";
// import social1 from "../images/officersFA23/_.jpg";
// import social2 from "../images/officersFA23/_.jpg";
import webmaster from "../images/officersFA23/jessie.JPG";


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
            <h3>External Relations</h3>
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
            <h3>Outreach</h3>
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
            <h3>Corporate</h3>
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
            <h3>Marketing</h3>
            <Col className="text-center" md={2}>
              <Row className="mb-2"><Image src={pr1} /></Row>
              <Row><strong>Sadhika Akula</strong><br></br><em>she/her/hers</em>Public Relations Co-Chair</Row>
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
              <Row className="mb-2"><Image src={webmaster} /></Row>
              <Row><strong>Jessie Liu</strong><br></br><em>she/her/hers</em>Webmaster</Row>
            </Col>
          </Row>
          <Row>
            <h3>Project Team</h3>
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
        </Container>
      </div>
    </div>
  );
};

export default Officers;