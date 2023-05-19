import { useEffect, useReducer } from "react";
import axios from "axios";

export default function customerPayment(paymentdetails) {
  // Adding a new customer
  // need this data:
  // amount, currency, paymentMethod
  console.log("***********", paymentdetails)
  return axios({
    method: "POST",
    url: "/api/payments",
    data: paymentdetails,
  })
    .then(({ data }) => {
      // dispatch({
      //   type: "ADD_CUSTOMER",
      //   payload: data,
      // });
      console.log("----- customer payment successful", data)
      return data
    })
    .catch((err) => console.log(`error catch`, err));
};

