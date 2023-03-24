import React, { useState } from "react";
function AddBlog(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    // props.onAddUser(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername);
    setEnteredUsername("");
    // setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  return (
    <form onSubmit={addUserHandler}>
      <h2 class="text-center">Comments</h2>
      <div class="input-group mb-3">
        <input
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
          placeholder="Comment down below"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <button
          type="submit"
          class="btn btn-dark"
          id="button-addon2"
        >
          Button
        </button>
      </div>
    </form>
  );
}
export default AddBlog;
