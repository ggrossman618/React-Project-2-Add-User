import React, { useState } from "react";

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
    const user = {
      username: enteredUsername,
      age: enteredAge
    };
    props.onAddUser(user);
    //console.log(user);
  }

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
      </div>
    </form>
  );
}

export default AddUser;
