import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="sign-off">
      <p className="tt">
        {" "}
        Bringing Like Minds Together, The Future is Here With Us.
      </p>

      <div className="off">
        <div className="inner-off">
          <p className="reach">Reach us on: </p>

          {/* when linking your component to an externl source eg. Youtube, use a href as below but when linking your components internally in react use link to tags */}

          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            {" "}
            <FontAwesomeIcon icon={faYoutube} className="fa" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noreferrer">
            {" "}
            <FontAwesomeIcon icon={faGithub} className="fa" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="fa" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="fa" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="fa" />
          </a>
        </div>

        <div className="Thanks">
          <p className="fw"> Developers </p>

          {/* when react is rendering a link tag it is rendered as an a tag */}

          <p>
            {" "}
            <Link to="/about"> &#9830; Wanjie Ryan </Link>
          </p>
          <p>
            {" "}
            <Link to="/about"> &#9830; Cornelius Mutuku</Link>
          </p>
          <p>
            {" "}
            <Link to="/about"> &#9830; Samuel Waithaka</Link>
          </p>
          <p>
            {" "}
            <Link to="/about"> &#9830; Kelvin Maina</Link>
          </p>
          <p>
            {" "}
            <Link to="/about"> &#9830; Cheryuiot Kipngetich</Link>
          </p>
          <p>
            {" "}
            <Link to="/about"> &#9830; Wycliffe Mutisya</Link>
          </p>
        </div>

        <div className="work">
          <p className="fw"> Find Work </p>

          <p> &#9830; As a Developer </p>
          <p> &#9830; As a Surveyer </p>
          <p> &#9830; As a House Manager</p>
          <p> &#9830; As a Consultant </p>
        </div>

        <div className="links">
          <p className="fw"> Useful Links</p>

          <p>
            {" "}
            <Link to="/"> &#9830; Home</Link>
          </p>
          <p>
            {" "}
            <Link to="/about"> &#9830; About</Link>
          </p>
          <p>
            {" "}
            <Link to="/contact"> &#9830; Contact</Link>
          </p>
          <p>
            {" "}
            <Link to="/register"> &#9830; Register</Link>
          </p>
          <p>
            {" "}
            <Link to="/login">&#9830; Login </Link>
          </p>
        </div>

        <div className="others">
          <p> Privacy Policy statement</p>
          <p> Terms and Conditions </p>
          <p>
            {" "}
            <Link to="/faqs">&#9830; FAQs</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
