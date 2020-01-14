import React from "react";
import { Form, Button } from "react-bootstrap";

const EditUser = props => (
  <div>
    <Form onSubmit={e => props.handleEditSubmit(e, props)}>
      <Form.Group controlId="formGroupUserName">
        <Form.Control
          onChange={props.handleEditChange}
          name="username"
          type="text"
          placeholder="Username"
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Control
          onChange={props.handleEditChange}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group controlId="formGroupPhoto">
        <Form.Control onChange={props.handleEditChange}name="image" type="image" placeholder="Image" />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
);

export default EditUser;
