import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import styles from "../../styles/SignUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

const SignUpForm = () => {
  return (
    <Container className={styles.Container}>
      <h1>Sign Up!</h1>
      <Form>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="password1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
          />
        </Form.Group>

        <Form.Group controlId="password2">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Re-enter password"
            name="password2"
          />
        </Form.Group>

        <Button className={`${btnStyles.Button} ${btnStyles.Wide}`} type="submit">
          Sign Up
        </Button>
      </Form>

      <div>
        <p>Already have an account?
        <Link to="/signin" className={styles.Link}>
        <strong> Sign in here!</strong>
        </Link>
        </p>
      </div>


    </Container>
  );
};

export default SignUpForm;
