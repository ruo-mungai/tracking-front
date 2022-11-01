import './App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import ProjectList from './pages/ProjectList'
import AddProjects from './pages/AddProjects'
import { useNavigate } from "react-router-dom";
import EditProject from "./pages/EditProject";
import AddMember from './pages/AddMember';
import MyProjects from "./pages/MyProjects";
import Login from "./pages/Login";
import UserDashboard from './pages/UserDashboard';
import Dashboard from './pages/Dashboard';
import NavBar from "./pages/NavBar"
import Test from './pages/Test';
import AdminAddProject from "./adminprojects/AdminAddProject";
import AdminEditProject from "./adminprojects/AdminEditProject";
import Cohort from "./cohorts/Cohort";
import User from "./users/User";
// import ProjectList from './pages/ProjectList';
// import {useNavigation} from "react-router-dom"
// import RecipeList from "./pages/RecipeList";



function App() {
   const [user, setUser] = useState(null);
  //  const navigate= useNavigate ()
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
  //  console.log (user)
  //  const roles= user.map((user)=>
  //   user.role
  //  )
  //  if(roles===admin1){navigate("/test")}
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Sidebar>
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/test" element={<Test />} />
          <Route path="/addproject" element={<AddProjects />} />
          <Route path="/edit/:id" element={<EditProject />} />
          <Route path="/add/:id" element={<AddMember />} />
          <Route path="/userD" element={<UserDashboard />} />
          <Route path="/adminD" element={<Dashboard />} />
          <Route path="/admin/add" element={<AdminAddProject />}></Route>
          <Route path="/edit/admin/:id" element={<AdminEditProject />}></Route>
          <Route path="/cohort" element={<Cohort />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </Sidebar>
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
