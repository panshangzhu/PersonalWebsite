import React from "react";
import styled from "styled-components";
import Image from "react-bootstrap/Image";

const Styles = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
  width: 100%;
  height: 150px;
  border: 1px solid black;
  padding: 10px;
  margin:10px;
  border-radius:10px;
  font-family: 'Open Sans Condensed', sans-serif; 

  img {
    width: 120px;
    height: 120px;
    border:solid 1px #333;
    margin-left:2px;
  }
  h5{
      margin-left:20px;
      flex-grow:2
  }
  h6{
    flex-grow:1;
  }
 
`;

export default function Card(props) {
  //"react-scripts start",
  return (
    <Styles style={props.style}>
      <Image src={require(`${props.info.image}`)} rounded className="imgPosition"/>
      <h5>{props.info.description}</h5>
      <h5>{props.info.detail}</h5>
    </Styles>
  );
}
