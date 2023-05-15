import { useEffect, useReducer } from "react";
import axios from "axios";

// CUSTOMERS HOOK
export function useCustomers() {
  const [state, dispatch] = useReducer(customersReducer, {
    customers: [],
    loading: true,
  });

  useEffect(() => {
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

  return state;
}

export function customersReducer(state, action) {
  switch (action.type) {
    case "SET_CUSTOMERS":
      return {
        ...state,
        customers: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

// CUSTOMER HOOK
const useCustomer = (id) => {
  const [state, dispatch] = useReducer(customerReducer, {
    customer: null,
    loading: true,
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/customers/${id}`,
    })
      .then(({ data }) => {
        dispatch({
          type: "SET_CUSTOMER",
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return state;
};

const customerReducer = (state, action) => {
  switch (action.type) {
    case "SET_CUSTOMER":
      return {
        ...state,
        customer: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// // ROOMS HOOK
// const useRooms = () => {
//   const [state, dispatch] = useReducer(roomsReducer, {
//     rooms: [],
//     loading: true,
//   });

//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: "/api/rooms",
//     })
//       .then(({ data }) => {
//         dispatch({
//           type: "SET_ROOMS",
//           payload: data,
//         });
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return state;
// };

// const roomsReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_ROOMS":
//       return {
//         ...state,
//         rooms: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// // ROOM HOOK
// const useRoom = (id) => {
//   const [state, dispatch] = useReducer(roomReducer, {
//     room: null,
//     loading: true,
//   });

//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: `/api/rooms/${id}`,
//     })
//       .then(({ data }) => {
//         dispatch({
//           type: "SET_ROOM",
//           payload: data,
//         });
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   return state;
// };

// const roomReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_ROOM":
//       return {
//         ...state,
//         room: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// // SERVICES HOOK
// const useServices = () => {
//   const [state, dispatch] = useReducer(servicesReducer, {
//     services: [],
//     loading: true,
//   });

//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: "/api/services",
//     })
//       .then(({ data }) => {
//         dispatch({
//           type: "SET_SERVICES",
//           payload: data,
//         });
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return state;
// };

// const servicesReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_SERVICES":
//       return {
//         ...state,
//         services: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// // SERVICE HOOK
// const useService = (id) => {
//   const [state, dispatch] = useReducer(serviceReducer, {
//     service: null,
//     loading: true,
//   });

//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: `/api/services/${id}`,
//     })
//       .then(({ data }) => {
//         dispatch({
//           type: "SET_SERVICE",
//           payload: data,
//         });
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   return state;
// };

// const serviceReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_SERVICE":
//       return {
//         ...state,
//         service: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// // INVOICES HOOK
// const useInvoices = () => {
//   const [state, dispatch] = useReducer(invoicesReducer, {
//     invoices: [],
//     loading: true,
//   });

//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: "/api/invoices",
//     })
//       .then(({ data }) => {
//         dispatch({
//           type: "SET_INVOICES",
//           payload: data,
//         });
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return state;
// };

// const invoicesReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_INVOICES":
//       return {
//         ...state,
//         invoices: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// // INVOICE HOOK
// const useInvoice = (id) => {
//   const [state, dispatch] = useReducer(invoiceReducer, {
//     invoice: null,
//     loading: true,
//   });

//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: `/api/invoices/${id}`,
//     })
//       .then(({ data }) => {
//         dispatch({
//           type: "SET_INVOICE",
//           payload: data,
//         });
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   return state;
// };

// const invoiceReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_INVOICE":
//       return {
//         ...state,
//         invoice: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

export default {
  useCustomers,
  useCustomer,
  //   useServices,
  //   useService,
  //   useRooms,
  //   useRoom,
  //   useInvoices,
  //   useInvoice,
};
