import React, { useState } from "react";
import UserItem from "./UserItem";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");


  function nameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    //console.log(enteredUsername);
    props.onAddUser(
      <UserItem username={enteredUsername} age={enteredAge} key={Math.random().toString()} />
    );
  }

  //console.log(user);

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <label>Age (Years)</label>
          <input type="number" value={enteredAge} onChange={ageChangeHandler} />
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
        <div></div>
      </div>
    </form>
  );
}

export default AddUser;
