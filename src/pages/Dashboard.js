import React from 'react'
import Layout from "../components/shared/Layout";
import { Route, Routes } from "react-router-dom";
import AdminAllProjects from "../adminprojects/AdminAllProjects";
import AdminAddProject from "../adminprojects/AdminAddProject";
import AdminEditProject from "../adminprojects/AdminEditProject";
import Cohort from "../cohorts/Cohort";
import User from "../users/User";

function Dashboard() {
  return (
    <>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<AdminAllProjects />}></Route>
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default Dashboard