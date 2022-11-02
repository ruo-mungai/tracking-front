import React from 'react'

function UserRow({user, user:{id, username, cohort_id}, captureEdit, changeEditState}) {
//  console.log(user)
    return (
        <tr key={id}>
            <td>{username}</td>
            {/* {cohort.map((cohort)=>( */}
            {/* <td>{cohort}</td> */}
            {/* ))} */}
            
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