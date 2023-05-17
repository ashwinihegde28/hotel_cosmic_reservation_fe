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
    return axios({
      method: "POST",
      url: "/api/reservations",
      data: reservation,
    })
      .then(({ data }) => {
        dispatch({
          type: "ADD_RESERVATION",
          payload: data,
        });
        console.log(`success add reservation`)
        console.log(`data,`, data)
        return data
      })
      .catch((err) => console.log(err));
  };

  const getReservationById = (id) => {
    // Fetching a reservation by ID
    return axios({
      method: "GET",
      url: `/api/reservations/${id}`,
    })
      .then(({ data }) => {
        return data;
      })
      .catch((err) => console.log(err));
  };

  return { ...state, addReservation, getReservationById };
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
