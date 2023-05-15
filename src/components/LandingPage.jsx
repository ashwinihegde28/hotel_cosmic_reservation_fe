import React from "react";

import { useCustomers } from "../hooks/useEffect";

import "./styles/navbar-styles.css";

export default function LandingPage() {
  const customers = useCustomers();
  console.log("******", typeof customers);
  console.log("******", customers);
  return (
    <p className="landing-body">
      <div> Landing page !</div>
      <div className="landing-body">
        <h2> *** Customers ****</h2>
        <div className="customer-list">
          {Array.isArray(customers.customers) &&
            customers.customers.map((customer) => (
              <div key={customer.id}>
                <p>Name: {customer.name}</p>
                <p>Email: {customer.email}</p>
                <p>ID: {customer.id}</p>
              </div>
            ))}
        </div>
      </div>
    </p>
  );
}
