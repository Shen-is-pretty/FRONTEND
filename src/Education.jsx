import React from "react";
import "./Education.css";
import { Container, Row } from "react-bootstrap";


const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Information Systems",
    institution: "Naga College Foundation, Inc.",
    year: "2023 - Present",
    description: "Information Systems is an interdisciplinary course that focuses on the study, design, development, and management of systems that collect, process, and distribute information within organizations. It bridges the gap between business processes and technology, enabling organizations to make informed decisions, streamline operations, and achieve their goals efficiently.",
  },
  {
    id: 2,
    degree: "Senior High School",
    institution: "Ocampo National High School",
    year: "2021-2023",
    description: "STEM Strand With High Honors and a former SSG Secretary."
  },
    {
    id: 3,
    degree: "Junior High School",
    institution: "Ocampo National High School",
    year: "2017-2021",
    description: "Special Science Class Consistent Honor Student.",
  }, 
    {
    id: 4,
    degree: "Elementary",
    institution: "Guinaban Elementary School",
    year: "2011-2017",
      description: "1st Honorable Mention",
  },  
];

const EducationPage = () => {
  return (
    <div className="education-container">
      <h1>EDUCATION: </h1>
      <div className="education-list">
        <Container>
          <Row>
        {educationData.map((edu) => (
          <div key={edu.id} className="education-item">
            <h2>{edu.degree}</h2>
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
            <p className="description">{edu.description}</p>
            </div>
        ))}
        </Row>
        </Container>
      </div>
    </div>
  );
};

export default EducationPage;
