import { useEffect, useState } from "react";
import { Col,  Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Sidebar from "../components/Sidebar";
function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch("/projects")
      .then((r) => r.json())
      .then(setProjects);
  }, []);
 
 return (
   <Sidebar>
     <Row xs={1} md={3} className="g-4">
       {projects.map((project) => (
         <Col key={project.id}>
           <Card>
             <Card.Body>
               <Card.Title>{project.name}</Card.Title>
               <Card.Subtitle className="mb-2 text-muted">
                 category: {project.category}
               </Card.Subtitle>
               <Card.Text>{project.description}</Card.Text>
               {""}
               <Card.Text>project by: {project.user.username}</Card.Text>
             </Card.Body>
             <Card.Body>
               <Card.Link href={project.github_link}>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   fill="currentColor"
                   class="bi bi-github"
                   viewBox="0 0 16 16"
                 >
                   <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                 </svg>
               </Card.Link>

               <Card.Text onClick={() => setVisible(!visible)}>
                 {/* {visible ? "Hide" : "Show"} */}
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   fill="currentColor"
                   class="bi bi-people"
                   viewBox="0 0 16 16"
                 >
                   <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                 </svg>
                 {visible && (
                   <div>
                     <h3>collaborators</h3>
                     {project.members.map((member) => (
                       <div key={member.id}>{member.name}</div>
                     ))}
                   </div>
                 )}
               </Card.Text>
             </Card.Body>
           </Card>
         </Col>
       ))}
     </Row>
   </Sidebar>
 );

  
};




export default ProjectList;
