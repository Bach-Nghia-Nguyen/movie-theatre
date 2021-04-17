import React from "react";

import movieLogo from "../images/movie-app-logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-upper">
        <img src={movieLogo} alt="Movie Logo" width="120px" />

        <div className="info-section">
          <div className="policy"></div>
        </div>
      </div>

      <div className="footer-lower">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
