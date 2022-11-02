import './App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProjectList from './pages/ProjectList'
import AddProjects from './pages/AddProjects'
import EditProject from "./pages/EditProject";
import AddMember from './pages/AddMember';
import MyProjects from "./pages/MyProjects";
import Login from "./pages/Login";

import AdminAddProject from "./adminprojects/AdminAddProject";
import AdminEditProject from "./adminprojects/AdminEditProject";
import AdminAllProjects from "./adminprojects/AdminAllProjects";
import Cohort from "./cohorts/Cohort";
import User from "./users/User";






function App() {
   const [user, setUser] = useState(null);


   useEffect(() => {
     // auto-login
     fetch("/me").then((r) => {
       if (r.ok) {
         r.json().then((user) => setUser(user));
       }
     });
   }, []);
  
  
   if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            user.role === "user" ? (
              <ProjectList user={user} setUser={setUser}/>
            ) : (
              <Navigate replace to={"/Admin"} />
            )
          }
        />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/addproject" element={<AddProjects />} />
        <Route path="/edit/:id" element={<EditProject />} />
        <Route path="/add/:id" element={<AddMember />} />
        <Route path="/admin/add" element={<AdminAddProject />}></Route>
        <Route path="/edit/admin/:id" element={<AdminEditProject />}></Route>
        <Route path="/cohort" element={<Cohort />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route
          path="/admin"
          element={
            user.role === "admin" ? (
              <AdminAllProjects user={user} setUser={setUser}/>
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        ></Route>
      </Routes>
      
    </>
  );
}

export default App;
