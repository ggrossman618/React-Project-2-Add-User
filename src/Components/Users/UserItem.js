import React from "react";

function UserItem(props) {
  return (
    <div>
      <p>{props.username}</p>
      <p>{props.age}</p>
    </div>
  );
}

export default UserItem;
