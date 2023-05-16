import { useEffect, useReducer } from "react";
import axios from "axios";

export function useReservations() {
  const [state, dispatch] = useReducer(reservationsReducer, {
    reservations: [],
    loading: true,
  });

  useEffect(() => {
    // Fetching reservations
    axios({
      method: "GET",
      url: "/api/reservations",
    })
      .then(({ data }) => {
        dispatch({
          type: "SET_RESERVATIONS",
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const addReservation = (reservation) => {
    // Adding a new reservation
    axios({
      method: "POST",
      url: "/api/reservations",
      data: reservation,
    })
      .then(({ data }) => {
        dispatch({
          type: "ADD_RESERVATION",
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  return { ...state, addReservation };
}

export function reservationsReducer(state, action) {
  switch (action.type) {
    case "SET_RESERVATIONS":
      return {
        ...state,
        reservations: action.payload,
        loading: false,
      };
    case "ADD_RESERVATION":
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    default:
      return state;
  }
}
