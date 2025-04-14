import React, { use } from "react";

const Customers = ({ customerPromise }) => {
  let customers = use(customerPromise);
  console.log(customers);
  return <div></div>;
};

export default Customers;
