import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soumyadeep Ghosal </span>
            from <span className="purple"> Kolkata, India.</span>
            <br /> I am a BTech graduate in ECE from University of Engineering and Management,Kolkata.
            <br />
            Additionally, I am currently employed as a software developer at
            Innofied Solutions Pvt. Ltd.I also have Frontend Intern experience at Tekion.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Tech quiz and latest tech updates
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyadeep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
