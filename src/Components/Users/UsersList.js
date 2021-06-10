import React from "react";
import UserItem from "./UserItem";

function UsersList(props) {
  return (
    <ul>
      {props.allUsers.map((user) => (
        <UserItem
          username={user.username} //adding this key to deal with render times
          age={user.age}
          key = {user.key}
        />
      ))}
    </ul>
  );
}

export default UsersList;
