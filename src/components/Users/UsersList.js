import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => {
          const yearsOld = Number(user.age) === 1 ? "year old" : "years old";
          return (
            <li key={user.id}>
              {user.name} ({user.age} {yearsOld})
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
