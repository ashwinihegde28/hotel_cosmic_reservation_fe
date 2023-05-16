import { useEffect, useReducer } from "react";
import axios from "axios";

export function useServices() {
  const [state, dispatch] = useReducer(servicesReducer, {
    services: [],
    loading: true,
  });

  useEffect(() => {
    // Fetching services
    axios({
      method: "GET",
      url: "/api/services",
    })
      .then(({ data }) => {
        dispatch({
          type: "SET_SERVICES",
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const addService = (service) => {
    // Adding a new service
    axios({
      method: "POST",
      url: "/api/services",
      data: service,
    })
      .then(({ data }) => {
        dispatch({
          type: "ADD_SERVICE",
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  return { ...state, addService };
}

export function servicesReducer(state, action) {
  switch (action.type) {
    case "SET_SERVICES":
      return {
        ...state,
        services: action.payload,
        loading: false,
      };
    case "ADD_SERVICE":
      return {
        ...state,
        services: [...state.services, action.payload],
      };
    default:
      return state;
  }
}
