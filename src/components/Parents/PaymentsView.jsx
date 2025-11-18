import React from "react";

const PaymentsView = ({ payments = [] }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Payments</h2>

      <div className="space-y-3">
        {payments.map((p, i) => (
          <div
            key={i}
            className="flex justify-between bg-gray-50 p-3 rounded-lg"
          >
            <span className="text-gray-700">{p.month}</span>

            <span
              className={`font-semibold ${
                p.status === "Paid" ? "text-green-600" : "text-red-500"
              }`}
            >
              {p.status}
            </span>

            <span className="text-gray-700">{p.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentsView;
