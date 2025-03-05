import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            I'm <strong>Chanuka Weerasinghe</strong>, an IT undergraduate specializing in Information Technology at SLIIT. With a strong passion for software development
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            I have experience in front-end and back-end technologies, including React, Angular, Java, Spring Boot, and .NET. I thrive in Agile environments and have hands-on experience with database management (MySQL, MongoDB, Firebase) and cloud technologies like Azure. My portfolio includes projects ranging from web applications to AI-driven solutions, showcasing my ability to build efficient, scalable, and user-friendly software.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Beyond coding, I’m a problem solver who enjoys tackling complex challenges with innovative solutions. I actively engage in collaborative projects, leveraging my skills in teamwork, leadership, and critical thinking. Whether it's building web applications, integrating AI models, or optimizing software performance, I’m always eager to learn and improve. If you're looking for a passionate developer who blends creativity with technical expertise, let’s connect!
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
