import React from "react";
import "../App.css";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";

/** Icons for Footer */
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import youtube from "../images/youtube.png";
import spotify from "../images/spotify.png";
import shop from "../images/shop.png";
import tiktok from "../images/tiktok.png";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            <Container>
              <Row>
                <Col>
                  <img src={facebook} alt="Facebook Logo"/>
                  <img src={instagram} alt="Instagram Logo"/>
                  <img src={twitter} alt="Twitter Logo"/>
                  <img src={linkedin} alt="LinkedIn Logo"/>
                  <img src={youtube} alt="YouTube Logo"/>
                  <img src={spotify} alt="Spotify Logo"/>
                  <img src={shop} alt="Shop Logo"/>
                  <img src={tiktok} alt="Tiktok Logo"/>
                </Col>
                <Col>
                </Col>
                </Row>
            </Container>
            {/* TODO: contacts */}
            {/* TODO: address */}
            {/* TODO: land acknowledgement */}
            <p>Copyright &copy; Society of Women Engineers 2023</p>
            {/* TODO: OCF mark */}
            <img src="https://www.ocf.berkeley.edu/hosting-logos/ocfbadge_mini8.png" alt="Hosted by the OCF"/>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;