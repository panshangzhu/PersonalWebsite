import React from "react";
import Jumbotron from "./Jumbotron";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Trail } from "react-spring/renderprops";
import * as easings from "d3-ease";
import LifeCard from './LifeCard';


const Styles = styled.div`
  background: #5c4830;
  min-height: 92vh;
  color: white;
 
`;
const infos = [
  {
    id: "Language",
    image: "./LifeImages/language.jpg",
    description: "Madanrin English French  Japanese",
    detail: "English -- Advanced  French -- B2(TCF)   Mandarin -- Mother Tongue"
  }, {
    id: "Volunteer",
    image: "./LifeImages/expo.jpg",
    description: "August 2010",
    detail: "Volunteer in Shanghai Expo, guiding tourists in Chinese Pavilion."
  },{
    id: "Travel",
    image: "./LifeImages/travel.jpg",
    description: "Travller",
    detail: "Travel Experiences of Japan, Switzerland, France, German, Spain, Sweden, and Italy. "
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
          from={{ opacity: 0, transform: "translate3d(-30px,10px,10px)" }}
          to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
          config={{ duration: 2000, easing: easings.easeCubic }}
        >
          {info => props => (
            <LifeCard style={props} key={info.id} info={info} />
          )}
        </Trail>
      </Container>
    </Styles>
  );
}
