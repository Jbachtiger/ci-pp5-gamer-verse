import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import styles from "../../styles/SignUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

/**
 * Renders SignUp form
 * Moments walkthrough used as a guide for variables, data handling and error handling code
 */
const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    password1: '',
    password2: '',
  })
  const { username, password1, password2 } = signUpData;

  /**
   * Converts inputed data into Key:Value pairs
   */
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

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
            value={username}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="password1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password1"
            value={password1}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="password2">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Re-enter password"
            name="password2"
            value={password2}
            onChange={handleChange}
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
