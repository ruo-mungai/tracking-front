// import React, { useState } from 'react'
// import { Form, Button } from 'react-bootstrap'

function AddProjects() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");


  return (
    <>
    <div className="hoe">
      <div className='w-100' style={{ maxWidth: "370px" }}>
        <h2 className="header">Create Project</h2>
        <Form>
        <Form.Group id="name">
        <Form.Label>Project title*</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
        </Form.Group>
        <Form.Group id="category">
        <Form.Label>Enter Project category*</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          />
        </Form.Group>

      <Form.Group id="description">
        <Form.Label>Set Project Description*</Form.Label>
        <Form.Control
          type="text-area"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          autoComplete="current-password"
          required
        />
      </Form.Group>
      <Form.Group id="github-link">
        <Form.Label>Projects Github Link*</Form.Label>
        <Form.Control
          type="text"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          autoComplete="current-password"
        />
      </Form.Group>
      <br />
      <Button className='w-100' id="primary-btn" type="submit">Create Project</Button>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
        </Form>
      </div>
      </div>
      </>
  )
}

export default AddProjects