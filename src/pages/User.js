import {
  fetchALLUsers,
  getAllUsers,
  getLoading,
} from "../slice/userSlice";
import Table from 'react-bootstrap/Table';
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { alertClasses } from "@mui/material";

const User = () => {
  const allUsers = useSelector(getAllUsers);
  const apiStatus = useSelector(getLoading);
  const dispatch = useDispatch();
  let contentToRender = "";
  const [visible, setVisible] = useState(false);
 console.log(allUsers)
  useEffect(() => {
    dispatch(fetchALLUsers());
  }, [dispatch]);
  contentToRender =
    apiStatus === "pending" ? (
      <>
        <div className=" d-flex align-items-center justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </>
    ) : (
      <Table striped>
        <thead>
          <tr>
            <th>id</th>
            <th>UserName</th>
            <th>Role</th>
            <th>Cohort</th>
            <th>Cohort_id</th>
          </tr>
        </thead>
        <tbody>
            
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
     
         
        </tbody>
      </Table>
    );
  return <Container className="mt-2">{contentToRender}</Container>;
};

export default User;
