import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const Styles = styled.div`
  * {
    text-decoration: none;
    color: #dfe6e9;
  }
  .card {
    background: rgba(0, 0, 0, 0.2);
    width: 20rem;
    height: 15rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
  }
  a:hover{
    text-decoration:none;
  }
  a:hover .card-header{
    color:#fdcb6e;
  }
`;

export default function ProgrammingExamples(props) {
  return (
    <Styles>
      <Card>
        <a target="_blank" href={props.example.link}>
          <Card.Header>{props.example.header}</Card.Header>
          <Card.Body>
            <Card.Title>{props.example.title}</Card.Title>
            <Card.Text>{props.example.text}</Card.Text>
          </Card.Body>
        </a>
      </Card>
    </Styles>
  );
}
