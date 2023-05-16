import { useEffect, useReducer } from "react";
import axios from "axios";

export function useCustomers() {
  const [state, dispatch] = useReducer(customersReducer, {
    customers: [],
    loading: true,
  });

  useEffect(() => {
    // Fetching customers
    axios({
      method: "GET",
      url: "/api/customers",
    })
      .then(({ data }) => {
        dispatch({
          type: "SET_CUSTOMERS",
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const addCustomer = (customer) => {
    // Adding a new customer
    axios({
      method: "POST",
      url: "/api/customers",
      data: customer,
    })
      .then(({ data }) => {
        dispatch({
          type: "ADD_CUSTOMER",
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  return { ...state, addCustomer };
}

export function customersReducer(state, action) {
  switch (action.type) {
    case "SET_CUSTOMERS":
      return {
        ...state,
        customers: action.payload,
        loading: false,
      };
    case "ADD_CUSTOMER":
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    default:
      return state;
  }
}
