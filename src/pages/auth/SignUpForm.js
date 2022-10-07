import React from "react";
import {Form, Button} from "react-bootstrap";

const SignUpForm = () => {
  return (
    <div>
      <h1>SignUp</h1>

      <Form>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" name="username" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="password1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" name="password" />
        </Form.Group>

        <Form.Group controlId="password2">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Re-enter password" name="password2" />
        </Form.Group>

        
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUpForm;
