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
            <img
              src={movieLogo}
              alt="Movie Logo"
              width="150px"
              className="footer-logo"
            />

            <ul className="sci">
              <li>
                <a
                  href="https://www.facebook.com/bachnghia.nguyen"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="social-icons" icon={faFacebook} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bach-nghia-nguyen-7b39641a3/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="social-icons" icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Bach-Nghia-Nguyen/movie-theatre"
                  target="_blank"
                  rel="noreferrer"
                >
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
                  12 Ton Dan Street
                  <br />
                  District 4, Ho Chi Minh City
                  <br />
                  Vietnam
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
