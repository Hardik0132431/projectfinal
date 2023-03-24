import React, { useState } from "react";
import AddBlog from "./AddBlog";
import UsersList from "./UsersList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Seach from "./Search";
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <Seach></Seach>
      <AddBlog onAddUser={addUserHandler}></AddBlog>
      <UsersList users={usersList} />
      
    </div>
  );
}
export default App;
