import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import { Container } from "react-bootstrap";
import Card from "./Card";
import styled from "styled-components";
import { Trail } from "react-spring/renderprops";
import * as easings from "d3-ease";

class Education extends Component {
  render() {
    const infos = [
      {
        id: "1",
        image: "./EducationImages/centennial.png",
        description: "January 2019 -- April 2020",
        detail:
          "Diploma in Software Engineering Technician at Centennial College,Toronto"
      },
      {
        id: "2",
        image: "./EducationImages/surrey.png",
        description: "September 2016 -- September 2017",
        detail:
          "Master Degree in International Tourism Management from University of Surrey,Guidford UK"
      },
      {
        id: "3",
        image: "./EducationImages/shms.jpg",
        description: "September 2015 -- August 2016",
        detail:
          "Postgraduate Diploma in Operation Management from Swiss Hospitality Management School in Leysin, Switzerland"
      },
      {
        id: "4",
        image: "./EducationImages/ecnu.png",
        description: "September 2008 -- September 2012",
        detail:
          "Bachelor's Degree in History from East China Normal University in Shanghai, China"
      },
      {
        id: "5",
        image: "./EducationImages/jkoku.jpg",
        description: "July 2013 -- August 2013",
        detail:
          "Japanese language course from J-Kokusai Japanese School in Osaka, Japan"
      }
    ];

    const Styles = styled.div`
      background: #5c4830;
      max-width:100%;
      min-height: 100vh;
      color: white;

      .container{
        display:flex;
        flex-direction:column;
        padding-bottom:1.5rem;
      }
    `;
    return (
      <div>
        <Styles>
          <Jumbotron />
          <Container>
            <Trail
              items={infos}
              keys={info => info.id}
              from={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
              to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
              config={{ duration: 1500, easing: easings.easeCubic }}
            >
              {info => props => (
                <Card style={props} key={info.id} info={info} />
              )}
            </Trail>
          </Container>
        </Styles>
      </div>
    );
  }
}
export default Education;
