import React from 'react'

function UserRow({user, user:{id, first_name, last_name, email, cohort_id}, captureEdit, changeEditState}) {

    return (
        <tr key={id}>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td>{cohort_id}</td>
            <td>
                <button
                  id="primary-btn"                
                  onClick={() => {
                    captureEdit(user);
                    changeEditState(user)
                  }}
                >
                  Edit
                </button>
            </td>
        </tr>
    )
}
export default UserRow