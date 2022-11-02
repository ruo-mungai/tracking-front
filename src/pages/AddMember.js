import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, saveNewMember } from "../slice/memberslice";
import { useNavigate } from "react-router-dom";


const AddMember = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      project_id: "",
     
    },
  });

  const disptach = useDispatch();
  const navigate = useNavigate();
  const apiStatus = useSelector(getLoading);

  const createNewMember = (data) => {
    let payload = {
      name: data.name,
      project_id: data.project_id,
    
    };
    disptach(saveNewMember(payload))
      .unwrap()
      .then(() => {
       navigate("/"); 
      });
  };
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Create A New Member</legend>
            <Form onSubmit={handleSubmit(createNewMember)}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <Form.Control type="text" {...field} />
                  )}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formproject_id">
                <Form.Label>project_id</Form.Label>
                <Controller
                  control={control}
                  name="project_id"
                  render={({ field }) => (
                    <Form.Control type="text" {...field} />
                  )}
                />
              </Form.Group>
              <Button
                variant="dark"
                type="submit"
                disabled={apiStatus === "pending"}
              >
                {apiStatus === "pending" ? "Saving........." : "Save"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddMember;
