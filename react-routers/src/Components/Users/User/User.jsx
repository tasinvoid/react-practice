import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  let { name, email, id } = user;
  return (
    <div className="border rounded-2xl p-2 m-5">
      <h1>{name}</h1>
      <p>{email}</p>
      <Link to={`/users/${id}`}>Detail</Link>
    </div>
  );
};

export default User;
