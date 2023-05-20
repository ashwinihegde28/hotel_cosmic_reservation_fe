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
  console.log(`descriptionValues`, descriptionValues)

  return (
    <div className="invoice-popup">
      <h1>Invoices</h1>
      <h4>Invoice Number: {invoiceData.id}</h4>
      <div className="invoice-details">
        <h5>Invoice Details</h5>
        <p>Name of Customer: {descriptionValues[0]}</p>
        <p>Email ID: {descriptionValues[1]}</p>
        <p>Room Number: {descriptionValues[2]}</p>
        <p>Total Amount: {descriptionValues[3]} Digital currencies</p>

        {/* <p>Room Type: {descriptionValues[3]}</p> */}
      </div>
      <div className="invoice-options">
        <Button text="Close" onClick={() => setShowInvoice(false)} />
        <Button text="Print" onClick={handlePrint} disabled />
        <Button text="Email" onClick={handleEmail} disabled />
      </div>
    </div>
  );
}
