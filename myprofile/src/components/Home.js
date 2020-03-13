import React from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";
import HomePhoto from "./HomePhoto";
import { NavLink } from "react-router-dom";
import {Button} from 'react-bootstrap';
import * as easings from "d3-ease";

const Styles = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  
 
 img{
   width:100%;
   height:50%;
   position:absolute;
   left:50%;
   top:50%;
   transform:translate(-50%,-50%);
   object-fit:cover;
   border-radius:2%;
 }

  .overlay {
    width:100%;
    height:100%;
    background-color: #5c4830;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index:-1
  }
  article {
    font-family: "Mansalva", cursive;
    color: white;
    font-size: 70%;
    text-align: center;
    position: absolute;
    top: 60%;
    left: 40%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
  button{
    color:lightblue;
    margin-top:10px;
  }
`;

export default function Home() {
  return (
    <Styles>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1}}
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
            Please click to see my Programming works!
            <br />
            <NavLink to="/programming">
              <Button variant="outline-dark" size='lg'>My Programming Works</Button>
            </NavLink>
          </article>
        )}
      </Spring>
    </Styles>
  );
}
