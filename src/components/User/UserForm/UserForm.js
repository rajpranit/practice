import React, { useState } from "react";
import styles from "./UserForm.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState(false);

  // const [userDetails, setUserDetails] = useState({
  //   userName: "",
  //   userAge: "",
  // });

  const userNameHandler = (event) => {
    setUserName(event.target.value);

    // setUserDetails((prevState) => {
    //   return { ...prevState, userName: event.target.value };
    // });
  };

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
    //   console.log("change");
    // setUserDetails((prevState) => {
    //   return { ...prevState, userAge: event.target.value };
    // });
  };

  const userSubmitHandler = (event) => {
    event.preventDefault();
    if (userAge.trim().length <= 0 || userName.trim().length <= 0) {
      setError({
        error: "An Error Occured",
        message: "Enter a valid name and age (non empty value)",
      });
      return;
    }
    if (+userAge <= 0) {
      setError({
        error: "An Error Occured",
        message: "Age should not be less than 1",
      });
      return;
    }
    const userDetails = {
      userAge: userAge,
      userName: userName,
      id: Math.random().toString(),
    };
    props.onSubmit(userDetails);
    setUserAge("");
    setUserName("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          onClick={errorHandler}
          error={error.error}
          message={error.message}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={userSubmitHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={userAge}
            onChange={userAgeHandler}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
