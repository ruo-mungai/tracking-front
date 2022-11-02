import React, { useState } from 'react';

function NewCohort({onAddCohort}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
    
        fetch("/cohorts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            description: description,
          
          }),
        })
        .then((r) => r.json())
        .then(newCohort => {
          onAddCohort(newCohort)
          setName("")
          setDescription("")
        })
      }
  return (
    <div className='addcohort'>
        <h4>Moringa Cohorts</h4>
        <form onSubmit={handleSubmit} >
            <input
              type="text"
              name ="name"
              placeholder="name"
              value ={name}
              onChange={(e) => setName(e.target.value)}
            />

            {" "}
             <input
              type="text"
              name ="description"
              placeholder="description"
              value ={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {" "}
        <button type="submit">Add Cohort</button>

        </form>
    </div>
  )
}

export default NewCohort