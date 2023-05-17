import { useEffect, useReducer } from "react";
import axios from "axios";

export function useServicesReserved() {
  const [state, dispatch] = useReducer(servicesReservedReducer, {
    servicesReserved: [],
    loading: true,
  });

  useEffect(() => {
    if (state.loading) {
      // Fetching services reserved
      axios({
        method: "GET",
        url: "/api/servicesReserved",
      })
        .then(({ data }) => {
          dispatch({
            type: "SET_SERVICES_RESERVED",
            payload: data,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [state.loading]);

  const getServiceReserved = (serviceReservedId) => {
    axios({
      method: "GET",
      url: `/api/servicesReserved/${serviceReservedId}`,
    })
      .then(({ data }) => {
        dispatch({
          type: "SET_SERVICES_RESERVED",
          payload: [data],
        });
      })
      .catch((err) => console.log(err));
  };

  const addServiceReserved = (serviceReserved) => {
    // Adding a new service reserved
    axios({
      method: "POST",
      url: "/api/servicesReserved",
      data: serviceReserved,
    })
      .then(({ data }) => {
        dispatch({
          type: "ADD_SERVICE_RESERVED",
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  return { ...state, addServiceReserved, getServiceReserved };
}

export function servicesReservedReducer(state, action) {
  switch (action.type) {
    case "SET_SERVICES_RESERVED":
      return {
        ...state,
        servicesReserved: action.payload,
        loading: false,
      };
    case "ADD_SERVICE_RESERVED":
      return {
        ...state,
        servicesReserved: [...state.servicesReserved, action.payload],
      };
    default:
      return state;
  }
}
