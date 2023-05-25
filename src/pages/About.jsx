import React, { useState } from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Subheading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 50%;
  object-fit: cover;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Skill = styled.div`
  background-color: #eee;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;

  span {
    margin-right: 0.5rem;
    /* Add icon styles here */
  }

  .icon-react::before {
    content: "⚛️";
  }

  .icon-js::before {
    content: "🚀";
  }

  .icon-css::before {
    content: "💅";
  }

  .icon-html::before {
    content: "🌐";
  }

  .icon-figma::before {
    content: "🎨";
  }
`;

function About() {
  const [name, setName] = useState("Nagham");
  const [occupation, setOccupation] = useState("");
  const [education, setEducation] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [goals, setGoals] = useState("");
  const [skills, setSkills] = useState([
    { name: "React", icon: "icon-react" },
    { name: "JavaScript", icon: "icon-js" },
    { name: "CSS", icon: "icon-css" },
    { name: "HTML", icon: "icon-html" },
    { name: "Figma", icon: "icon-figma" },
  ]);

  return (
    <AboutContainer>
      <Heading>About Me</Heading>
      <Image src="your-image-link.jpg" alt="Your image" />
      <Subheading>Hello!</Subheading>
      <Paragraph>
        My name is {name} and I'm currently studying UX/UI design with a focus on frontend development. I have a passion for {hobbies} and strive to create intuitive and user-friendly experiences.
      </Paragraph>
      <Paragraph>
        I have many goals in life, and some of them include {goals}.
      </Paragraph>
      <Subheading>Skills:</Subheading>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skill key={index}>
            <span className={skill.icon}></span>
            {skill.name}
          </Skill>
        ))}
      </SkillsContainer>
    </AboutContainer>
  );
}

export default About;