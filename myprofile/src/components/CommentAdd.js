import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'

export class CommentAdd extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      comment: ""
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChanges(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  onSubmit(e) {
   
    const comment = {
      name: this.state.name,
      comment: this.state.comment
    };
    axios.post("http://localhost:5000/comment/add", comment)
      .then(res => console.log(res.data));

    this.setState({
      name: "",
      comment: ""
    });
  }

  render() {
    return (
      <div>
        <h3 className="text-center">Give Me Your Comment</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChanges}
            />
            <Form.Text className="text-muted">How can I call you</Form.Text>
          </Form.Group>

          <Form.Group controlId="comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Comment"
              name="comment"
              value={this.state.comment}
              onChange={this.handleChanges}
            />
          </Form.Group>
          <Button variant="secondary" type="submit" style={{backgroundColor:"#5c4830"}}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default CommentAdd;
