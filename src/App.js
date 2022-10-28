import './App.css';
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
// import ProjectList from './pages/ProjectList'
import AddProjects from './pages/AddProjects'
import LogOut from './pages/LogOut'
import AllProjects from './pages/AllProjects';
import EditProject from "./pages/EditProject";


function App() {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/" element={<AllProjects />} />
          <Route path="/addproject" element={<AddProjects />} />
          <Route path="/edit/:id" element={<EditProject />} />
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </Sidebar>
    </>
  );
}

export default App;
