import React from 'react'
// import { useNavigate } from 'react-router-dom'

function EditUser({ editForm, handleUserUpdate, handleChange }) {
    let {id, username, cohort_id} = editForm
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
                <input type="text" name="username" value={username} onChange={handleChange}/>
                <input type="text" name="cohort_id" value={cohort_id} onChange={handleChange}/>
                <button type="submit" id="primary-btn" >Submit Changes</button>
            </form>
        </div>
    )
}
export default EditUser