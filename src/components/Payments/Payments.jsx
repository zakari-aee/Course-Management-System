import React from "react";
import PaymentCard from "./PaymentCard";
import PaymentForm from "./PaymentForm";
import PaymentExport from "./PaymentExport";
import PaymentReminder from "./PaymentReminder";

const Payments = () => {
  const samplePayments = [
    {
      id: 1,
      student: "Sarah Ali",
      amount: "$120",
      date: "2025-01-10",
      status: "Paid",
    },
    {
      id: 2,
      student: "Mohamed Yassine",
      amount: "$200",
      date: "2025-01-15",
      status: "Pending",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Payments</h1>

      {/* Actions */}
      <div className="flex gap-4">
        <PaymentForm />
        <PaymentExport />
        <PaymentReminder />
      </div>

      {/* List of Payments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {samplePayments.map((p) => (
          <PaymentCard key={p.id} payment={p} />
        ))}
      </div>
    </div>
  );
};

export default Payments;
