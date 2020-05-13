import React from "react";
import Jumbotron from "./Jumbotron";
import { Container } from "react-bootstrap";
import ProgrammingCarousel from "./ProgrammingCarousel";
import styled from "styled-components";
import ProgrammingExamples from "./ProgrammingExamples";

const Styles = styled.div`
  background: #5c4830;
  max-width: 100%;
  min-height: 100vh;
  color: white;
  .container {
    display: flex;
    flex-direction: column;
  }
  h3 {
    text-align: center;
  }
  .examples {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
  }
`;

export default function Programming() {
  const examples = [
    {
      header: "Front End",
      title: "React, Material-UI, TypeScript",
      text: "Pan's Calculator, A simple calculator application",
      link: "https://panshangzhu.github.io/panCalculator/",
    },
    {
      header: "Full Stack",
      title: "NodeJs and JWT",
      text: "A simple Authentication made by JWT(backend Code)",
      link: "https://github.com/panshangzhu/react-login-backend",
    },
    {
      header: "Front End",
      title: "React Hook& useContext & useReducer",
      text: "Pan's count control",
      link: "https://panshangzhu.github.io/react-useContext-useReducer-demo/",
    },
    {
      header: "React-Redux",
      title: "React Redux Formik Material-UI",
      text:
        "Pan's Store. User can register and Login, add items and change items in his Cart,Heroku Deployed",
      link: "https://pan-ecommerce.herokuapp.com/",
    },
    {
      header: "Front End",
      title: "React",
      text: "A student list example by React using Hooks",
      link: "https://github.com/panshangzhu/studentList",
    },
    {
      header: "Front End",
      title: "React & TypeScript & Antd",
      text: "Pan's Todo List Application",
      link: "https://panshangzhu.github.io/TodoList-TypeScript-Antd-/",
    },
    {
      header: "Full Stack",
      title: "NodeJs+React+OracleDb",
      text: "React as front end, NodeJs as backend, OracleDb as dababase",
      link: "https://github.com/panshangzhu/OraclerDb-Nodejs-React",
    },
    {
      header: "Front End",
      title: "Angry Balls",
      text: "Css animation",
      link: "https://github.com/panshangzhu/AngryBalls",
    },
    {
      header: "Full Stack",
      title: "NodeJs+React+MongoDb",
      text: "Codes about this website",
      link: "https://github.com/panshangzhu/PersonalWebsite",
    },
    {
      header: "Front End",
      title: "HTML & CSS & JS",
      text: "A simple game by JS",
      link: "https://panshangzhu.github.io/catchgame/",
    },
    {
      header: "Front End",
      title: "HTML & CSS",
      text: "A website design assignment",
      link: "https://panshangzhu.github.io/assignmenthuawei/",
    },
    {
      header: "Front End",
      title: "HTML & CSS",
      text: "A form desgin for centennial college",
      link: "https://panshangzhu.github.io/webform/",
    },
    {
      header: "Front End",
      title: "HTML & CSS",
      text: "A web design assignment for a real estate company",
      link: "https://panshangzhu.github.io/webproject/",
    },
    {
      header: "Front End",
      title: "HTML & CSS & JS & BOOTSTRAP",
      text: "A simple input form with pop up comfirmation page",
      link: "https://panshangzhu.github.io/registerForm/#",
    },
    {
      header: "Front End",
      title: "HTML & CSS & JS",
      text: "A register form with validation",
      link: "https://panshangzhu.github.io/validationform/",
    },

    {
      header: "Back End",
      title: "C# & GUI",
      text: "A form desgined by c# GUI",
      link: "https://github.com/panshangzhu/GUI_CSHARP",
    },
  ];

  return (
    <Styles>
      <Jumbotron />
      <Container>
        <ProgrammingCarousel />
        <h3>Pan Projects</h3>
        <div className="examples">
          {examples.map((example) => (
            <ProgrammingExamples example={example} />
          ))}
        </div>
      </Container>
    </Styles>
  );
}
