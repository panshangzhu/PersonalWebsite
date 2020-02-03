import React from "react";
import styled from "styled-components";
import Image from "react-bootstrap/Image";

const Styles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  justify-content:center;
  align-items: center;
  max-width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  font-family: "Open Sans Condensed", sans-serif;

  img {
    width: 120px;
    height: 120px;
    border: solid 1px #333;
    align-self:center;
  }


`;

export default function Card(props) {
  //"react-scripts start",
  return (
    <Styles style={props.style}>
      <Image
        src={require(`${props.info.image}`)}
        rounded
        className="imgPosition"
      />
      <h5>{props.info.description}</h5>
      <h5>{props.info.detail}</h5>
    </Styles>
  );
}
