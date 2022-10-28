import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, saveNewProject } from "./projectslice";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      category: "",
      description: "",
      github_link: "",
      user_id: "",
    },
  });

  const disptach = useDispatch();
  const navigate = useNavigate();
  const apiStatus = useSelector(getLoading);

  const createNewProject = (data) => {
    let payload = {
      name: data.name,
      category: data.category,
      description: data.description,
      github_link: data.github_link,
      user_id: data.user_id,
    };
    disptach(saveNewProject(payload))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };
  return (
    <>
      <div className="hoe">
        <div className="w-100" style={{ maxWidth: "370px" }}>
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
            <Button className="w-100" id="primary-btn" type="submit">
              Create Project
            </Button>
            {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddProjects;
