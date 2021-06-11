import React from "react";

function UserItem(props) {
    //console.log(props.username + " <-- should be username");
    return (
    <div>
      <div>Username: {props.username}</div>
      <div>Age: {props.age}</div>
    </div>
  );
}

export default UserItem;
