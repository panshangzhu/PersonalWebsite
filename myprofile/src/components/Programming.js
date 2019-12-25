import React from "react";
import Jumbotron from "./Jumbotron";
import { Container } from "react-bootstrap";
import ProgrammingCarousel from "./ProgrammingCarousel";
import styled from "styled-components";
import ProgrammingExamples from "./ProgrammingExamples";

const Styles = styled.div`
  background: #5c4830;
  min-height: 92vh;
  color: white;
  h3{
      text-align:center;
  }
  .examples{
      display:grid;
      grid-template-columns:1fr 1fr 1fr;
      grid-row-gap:20px;
      justify-content:space-around;
      margin-top:20px;
  }
`;

export default function Programming() {
 const examples=[{
     "header":"Front End",
     "title":"HTML & CSS",
     "text":"A website design assignment",
     "link":"https://panshangzhu.github.io/assignmenthuawei/"
 },{
    "header":"Front End",
    "title":"HTML & CSS",
    "text":"A form desgin for centennial college",
    "link":"https://panshangzhu.github.io/webform/"
},{
    "header":"Front End",
    "title":"HTML & CSS",
    "text":"A web design assignment for a real estate company",
    "link":"https://panshangzhu.github.io/webproject/"
},{
    "header":"Front End",
    "title":"HTML & CSS & JS & BOOTSTRAP",
    "text":"A simple input form with pop up comfirmation page",
    "link":"https://panshangzhu.github.io/registerForm/#"
},{
  "header":"Front End",
  "title":"HTML & CSS & JS",
  "text":"A register form with validation",
  "link":"https://panshangzhu.github.io/validationform/"
},{
  "header":"Front End",
  "title":"HTML & CSS & JS",
  "text":"A simple game by JS",
  "link":"https://panshangzhu.github.io/catchgame/"
},{
  "header":"Back End",
  "title":"C# & GUI",
  "text":"A form desgined by c# GUI",
  "link":"https://github.com/panshangzhu/GUI_CSHARP"
},
{
  "header":"Full Stack",
  "title":"NodeJs+React+OracleDb",
  "text":"React as front end, NodeJs as backend, OracleDb as dababase",
  "link":"https://github.com/panshangzhu/OraclerDb-Nodejs-React"
},
{
  "header":"Full Stack",
  "title":"NodeJs+React+MongoDb",
  "text":"Codes about this website",
  "link":"https://github.com/panshangzhu/PersonalWebsite"
}]

  return (
    <Styles>
      <Jumbotron />
      <Container>
        <ProgrammingCarousel />
        <h3>Some Examples of my programming study</h3>
        <div className="examples">
        {examples.map(example=><ProgrammingExamples example={example}/>)}
        </div>
      </Container>
    </Styles>
  );
}
