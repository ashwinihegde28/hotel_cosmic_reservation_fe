import { useEffect, useReducer } from "react";
import axios from "axios";

export function useInvoices() {
  const [state, dispatch] = useReducer(invoicesReducer, {
    invoices: [],
    loading: true,
  });

  useEffect(() => {
    // Fetching invoices
    axios({
      method: "GET",
      url: "/api/invoices",
    })
      .then(({ data }) => {
        dispatch({
          type: "SET_INVOICES",
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const addInvoice = (invoice) => {
    // Adding a new invoice

    return axios({
      method: "POST",
      url: "/api/invoices",
      data: invoice,
    })
      .then(({ data }) => {
        dispatch({
          type: "ADD_INVOICE",
          payload: data,
        });
        console.log(`data add invoice`, data)
        return data
      })
      .catch((err) => console.log(err));
  };

  return { ...state, addInvoice };
}

export function invoicesReducer(state, action) {
  switch (action.type) {
    case "SET_INVOICES":
      return {
        ...state,
        invoices: action.payload,
        loading: false,
      };
    case "ADD_INVOICE":
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
      };
    default:
      return state;
  }
}
