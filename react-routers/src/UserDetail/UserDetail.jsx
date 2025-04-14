import React from "react";
import { useLoaderData } from "react-router";

const UserDetail = () => {
  let userDetail = useLoaderData();
  let { name, id, email, phone, website } = userDetail;
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </div>
  );
};

export default UserDetail;
