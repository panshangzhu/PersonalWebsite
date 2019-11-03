import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  background: #5c4830;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  height: 30px;
  line-height: 30px;
  p {
    font-size: 10px;
  }
`;

function Footer() {
  return (
    <Styles>
      <p>Copyright:Yipan Wang</p>
    </Styles>
  );
}

export default Footer;
