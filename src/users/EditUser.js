import React from 'react'
// import { useNavigate } from 'react-router-dom'

function EditUser({ editForm, handleUserUpdate, handleChange }) {
    let {id, first_name, last_name, email, cohort_id} = editForm
    // const navigate = useNavigate();

// PATCH request; calls handleCustomerUpdate to push changes to the page
    function handleEditForm(e) {
        e.preventDefault();
        fetch(`/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(editForm),
        })
            .then(resp => resp.json())
            .then(updatedUser => {
                handleUserUpdate(updatedUser)

            })
    }

    return (
        <div>
            <h4>Edit User</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" name="first_name" value={first_name} onChange={handleChange}/>
                <input type="text" name="last_name" value={last_name} onChange={handleChange}/>
                <input type="text" name="email" value={email} onChange={handleChange}/>
                <input type="text" name="cohort_id" value={cohort_id} onChange={handleChange}/>
                <button type="submit" id="primary-btn" >Submit Changes</button>
            </form>
        </div>
    )
}
export default EditUser