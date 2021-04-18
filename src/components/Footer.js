import React from "react";

import movieLogo from "../images/paradise-theatre.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="sec about-us">
            <h2>About us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <ul className="sci">
              <li>
                <a href="#f">
                  <FontAwesomeIcon className="social-icons" icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#f">
                  <FontAwesomeIcon className="social-icons" icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="#f">
                  <FontAwesomeIcon className="social-icons" icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>

          <div className="sec quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#f">About</a>
              </li>
              <li>
                <a href="#f">FAQ</a>
              </li>
              <li>
                <a href="#f">Privacy Policy</a>
              </li>
              <li>
                <a href="#f">Help</a>
              </li>
              <li>
                <a href="#f">Terms & Conditions</a>
              </li>
              <li>
                <a href="#f">Contact</a>
              </li>
            </ul>
          </div>

          <div className="sec contact">
            <h2>Contacy Info</h2>
            <ul className="info">
              <li>
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <span>
                  647 Linda Street
                  <br />
                  Phoenixville, PA 19460,
                  <br />
                  USA
                </span>
              </li>

              <li>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <p>
                  <a href="tel:84342051698">+84 34 205 1698</a>
                </p>
              </li>

              <li>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <p>
                  {" "}
                  <a href="mailto:bachnghianguyen@gmail.com">
                    bachnghianguyen@gmail.com
                  </a>{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="copyright-text">
        <p>Copyright © 2021 Movie Theatre. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
