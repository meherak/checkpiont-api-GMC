import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./Components/User";

const UserList = () => {
  useEffect(() => {
    getUsers();
  }, []);
  const [users, setUsers] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const getUsers = async () => {
    try {
      setLoading(true);
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  console.log(users);
  console.log(error);
  console.log(loading);
  return (
    <div>
      {loading
        ? "loading"
        : error
        ? "error"
        : users == null
        ? "not found"
        : users.map((user) => <User user={user} key={user.id} />)}
    </div>
  );
};

export default UserList;
