import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/User/UserForm/UserForm";
import UserList from "./components/User/UserLIst/Userlist";

// const allUsers = [
//   { userName: "Ayush", userAge: 20, id: Math.random().toString() },
//   { userName: "Avinash", userAge: 32, id: Math.random().toString() },
// ];

const App = () => {
  const [updateUsers, setUpdatedUsers] = useState([]);

  const onSubmitHandler = (detail) => {
    setUpdatedUsers((prevState) => {

      return [detail, ...prevState];
    });
    console.log(detail);
  };

  return (
    <div>
      <UserForm onSubmit={onSubmitHandler}/>
      <UserList items={updateUsers} />
    </div>
  );
};

export default App;
