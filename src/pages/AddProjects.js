import {  Form, Button } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, saveNewProject } from "../slice/projectslice";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const AddProjects = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      category: "",
      description: "",
      github_link: "",
      // user_id: "",
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
      // user_id: data.user_id,
    };
    disptach(saveNewProject(payload))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };
  return (
    <>
      <Sidebar>
        <div className="hoe">
          <div className="w-100" style={{ maxWidth: "370px" }}>
            <h2 className="header">Create Project</h2>
            <Form onSubmit={handleSubmit(createNewProject)}>
              <Form.Group id="name">
                <Form.Label>Project title*</Form.Label>
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <Form.Control type="text" {...field} />
                  )}
                />
              </Form.Group>
              <Form.Group id="category">
                <Form.Label>Enter Project category*</Form.Label>
                <Controller
                  control={control}
                  name="category"
                  render={({ field }) => (
                    // <Form.Control type="text" {...field} />
                    <Form.Select
                      aria-label="Default select example"
                      type="text"
                      {...field}
                    >
                      <option>select category</option>
                      <option value="Android">Android</option>
                      <option value="Fullstack">Fullstack</option>
                    </Form.Select>
                  )}
                />
              </Form.Group>

              <Form.Group id="description">
                <Form.Label> Project Description*</Form.Label>
                <Controller
                  control={control}
                  name="description"
                  render={({ field }) => (
                    <Form.Control type="text" {...field} />
                  )}
                />
              </Form.Group>
              <Form.Group id="github-link">
                <Form.Label>Projects Github Link*</Form.Label>
                <Controller
                  control={control}
                  name="github_link"
                  render={({ field }) => (
                    <Form.Control type="text" {...field} />
                  )}
                />
              </Form.Group>
              {/* <Form.Group id="github-link">
              <Form.Label>user_id*</Form.Label>
              <Controller
                control={control}
                name="user_id"
                render={({ field }) => <Form.Control type="text" {...field} />}
              />
            </Form.Group> */}
              <br />
              <Button
                className="w-100"
                id="primary-btn"
                type="submit"
                variant="dark"
                disabled={apiStatus === "pending"}
              >
                {apiStatus === "pending" ? "Saving........." : "Save"}
              </Button>
            </Form>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default AddProjects;
