import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <p className="footer">
      <a
        href="https://github.com/sara-si/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="footerIcon" /> Open-source
        code
      </a>{" "}
      by Sara Sarabi
    </p>
  );
}
