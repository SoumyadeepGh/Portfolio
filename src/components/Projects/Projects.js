import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="React Ecommerce"
              description="An Ecommerce ebsite using MERN Stack. The frontend part wwas done by me and the backend part was done by my friend. It was a group project"
              ghLink="https://github.com/SoumyadeepGh/ecommerce3.git"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Netflix-Clone"
              description="A netflix clone made using React.js,driven by my strong passion for the platform"
              ghLink="https://github.com/SoumyadeepGh/netflix-clone.git"
            />
          </Col>

          

          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
