import React from "react";
import Button from "../components/Button";

import "./styles/invoice-popup-style.css";

export default function InvoicePopup({ invoiceData, setShowInvoice }) {
  const handlePrint = () => {
    window.print();
  };

  const handleEmail = () => {
    // Stretch : Logic to handle emailing the invoice
  };

  const descriptionValues = invoiceData.description.split(",");

  return (
    <div className="invoice-popup">
      <h4>Invoice Number: {invoiceData.invoiceNumber}</h4>
      <div className="invoice-details">
        <h5>Invoice Details</h5>
        <p>Name of Customer: {descriptionValues[0]}</p>
        <p>Email ID: {descriptionValues[1]}</p>
        <p>Room Type: {descriptionValues[2]}</p>
      </div>
      <div className="invoice-options">
        <Button text="Close" onClick={() => setShowInvoice(false)} />
        <Button text="Print" onClick={handlePrint} disabled />
        <Button text="Email" onClick={handleEmail} disabled />
      </div>
    </div>
  );
}
