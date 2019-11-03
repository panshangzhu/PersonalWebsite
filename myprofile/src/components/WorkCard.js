import React from "react";
import styled from "styled-components";
import Image from "react-bootstrap/Image";

const Styles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items:center;
  align-items: center;
  width: 100%;
  height: 150px;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-family: "Open Sans Condensed", sans-serif;

  img {
    width: 120px;
    height: 120px;
    border: solid 1px #333;
  }

`;

export default function WorkCard(props) {
  //"react-scripts start",
  return (
    <Styles style={props.style}>
      <h5>{props.info.description}</h5>
      <h5>{props.info.detail}</h5>
      <Image
        src={require(`${props.info.image}`)}
        roundedCircle
        className="imgPosition"
      />
    </Styles>
  );
}
