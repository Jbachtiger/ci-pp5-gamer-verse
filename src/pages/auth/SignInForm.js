import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";
import styles from "../../styles/SignInForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

/**
 * Renders SignUp form
 * Moments walkthrough used as a guide for variables, data handling and error handling code
 */
function SignInForm() {
  const setCurrentUser = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  /**
   * Pushes data to API
   * Redirects the user to homepage
   * Error messages displayed for invalid data inputs
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user)
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  /**
   * Converts inputed data into Key:Value pairs
   */
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className={styles.Container}>
      <h1>Sign In!</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.username?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Button
          className={`${btnStyles.Button} ${btnStyles.Wide}`}
          type="submit"
        >
          Sign In
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert variant="warning" className="mt-4" key={idx}>
            {message}
          </Alert>
        ))}
      </Form>

      <div>
        <p>
          Don't have an account?
          <Link to="/signup" className={styles.Link}>
            <strong> Sign up here!</strong>
          </Link>
        </p>
      </div>
    </Container>
  );
}

export default SignInForm;