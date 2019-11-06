import React from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";
import HomePhoto from "./HomePhoto";
import * as easings from "d3-ease";

const Styles = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  background: #5c4830;
  min-height: 96vh;
  position: relative;

  .overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
  article {
    font-family: "Mansalva", cursive;
    color: white;
    font-size: 1.2rem;
    text-align: center;
    position: absolute;
    top: 60%;
    left: 40%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
`;

export default function Home() {
  return (
    <Styles>
      <Spring
        from={{ opacity: 0, height: "200px" }}
        to={{ opacity: 1, height: "600px" }}
        config={{ duration: 2000, easing: easings.easeLinear }}
      >
        {props => <HomePhoto style={props} />}
      </Spring>
      <div className="overlay"></div>
      <Spring
        delay={1500}
        from={{ lineHeight: "1.5em", opacity: 0 }}
        to={{ lineHeight: "2em", opacity: 1 }}
        config={{ duration: 2000, easing: easings.easeBack }}
      >
        {props => (
          <article style={props}>
            <h1>Yipan Wang</h1>
            Hello, Welcome to my Page
            <br />
            I am currently a software engineering student in centennial college.
            <br />
          </article>
        )}
      </Spring>
    </Styles>
  );
}