import React from "react";

function UserItem(props) {
    console.log(props.name + "<-- should be username");
    return (
    <li>
      <div>{props.username}</div>
      <div>{props.age}</div>
    </li>
  );
}

export default UserItem;
