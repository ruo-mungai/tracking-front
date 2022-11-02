import { Alert } from 'react-bootstrap'
import React, { useState } from "react";
import { Button } from "../styles";
import { Form,} from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
let headerPic = require("../Mobile encryption.gif")

function SignUpForm({ onLogin, setShowLogin, cohort}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("")
  const [cohort_id, setCohort_id] = useState("");
  
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: password_confirmation,
        cohort_id: cohort_id,
      }),
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
      <h2 className="header">Create an Account, to get started</h2>
        <Form onSubmit={handleSubmit} id='form'>
        {errors.map((err) => (
          <Alert variant="danger">{err}</Alert>
        ))}
        <Form.Group id="username">
        <Form.Label>Your Username*</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
        </Form.Group>

      <Form.Group id="password">
        <Form.Label>Create Password*</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
      </Form.Group>

      <Form.Group id="password_confirmation">
        <Form.Label>Password Confirmation*</Form.Label>
        <Form.Control
          type="password"
          value={password_confirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </Form.Group>
      <br />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cohort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cohort_id}
          label="Age"
          onChange={(e) => setCohort_id(e.target.value)}
        >
          {cohort.map((coh) => (
            <MenuItem value={coh.id}>{coh.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <br />

      <Button className='w-100' id="primary-btn" type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
      <p className="login-link">
        Already have an account? &nbsp;
        <Button id="secondary" onClick={() => setShowLogin(true)}>
          Login
          </Button>
      </p>

        </Form>
      </div>
      </div>
      </div>
  );
}


export default SignUpForm;
