import React from "react";
import myImage from "./ash-photo.png";
import "./info.css";

export default function Info() {
  return (
    <div className="Info">
      <img src={myImage} alt="Ash Moreno.s photo" className="--info-image" />
      <h1>Ash Moreno</h1>
      <h2>Frontend Developer</h2>
      <p>ashmoreno.dev</p>
      <div className="--info-buttons">
        <button className="--info-email">
          <a href="mailto:hello@ashmoreno.dev">
            <i class="fa-solid fa-envelope"></i> Email
          </a>
        </button>
        <button className="--info-linkedin">
          <a href="https://www.linkedin.com/in/asthermoreno10/" target="_blank">
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}
