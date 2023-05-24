import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/Button";

import "./styles/invoice-popup-style.css";

export default function InvoicePopup({ invoiceData, setShowInvoice }) {
  const handlePrint = () => {
    window.print();
  };

  const location = useLocation();
  const invoiceRef = useRef(null);

  useEffect(() => {
    if (invoiceRef.current) {
      window.scrollTo({
        top: invoiceRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [location]);

  const handleEmail = () => {
    // Stretch : Logic to handle emailing the invoice
  };
  const descriptionValues = invoiceData.description.split(",");

  return (
    <div className="invoice-popup">
      <h1>Invoice</h1>
      <h4>Invoice Number: {invoiceData.id}</h4>
      <div className="invoice-details">
        <h5>Invoice Details</h5>
        <p>Name : {descriptionValues[0]}</p>
        <p>Email ID : {descriptionValues[1]}</p>
        <p>Room Number : {descriptionValues[2]}</p>
        <p>Room Type : {descriptionValues[3]}</p>
        <p>Room Price : {descriptionValues[4]} Digital currencies</p>
        <p>Check in date : {descriptionValues[5]} </p>
        <p>Check out date : {descriptionValues[6]} </p>

        {/* <p>Room Type: {descriptionValues[3]}</p> */}
      </div>
      <div className="invoice-options" ref={invoiceRef}>
        <Link to="/">
          <Button text="Close" onClick={() => setShowInvoice(false)} />
        </Link>
        <Button text="Print" onClick={handlePrint} disabled />
        <Button text="Email" onClick={handleEmail} disabled />
      </div>
    </div>
  );
}
