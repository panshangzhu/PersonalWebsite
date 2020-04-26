import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import * as easings from 'd3-ease';
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";

import passion from "../assets/passion.jpg";

const Styles = styled.div`
  text-align:center;
  height:200px;
  .jumbo {
    background: url(${passion}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: 1;
  }
  .overlay {
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index:-1;
  }
`;

export default function Jumbotron() {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ 
              duration: 2000,
            easing:easings.easeCubicInOut }}
          >
            {props => (
              <div style={props}>
                <h1>Dreams</h1>
                <p>Passion Inspiration</p>
              </div>
            )}
          </Spring>
        </Container>
      </Jumbo>
    </Styles>
  );
}
