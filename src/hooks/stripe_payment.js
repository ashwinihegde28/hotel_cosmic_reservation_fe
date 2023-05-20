import { useEffect, useReducer } from "react";
import axios from "axios";

export default async function customerPayment(paymentdetails) {
  // Adding a new customer
  // need this data
  // amount, currency, paymentMethod
  return axios({
    method: "POST",
    url: "/api/payments",
    data: paymentdetails,
  })
    .then(({ data }) => {
      //console.log(`inside hook`)
      return data
    })
    .catch((err) => console.log(`error catch`, err));
};

