import React from "react";
import UserItem from "../UserItem/UserItem";
import Card from "../../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.items?.map((user) => (
          <UserItem key={Math.random().toString()}>{user.userName}</UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
