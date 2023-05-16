import React from "react";

import { Outlet } from "react-router-dom";
import "./styles/navbar-styles.css"
import Navbar from "./Navbar";
import Footer from "./Footer";




export default function PageLayout() {
  return (
    <>
      {/* Your navbar component */}
      <Navbar />

      {/* This Outlet is the place in which react-router will render your components that you need with the navbar */}
      <Outlet />

      {/* You can add a footer to get fancy in here :) */}
      <Footer />
    </>
  );
}


