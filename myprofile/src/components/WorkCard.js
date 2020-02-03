import React from "react";
import styled from "styled-components";
import Image from "react-bootstrap/Image";

const Styles = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-wrap:wrap;
  width: 100%;
  margin-top:1rem;
  border: 1px solid black;
  border-radius: 10px;
  font-family: "Open Sans Condensed", sans-serif;
  text-align:center;

  img {
    width: 120px;
    height: 120px;
    border: solid 1px #333;
    align-self:center;
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
