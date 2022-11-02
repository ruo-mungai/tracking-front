import React from 'react';
import CohortCard from './CohortCard';

function CohortList({ cohorts, onDeleteCohort}) {
  return (
    <div className='cohortcards'>
        {cohorts.map((cohort) => {
            return (
                <CohortCard
                key = {cohort.id}
                cohort ={cohort}
                onDeleteCohort= {onDeleteCohort}
                
                />
            );
        })}
    </div>
  );
}

export default CohortList