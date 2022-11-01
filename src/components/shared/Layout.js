import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Layout = (props) => {
  return (
    <>
    <div className="Container">
      <Navbar className="sidebar">
        <ul className="sidelist">
        <Navbar.Brand href="/" className="siderow" activeclassName="active">Projects</Navbar.Brand>
        <Navbar.Brand href="add" className="siderow" activeclassName="active">Add Projects</Navbar.Brand>
        <Navbar.Brand href="cohort" className="siderow" activeclassName="active">Cohorts</Navbar.Brand>
        <Navbar.Brand href="user" className="siderow" activeclassName="active">Users</Navbar.Brand>
        </ul>
      </Navbar>
      <Container> {props.children}</Container>
      </div>
    </>
  );
};
export default Layout;