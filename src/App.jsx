import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[#2e2f36] flex flex-col items-center justify-center">
      
      {/* Header */}
      <div className="text-center text-white mb-4">
        <p className="text-sm">Paying to</p>
        <p className="text-orange-500 font-semibold">homefood</p>
      </div>

      {/* Order Card */}
      <div className="bg-white rounded-2xl shadow-lg w-[360px] p-4 z-10">
        <h2 className="font-bold text-xl">Hi Prasad Naik,</h2>
        <p className="text-gray-500 text-sm mb-2">9999999999</p>

        <hr className="my-3" />

        <div className="flex justify-between text-sm text-gray-500">
          <p>Order Order12312 orderNumber</p>
          <span className="text-blue-500 cursor-pointer">View order</span>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Order Value</span>
            <span>₹5,00,000.00</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>₹2,000.00</span>
          </div>
        </div>

        <div className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full w-fit mt-3">
          Total saving of 0.4% on this order
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-bold">
          <span>Payable Amount</span>
          <span>₹4,98,000.00</span>
        </div>
      </div>

      {/* Payment Section */}
      <div className="bg-[#fff8ed] w-[360px] rounded-2xl p-4 -mt-6">
        <p className="font-medium mb-3">Select Payment Method</p>

        {/* UPI OPEN */}
        <div className="border-2 border-orange-500 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <img src="/upi.png" alt="upi" className="w-7" />
            <span className="font-medium">UPI</span>
          </div>

          <input
            placeholder="Enter UPI Id"
            className="w-full border rounded-md px-3 py-2 text-sm"
          />

          <p className="text-red-500 text-xs mt-1">
            Could not verify your UPI Id. Please try again.
          </p>

          <button className="w-full mt-3 bg-orange-500 text-white py-2 rounded-md text-sm">
            Verify
          </button>
        </div>

        {/* Wallet */}
        <PaymentOption icon="/wallet.png" label="Wallet" />

        {/* Card */}
        <PaymentOption icon="/card.png" label="Debit / Credit Card" />

        {/* Netbanking */}
        <PaymentOption icon="/bank.png" label="Net Banking" />

        <p className="text-center text-xs mt-6 text-gray-500">
          Powered by <span className="font-bold">SWIFT</span>PAY
        </p>
      </div>

      {/* Bottom Button */}
      <div className="w-[360px] mt-4">
        <button className="w-full bg-gray-500 text-white py-3 rounded-lg font-medium">
          PROCEED TO PAY
        </button>
      </div>
    </div>
  );
}

function PaymentOption({ icon, label }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-xl mb-3 bg-white cursor-pointer hover:bg-gray-50">
      <div className="flex items-center gap-3">
        <img src={icon} alt={label} className="w-7" />
        <span className="font-medium">{label}</span>
      </div>
      <span className="text-gray-400">⌄</span>
    </div>
  );
}
