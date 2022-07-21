import React from "react";
import UserItem from "../UserItem/UserItem";
import Card from "../../UI/Card";
import styles from './UserList.module.css'

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.items?.map((user) => (
          <UserItem key={user.id}>{user.userName} ({user.userAge} years old)</UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
