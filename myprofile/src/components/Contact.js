import React from "react";
import Jumbotron from "./Jumbotron";
import { Container } from "react-bootstrap";
import ContactCard from "./ContactCard";
import styled from "styled-components";
export default function Contact() {
  const Styles = styled.div`
    background: #5c4830;
    min-height: 92vh;
    color: white;
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
  `;

  const contacts = [
    {
      title: "Email",
      image: "./ContactPictures/email.png",
      link: "mailto:yipan.wang677090@gmail.com"
    },
    {
      title: "LinkedIn",
      image: "./ContactPictures/linkedin.jpg",
      link: "https://www.linkedin.com/in/yipan-wang"
    },
    {
      title: "Wechat",
      image: "./ContactPictures/wechat.png",
      link: "https://photos.app.goo.gl/9w2UoVHaU2RiBdbi7"
    }
  ];
  return (
    <Styles>
      <Jumbotron />
      <Container>
        {contacts.map(contact => (
          <ContactCard contact={contact} />
        ))}
      </Container>
    </Styles>
  );
}
