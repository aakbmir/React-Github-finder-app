import React, { useContext } from "react";
import Spinner from "../../shared/Spinner";
import UserItem from "./UserItem";
import GlobalContext from "../../../context/GlobalContext";

function UserResults() {
  const { users, githubLoading } = useContext(GlobalContext);

  if (!githubLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols;s-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  } else {
    return <Spinner></Spinner>;
  }
}

export default UserResults;
