import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const Styles = styled.div`
  margin: 10px;
  img {
    width: 250px;
    height:200px;
  }
  .card:hover{
    transform:scale(1.2);
    z-index:2;
    transition:transform 0.5s ease-in-out;
  
  }
`;

export default function ContactCard(props) {
  return (
    <Styles>
      <a target="_blank" href={props.contact.link}>
        <Card className="bg-dark text-white">
          <Card.Img src={require(`${props.contact.image}`)} alt="Card image" />
        </Card>
      </a>
    </Styles>
  );
}
