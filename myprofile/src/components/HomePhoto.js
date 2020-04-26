import React from "react";
import styled from "styled-components";
import passion from "../assets/passion.jpg";

const Styles = styled.div`

`

export default function HomePhoto(props) {
  return (
    <Styles className="HomePhoto" style={props.style}>
      <img src={passion} />
    </Styles>
  );
}
