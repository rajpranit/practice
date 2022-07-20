import React, { useState } from "react";
import styles from "./UserForm.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const UserForm = (props) => {
  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");

  const [userDetails, setUserDetails] = useState({
    userName: "",
    userAge: "",
  });

  const userNameHandler = (event) => {
    //   setUserName(event.target.value);

    setUserDetails((prevState) => {
      return { ...prevState, userName: event.target.value };
    });
  };

  const userAgeHandler = (event) => {
    //   setUserAge(event.target.value);
    //   console.log("change");
    setUserDetails((prevState) => {
      return { ...prevState, userAge: event.target.value };
    });
  };

  const userSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(userDetails);
    props.onSubmit(userDetails);
  };

  return (
    <Card className={styles.input} >
    <div>
      <form onSubmit={userSubmitHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          onChange={userNameHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={userAgeHandler}
        />
        <Button>Submit</Button>
      </form>
    </div>
    </Card>
  );
};

export default UserForm;
