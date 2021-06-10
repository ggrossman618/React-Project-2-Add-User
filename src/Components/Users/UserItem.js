import React from "react";

function UserItem(props) {
  return (
    <li>
      username: {props.username}
      age: {props.age}
      
    </li>
  );
}

export default UserItem;
