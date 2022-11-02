import React, { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap'
let headerPic = require("../Reset password.gif")


function LoginForm({ onLogin, setShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="t-main">
      <div className="headerimage">
        <img src={headerPic} alt="lock-gif" />
        </div>
      <div className="log">
      <div className='w-100' style={{ maxWidth: "370px" }}>
      <h2 className="header">Welcome back, Log in to continue</h2>
        <Form onSubmit={handleSubmit} id='form'>
        {errors.map((err) => (
          <Alert variant="danger">{err}</Alert>
        ))}
        <Form.Group id="username">
        <Form.Label>Enter Username*</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
        </Form.Group>

      <Form.Group id="password">
        <Form.Label>Enter Password*</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
      </Form.Group>
      <br />
      <Button className='w-100' id="primary-btn" type="submit">{isLoading ? "Loading..." : "Log in"}</Button>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
      <p className="login-link">
        Don't have an account? &nbsp;
        <Button id="secondary" onClick={() => setShowLogin(false)}>
          Sign Up
          </Button>
      </p>

        </Form>
      </div>
      </div>
      </div>
  );
}

export default LoginForm;
