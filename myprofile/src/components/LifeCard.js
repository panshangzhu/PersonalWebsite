import React from "react";
import styled from "styled-components";
import Image from "react-bootstrap/Image";

const Styles = styled.div`
  fieldset {
    margin-top: 10px;
    margin-bottom: 10px;
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(to right, #333, #5c4830) 1 8%;
    border-radius: 20px;
  }
  .grid {
    font-family: "Open Sans Condensed", sans-serif;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-items: center;
  }
  legend {
    width: 200px;
    border: 1px solid white;
    border-radius: 20px;
    text-align: center;
    align-items: center;
  }

  img {
    width: 120px;
    height: 120px;
    position: relative;
  }
  h5{
    width:140px;
  }
`;

export default function LifeCard(props) {
  //"react-scripts start",
  return (
    <Styles style={props.style}>
      <fieldset>
        <legend>{props.info.id}</legend>
        <div className="grid">
          <h5>{props.info.description}</h5>

          <Image
            src={require(`${props.info.image}`)}
            thumbnail
            className="imgPosition"
          />
          <h5>{props.info.detail}</h5>
        </div>
      </fieldset>
    </Styles>
  );
}
