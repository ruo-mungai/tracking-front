import './App.css';
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import ProjectList from './pages/ProjectList'
import AddProjects from './pages/AddProjects'
import LogOut from './pages/LogOut'


function App() {
  return (
    <>
    <Sidebar>
    <Routes>
        <Route path="/h" element={<ProjectList/>} />
        <Route path="/addproject" element={<AddProjects/>} />
        <Route path="/logout" element={<LogOut/>} />
    </Routes>
    </Sidebar>
    </>
  );
}

export default App;
