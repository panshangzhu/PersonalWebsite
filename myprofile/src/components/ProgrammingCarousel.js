import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import html from "../assets/FrontEnd/html.png";
import css from "../assets/FrontEnd/css.png";
import js from '../assets/FrontEnd/js.png';
import react from "../assets/FrontEnd/react.jpg";
import bootstrap from "../assets/FrontEnd/bootstrap.png";
import webpack from "../assets/FrontEnd/webpack.png";
import csharp from '../assets/BackEnd/csharp.jpg';
import java from '../assets/BackEnd/java.png';
import mvc from '../assets/BackEnd/mvc.png';
import mongoDB from '../assets/FullStack/mongoDB.png';
import node from '../assets/FullStack/node.png';
import express from '../assets/FullStack/express.png';
import oracle from '../assets/FullStack/oracle.png';

const Styles = styled.div`
font-family: 'Open Sans Condensed', sans-serif; 
  .carousel {
    width: 60%;
    height: 450px;
    background: rgba(0,0,0,0.3);
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius:20px;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.5);
  }
  h3 {
    text-align: center;
    margin-top: 20px;
    font-size:3em;
    
  }

  #images {
    width: 80%;
    height: 100%;
    margin-top: 10%;
    margin-left: 10%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 15px;
    justify-items: center;
  }
  img {
    width: 80px;
    height: 80px;
  }
`;

export default function ProgrammingCarousel() {
  return (
    <Styles>
      <Carousel>
        <Carousel.Item>
          <h3>Front End</h3>
          <div id="images">
            <Image className="w-10" src={html} alt="html" roundedCircle />
            <Image className="w-10 " src={css} alt="css" roundedCircle />
            <Image className="w-10 " src={js} alt="js" roundedCircle />
            <Image className="w-10 " src={react} alt="react" roundedCircle />
            <Image className="w-10 " src={bootstrap} alt="bootstrap" roundedCircle />
            <Image className="w-10 " src={webpack} alt="webpack" roundedCircle />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Back End</h3>
          <div id="images">
            <Image className="w-10" src={csharp} alt="csharp" roundedCircle />
            <Image className="w-10 " src={java} alt="java" roundedCircle />
            <Image className="w-10 " src={mvc} alt="mvc" roundedCircle />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Full Stack</h3>
          <div id="images">
            <Image className="w-10" src={mongoDB} alt="mongo" roundedCircle />
            <Image className="w-10 " src={node} alt="node" roundedCircle />
            <Image className="w-10 " src={express} alt="express" roundedCircle />
            <Image className="w-10 " src={oracle} alt="oracle" roundedCircle />
            
          </div>
        </Carousel.Item>
      </Carousel>
      
    </Styles>
  );
}
