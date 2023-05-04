import React from 'react';
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";

const InvolvedStudents = () => {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <div>
      <div className="h1-rectangle">
        <Container><h1>Student Involvement</h1></Container>
      </div>
      <Container>
        <h3>Membership and Leadership Opportunities</h3>
        <p style={{ textAlign: "left" }}>Interested in becoming a... </p>
        <Row>
          <Col>

          </Col>
        </Row>
        <h3>Committees</h3>
        <p style={{ textAlign: "left" }}>Join a committee to volunteer, learn new skills, host events, and more!</p>
        {/** TODO: future goals for committee page: add icons for each one, change season to officers? */}
        <Row>
          <p className="committees">SOCIETAL COMMITTEES</p>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Advocacy, Equity, Inclusion</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Academic</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Mentorship</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Transfer Outreach</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Public Relations</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Social Media</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Web</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Team Tech</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <p className="committees">PROFESSIONAL COMMITTEES</p>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Evening with Industry</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Professional Development</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Career Options</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Startup Spring</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Card>
              <Card.Body>
                <Card.Title>Shadow and Engineer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <p className="committees">OUTREACH COMMITTEES</p>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>High School Engineering Program</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>SWENext</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>SWE Science Saturdays</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Mini University</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Card>
              <Card.Body>
                <Card.Title>SWE++</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall, Spring</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3}>
            <Card>
              <Card.Body>
                <Card.Title>Engineering Day</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Fall</Card.Subtitle>
                <Button className="custom-btn" size="sm" onClick={() => setModalShow(true)}>
                  Learn More
                </Button>
                <CenterModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


function CenterModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InvolvedStudents;