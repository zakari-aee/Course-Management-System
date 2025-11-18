import React, { useState } from "react";

const PaymentForm = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700"
      >
        + Add Payment
      </button>

      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Add Payment</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Student Name"
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Amount"
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="date"
                className="w-full p-2 border rounded-lg"
              />

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShow(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
