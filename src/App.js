import './App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
// import ProjectList from './pages/ProjectList'
import AddProjects from './pages/AddProjects'
import LogOut from './pages/LogOut'
import AllProjects from './pages/AllProjects';
import EditProject from "./pages/EditProject";
import AddMember from './pages/AddMember';
import MyProjects from "./pages/MyProjects";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar"
// import RecipeList from "./pages/RecipeList";



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
      <Sidebar>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<AllProjects />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/addproject" element={<AddProjects />} />
          <Route path="/edit/:id" element={<EditProject />} />
          <Route path="/add/:id" element={<AddMember />} />
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </Sidebar>
    </>
  );
}

export default App;
