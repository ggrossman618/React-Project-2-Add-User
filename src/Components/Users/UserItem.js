import React from "react";

function UserItem(props) {
    console.log(props.username + " <-- should be username");
    return (
    <div>
      username: {props.username}
      age: {props.age}
    </div>
  );
}

export default UserItem;
