import React from "react";
import Jumbotron from "./Jumbotron";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Trail } from "react-spring/renderprops";
import * as easings from "d3-ease";
import WorkCard from "./WorkCard";

const Styles = styled.div`
  background: #5c4830;
  min-height: 92vh;
  color: white;
`;
const infos = [
  {
    id: "1",
    image: "./WorkImages/anya.png",
    description: "September 2017 -- January 2018",
    detail: "Sales Consultant in Anya Hindmarch,London UK"
  },
  {
    id: "2",
    image: "./WorkImages/china.JPG",
    description: "May 2017 -- September 2018",
    detail: "Tour Operator Intern in China Holiday Travel Agence, London UK"
  },
  {
    id: "3",
    image: "./WorkImages/excelsior.jpg",
    description: "Feburary 2016 -- August 2016",
    detail:
      "Receptionist and Night Audit Intern in Hotel Excelsior, Geneva Switzerland "
  },
  {
    id: "4",
    image: "./WorkImages/school.jpg",
    description: "September 2012 -- September 2012",
    detail:
      "History Teacher in Chongqing No.1 Middle School, Chongqing China"
  }
];

export default function Life() {
  return (
    <Styles>
      <Jumbotron />
      <Container>
        <Trail
          items={infos}
          keys={info => info.id}
          from={{ opacity: 0, transform: "translate3d(10px,-30px,10px)" }}
          to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
          config={{ duration: 2000, easing: easings.easeCubic }}
        >
          {info => props => (
            <WorkCard style={props} key={info.id} info={info} />
          )}
        </Trail>
      </Container>
    </Styles>
  );
}
