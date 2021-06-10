import React, { useState } from "react";
import Users from "./Components/Users/Users";
import AddUser from "./Components/Users/AddUser.js";
import UserItem from "./Components/Users/UserItem";

const dummyUsers = [<UserItem username="ben" age="17" />];

function App() {
  const [users, setUsers] = useState(dummyUsers);

  function addUserHandler(user) {
    setUsers((prevUsers) => {
      return [
        <UserItem username={user.username} age={user.age} />,
        ...prevUsers,
      ];
    });
    console.log(users.toString());
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <Users allUsers={users} />
    </div>
  );
}

export default App;
