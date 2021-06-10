import React, { useState } from "react";
import UsersList from "./Components/Users/UsersList";
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
    console.log(users);
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList allUsers={users} />
    </div>
  );
}

export default App;
