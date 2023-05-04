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
                <Col className="icon">
                   {/* TODO: contacts */}
                  <a href="https://www.facebook.com/SWE-UC-Berkeley-110515020740706/"><img className="icons" src={facebook} alt="Facebook Logo"/></a>
                  <a href="https://www.instagram.com/ucb_swe"><img className="icons" src={instagram} alt="Instagram Logo"/></a>
                  <a href="https://twitter.com/UCB_SWE"><img className="icons" src={twitter} alt="Twitter Logo"/></a>
                  <a href="https://www.linkedin.com/company/uc-berkeley-swe"><img className="icons" src={linkedin} alt="LinkedIn Logo"/></a>
                  <a href="https://www.youtube.com/user/BerkeleySWE"><img className="icons" src={youtube} alt="YouTube Logo"/></a>
                  <a href="https://open.spotify.com/show/7N32339d1A3GtiO2jz4T8I"><img className="icons" src={spotify} alt="Spotify Logo"/></a>
                  <a href="https://www.redbubble.com/people/ucbswe/shop"><img className="icons" src={shop} alt="Shop Logo"/></a>
                  <a href="https://www.tiktok.com/@ucb_swe"><img className="icons" src={tiktok} alt="Tiktok Logo"/></a>
                  <p>Copyright &copy; Society of Women Engineers 2023</p>
            <img src="https://www.ocf.berkeley.edu/hosting-logos/ocfbadge_mini8.png" alt="Hosted by the OCF"/>
                </Col>
                <Col>
            {/* TODO: do we have an address? */}
            <p>Address<br></br>University of California, Berkeley</p>
            <p>UC Berkeley SWE  acknowledges that UC Berkeley sits on the territory of xučyun (Huichin), the ancestral and unceded land of the Chochenyo speaking Ohlone people, the successors of the sovereign Verona Band of Alameda County.</p>
                </Col>
                </Row>
            </Container>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;