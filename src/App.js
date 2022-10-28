import './App.css';
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
// import ProjectList from './pages/ProjectList'
import AddProjects from './pages/AddProjects'
import LogOut from './pages/LogOut'
import AllProjects from './pages/AllProjects';
import EditProject from "./pages/EditProject";
import AddMember from './pages/AddMember';
import MyProjects from "./pages/MyProjects";


function App() {
  return (
    <>
      <Sidebar>
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
