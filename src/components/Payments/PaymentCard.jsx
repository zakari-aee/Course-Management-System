import React from "react";

const PaymentCard = ({ payment }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{payment.student}</h3>
      <p className="text-gray-600 mt-1">Amount: {payment.amount}</p>
      <p className="text-gray-500">Date: {payment.date}</p>

      <span
        className={`inline-block mt-3 px-3 py-1 text-sm rounded-lg 
        ${
          payment.status === "Paid"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-800"
        }`}
      >
        {payment.status}
      </span>
    </div>
  );
};

export default PaymentCard;
