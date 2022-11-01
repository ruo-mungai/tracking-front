import React, {useState} from 'react'
import UserRow from './UserRow'
import EditUser from './EditUser'

function UserTable({users, onUpdateUser}) {
// state for conditional render of edit form
  const [isEditing, setIsEditing] = useState(false);
// state for edit form inputs
  const [editForm, setEditForm] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    cohort_id: ""
  })

// when PATCH request happens; auto-hides the form, pushes changes to display
  function handleUserUpdate(updatedUser) {
      setIsEditing(false);
      onUpdateUser(updatedUser);
    }

// capture user input in edit form inputs
  function handleChange(e) {
    setEditForm({
    ...editForm,
    [e.target.name]: e.target.value
    })
  }

// needed logic for conditional rendering of the form - shows the customer you want when you want them, and hides it when you don't
  function changeEditState(user) {
    if (user.id === editForm.id) {
      setIsEditing(isEditing => !isEditing) // hides the form
    } else if (isEditing === false) {
      setIsEditing(isEditing => !isEditing) // shows the form
    }
  }

// capture the customer you wish to edit, set to state
  function captureEdit(clickedUser) {
    let filtered = users.filter(user => user.id === clickedUser.id)
    setEditForm(filtered[0])
  }

  return (
      <div>
        {isEditing?
          (<EditUser
            editForm={editForm}
            handleChange={handleChange}
            handleUserUpdate={handleUserUpdate}
          />) : null}
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Cohort</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
              { users.map(user =>
                <UserRow
                  key={user.id}
                  user={user}
                  captureEdit={captureEdit}
                  changeEditState={changeEditState}
                />) }
          </tbody>
        </table>
      </div>
   )
}
export default UserTable