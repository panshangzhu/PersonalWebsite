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
     "text":"A website design for Huawei",
     "link":"http://studentweb.cencol.ca/ywang453/Assignment_Huawei_HTML_CSS/"
 },{
    "header":"Front End",
    "title":"HTML & CSS",
    "text":"A form desgin for centennial college",
    "link":"http://studentweb.cencol.ca/ywang453/Assignment_form_html_css/"
},{
    "header":"Front End",
    "title":"HTML & CSS",
    "text":"A web design for a real estate company",
    "link":"http://studentweb.cencol.ca/ywang453/ASSIGNMENT4/home.html"
},{
    "header":"Front End",
    "title":"HTML & CSS & JS & BOOTSTRAP",
    "text":"A simple input form",
    "link":"http://studentweb.cencol.ca/ywang453/JSAssignment01/"
},{
  "header":"Front End",
  "title":"HTML & CSS & JS",
  "text":"A register form with validation",
  "link":"http://studentweb.cencol.ca/ywang453/JsAssignment03/"
},{
  "header":"Front End",
  "title":"HTML & CSS & JS",
  "text":"A simple game by JS",
  "link":"http://studentweb.cencol.ca/ywang453/JsAssignment04/"
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
