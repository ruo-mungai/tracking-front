import './App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProjectList from './pages/ProjectList'
import AddProjects from './pages/AddProjects'
import EditProject from "./pages/EditProject";
import AddMember from './pages/AddMember';
import MyProjects from "./pages/MyProjects";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar"
import AdminAddProject from "./adminprojects/AdminAddProject";
import AdminEditProject from "./adminprojects/AdminEditProject";
import AdminAllProjects from "./adminprojects/AdminAllProjects";
import Cohort from "./cohorts/Cohort";
import User from "./users/User";
// import ProjectList from './pages/ProjectList';





function App() {
   const [user, setUser] = useState(null);
  //    const [role, setRole] = useState('');
  // //  const navigate= useNavigate ()
  //  const admin1='user'

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
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route
          path="/"
          element={
            user.role === "user" ? (
              <ProjectList />
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
              <AdminAllProjects />
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        ></Route>
      </Routes>
      {/* <Routes>
        <Route path="/userD" element={<UserDashboard />} />
        <Route path="/adminD" element={<Dashboard />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/test" element={<Test />} />
        <Route path="/addproject" element={<AddProjects />} />
        <Route path="/edit/:id" element={<EditProject />} />
        <Route path="/add/:id" element={<AddMember />} />
      </Routes> */}
    </>
  );
}

export default App;
