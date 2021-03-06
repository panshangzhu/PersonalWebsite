import React from "react";
import Jumbotron from "./Jumbotron";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Trail } from "react-spring/renderprops";
import * as easings from "d3-ease";
import WorkCard from "./WorkCard";

const Styles = styled.div`
  background: #5c4830;
  max-width: 100%;
  min-height: 100vh;
  color: white;
  .container {
    display: flex;
    flex-direction: column;
  }
`;
const infos = [
  {
    id: "1",
    image: "./WorkImages/serti.jpg",
    description: "June 2020 -- present",
    detail: "Web Developer in serti informatique, Montreal, Canada"
  },
  {
    id: "2",
    image: "./WorkImages/mark2win.png",
    description: "June 2019 -- June 2020",
    detail: "Software Developer in Mark2win IT group, Toronto, Canada"
  },
  {
    id: "3",
    image: "./WorkImages/anya.png",
    description: "September 2017 -- January 2018",
    detail: "Sales Consultant in Anya Hindmarch Ledbury Store,London UK"
  },
  {
    id: "4",
    image: "./WorkImages/china.JPG",
    description: "May 2017 -- September 2018",
    detail: "Tour Operator Intern in China Holiday Travel Agence, London UK"
  },
  {
    id: "5",
    image: "./WorkImages/excelsior.jpg",
    description: "Feburary 2016 -- August 2016",
    detail:
      "Receptionist and Night Audit Intern in Hotel Excelsior, Geneva Switzerland "
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
