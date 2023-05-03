import React from "react";
import "../App.css";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* TODO: contacts */}
      {/* TODO: address */}
      {/* TODO: land acknowledgement */}
      {/* TODO: OCF mark */}
      <footer className="py-5 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Society of Women Engineers 2023
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;