import React, { useState } from "react";
import styles from "./UserForm.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

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
    if(userAge.trim().length <= 0 || userName.trim().length <= 0 || +userAge <= 0){
      alert('error')
      return
    }
    const userDetails = { userAge: userAge, userName: userName , id: Math.random().toString() };
    props.onSubmit(userDetails);
    setUserAge('')
    setUserName('')
  };

  return (
    <div>
    <ErrorModal error='An Error Occured' message="Something went wrong"></ErrorModal>
    <Card className={styles.input}>
      <form onSubmit={userSubmitHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" value={userName} onChange={userNameHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={userAge} onChange={userAgeHandler} />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
    </div>
  );
};

export default UserForm;
