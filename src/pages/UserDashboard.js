import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
// import ProjectList from './pages/ProjectList'
import AddProjects from "./AddProjects";
// import { useNavigate } from "react-router-dom";
import EditProject from "./EditProject";
import AddMember from "./AddMember";
import MyProjects from "./MyProjects";
// import Login from "./pages/Login";
// import NavBar from "./pages/NavBar";
import Test from "./Test";
import ProjectList from "./ProjectList";

function UserDashboard() {
  return (
    <>
      {/* <Sidebar> */}
        {/* <NavBar user={user} setUser={setUser} /> */}
        <Routes>
          <Route path="/" element={<ProjectList />} />
        </Routes>
      {/* </Sidebar> */}
    </>
  );
}

export default UserDashboard;
