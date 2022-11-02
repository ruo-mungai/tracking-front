import React, {useEffect, useState } from 'react';
import NewCohort from './NewCohort';
import CohortList from './CohortList';
import AdminBar from '../components/shared/AdminBar';
function Cohort() {
    const [cohorts, setCohorts] = useState([]);

    useEffect(() => {
        fetch("/cohorts")
        .then ((r) => r.json())
        .then((cohortsArray) => {
            setCohorts(cohortsArray)
            console.log(cohortsArray)
        });
    }, []);

    function handleAddCohort(newCohort){
    const updatedCohortArray = [newCohort, ...cohorts]
    setCohorts(updatedCohortArray)
  }

    function handleDeleteCohort(id){
        const updatedCohortArray = cohorts.filter((cohort) => cohort.id !== id);
        setCohorts(updatedCohortArray)
    }
  return (
    <div>
      <AdminBar>
        <NewCohort onAddCohort={handleAddCohort} />
        <CohortList cohorts={cohorts} onDeleteCohort={handleDeleteCohort} />
      </AdminBar>
    </div>
  );
}

export default Cohort