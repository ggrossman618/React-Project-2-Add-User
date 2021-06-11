import React from "react";

function UsersList(props) {
  return (
    <ul>
      {props.allUsers.map((user) => (
        <li>{user}</li>
      ))}
    </ul>
  );
}

export default UsersList;