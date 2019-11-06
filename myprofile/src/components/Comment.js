import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import { Container } from "react-bootstrap";
import CommentAdd from "./CommentAdd";
import styled from "styled-components";
import axios from "axios";

export class Comment extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }
  componentDidMount() {
    axios.get("/comment").then(response => {
      if (response.data.length > 0) {
        this.setState({
          comments: response.data
        });
      }
    });
  }

  render() {
    const Styles = styled.div`
      background: #5c4830;
      min-height: 92vh;
      color:#ecf0f1;
      .content {
        width: 80%;
        height: 50vh;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 3vh;
        overflow: scroll;
      }
      .content::-webkit-scrollbar{
        display:none;
      }
      .content{
        -ms-overflow-style:none;
      }
      .box {
        border: 1px solid grey;
        margin: 10px;
      }
      .comment {
        margin-left: 20px;
        font-size:1.2rem;
      }
      .name {
        text-align: right;
        margin-right: 10px;
        font-size:1rem
      }
      .time {
        text-align: right;
        margin-right: 10px;
        font-size:0.8rem
      }
      h3{
        margin-top:10px;
      }
    `;
    return (
      <Styles>
        <Jumbotron />
        <Container>
          <CommentAdd />
          <div className="content">
            {this.state.comments.map(comment => (
              <div className="box" key={comment.id}>
                <h3 className="comment">{comment.comment}</h3>
                <div className="name">By: {comment.name}</div>
                <div className="time">At: {comment.time}</div>
              </div>
            ))}
          </div>
        </Container>
      </Styles>
    );
  }
}

export default Comment;
