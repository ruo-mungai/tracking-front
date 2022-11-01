import React from 'react'

function CohortCard({cohort, onDeleteCohort}) {
    const { id, name, description } = cohort 

    function handleDeleteCohort(){
        fetch(`/cohorts/${id}`,{
            method: "DELETE",
        }).then((r) => {
            if (r.ok){
                onDeleteCohort(id)
            }
        })
    }
  return (
    <div className='card'>
        <h2>{name}</h2>
        <p>{description}</p>

        <button onClick={handleDeleteCohort} id="primary-btn">Delete</button>
    </div>
  )
}

export default CohortCard