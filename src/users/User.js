import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";
import AdminBar from '../components/shared/AdminBar';

function User() {
// set state
  const [users, setUsers] = useState([]);

// first data grab
  useEffect(() => {
    fetch("/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data)
      });
  }, []);

// update customers on page after edit
  function onUpdateUser() {
    const updatedUser = users.map(
      user=> {
        if (user.id === updatedUser.id) {
          return updatedUser
        } else {return user}
      }
    )
    setUsers(updatedUser)
  }
 const cohort = users.map((user) =>(
  user.cohort
 ))
  return (
    <div>
      <AdminBar>
      <UserTable
        users={users} cohort = {cohort}
        onUpdateUser={onUpdateUser}
      />
      </AdminBar>
    </div>
  );
}
export default User;