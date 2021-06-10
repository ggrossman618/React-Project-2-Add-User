import React from "react";

function AddUser() {

  function submitHandler(){
    
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input type="text" />
      </div>
      <div>
        <label>Age (Years)</label>
        <input type="number" />
      </div>
      <div>
        <button type='submit'>Add User</button>
      </div>
    </form>
  );
}

export default AddUser;
