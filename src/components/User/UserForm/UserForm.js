import React, { useState, useRef } from "react";
import styles from "./UserForm.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";

const UserForm = (props) => {
  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");
  const [error, setError] = useState(false);
  const userInputAge = useRef();
  const userInputName = useRef();

  // const userNameHandler = (event) => {
  //   setUserName(event.target.value);
  // };

  // const userAgeHandler = (event) => {
  //   setUserAge(event.target.value);
  // };

  //checking some stuff

  const userSubmitHandler = (event) => {
    event.preventDefault();
    const userName = userInputName.current.value
    const userAge = userInputAge.current.value
    // console.log(userInputAge);
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
    userInputAge.current.value = ''
    userInputName.current.value = ''
    // setUserAge("");
    // setUserName("");
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
            // value={userName}
            // onChange={userNameHandler}
            ref={userInputName}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            // value={userAge}
            // onChange={userAgeHandler}
            ref={userInputAge}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
