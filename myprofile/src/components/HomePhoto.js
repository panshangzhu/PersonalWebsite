import React from "react";
import styled from "styled-components";
import passion from "../assets/passion.png";

const Styles = styled.div`
  padding: 0;
  margin-top: 2vh;
  width: 1050px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  #d1 {
    height: 200px;
    width: 150px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 150px;
    background-image: url(${passion});
    background-size: 1150px 650px;
    background-position: 0 -150px;
    z-index: 2;
  }
  #d2 {
    height: 500px;
    width: 400px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 80px;
    left: 100px;
    background-image: url(${passion});
    background-size: 1150px 650px;
    background-position: -100px -80px;
    z-index: 1;
  }
  #d3 {
    height: 600px;
    width: 400px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 10px;
    left: 300px;
    background-image: url(${passion});
    background-size: 1150px 650px;
    background-position: -300px -10px;
    z-index: 3;
  }
  #d4 {
    height: 500px;
    width: 550px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 30px;
    left: 500px;
    background-image: url(${passion});
    background-size: 1150px 650px;
    background-position: -500px -30px;
    z-index: 2;
  }
`;

export default function HomePhoto(props) {
  return (
    <Styles className="HomePhoto" style={props.style}>
      <div id="d1"></div>
      <div id="d2"></div>
      <div id="d3"></div>
      <div id="d4"></div>
    </Styles>
  );
}
