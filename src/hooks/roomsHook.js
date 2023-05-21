import { useEffect, useReducer } from "react";
import axios from "axios";

export function useRooms() {
  const [state, dispatch] = useReducer(roomsReducer, {
    rooms: [],
    loading: true,
  });

  useEffect(() => {
    // Fetching all rooms
    axios
      .get("/api/rooms")
      .then(({ data }) => {
        dispatch({
          type: "SET_ROOMS",
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const getRoomById = (id) => {
    // Fetching a room by ID
      return axios
      .get(`/api/rooms/${id}`)
      .then(({ data }) => {
        dispatch({
          type: "SET_ROOM",
          payload: data,
        });

        return data
      })
      .catch((err) => console.log(err));
  };

  const addRoom = (room) => {
    // Adding a new room
    axios
      .post("/api/rooms", room)
      .then(({ data }) => {
        dispatch({
          type: "ADD_ROOM",
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  return { ...state, getRoomById, addRoom };
}

export function roomsReducer(state, action) {
  switch (action.type) {
    case "SET_ROOMS":
      return {
        ...state,
        rooms: action.payload,
        loading: false,
      };
    case "SET_ROOM":
      return {
        ...state,
        rooms: [action.payload],
        loading: false,
      };
    case "ADD_ROOM":
      return {
        ...state,
        rooms: [...state.rooms, action.payload],
      };
    default:
      return state;
  }
}
