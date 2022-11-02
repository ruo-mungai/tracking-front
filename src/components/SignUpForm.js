import React, { useState, useEffect } from "react";
import { Button, Error, Input, FormField, Label, Textarea } from "../styles";
import { Form,} from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import Cohort from "../cohorts/Cohort";

function SignUpForm({ onLogin, cohort}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [cohort_id, setCohort_id] = useState("");
 
  
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  


   
  console.log(cohort)

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
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          value={password_confirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
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

      {/* <FormField>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          rows="3"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </FormField> */}
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default SignUpForm;
