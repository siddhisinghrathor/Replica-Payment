import React from "react";
import "./App.css"; // keep your existing css or update it below

export default function App() {
  return (
    <div className="min-h-screen bg-[#2e2f36] flex flex-col items-center pt-10 pb-20 px-4">
      {/* Top Paying to */}
      <div className="text-center text-white mb-6">
        <p className="text-sm opacity-80">Paying to</p>
        <p className="text-xl font-semibold text-orange-500">homefood</p>
      </div>

      {/* Main white card - Order details */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[380px] p-5 z-10">
        <h2 className="font-bold text-xl mb-1">Hi Prasad Naik,</h2>
        <p className="text-gray-500 text-sm mb-4">9999999999</p>

        <div className="space-y-4 text-sm">
          {/* Order 1 */}
          <div>
            <div className="flex justify-between items-center text-gray-600 mb-1">
              <p>Order Order12312 orderNumber</p>
              <span className="text-blue-600 cursor-pointer hover:underline">View order</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Order Value</span>
              <span>₹5,00,000.00</span>
            </div>
          </div>

          {/* Order 2 (matching your screenshot having two) */}
          <div>
            <div className="flex justify-between items-center text-gray-600 mb-1">
              <p>Order Order1231312 orderNumber</p>
              <span className="text-blue-600 cursor-pointer hover:underline">View order</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Order Value</span>
              <span>₹5,000.00</span>
            </div>
          </div>

          <hr className="my-3 border-gray-200" />

          <div className="flex justify-between text-base">
            <span className="font-medium">Discount</span>
            <span className="text-green-600">₹2,000.00</span>
          </div>

          <div className="inline-block bg-orange-50 text-orange-700 text-xs font-medium px-3 py-1 rounded-full mt-1">
            <span role="img" aria-label="rocket">🚀</span> Total saving of 0.4% on this order
          </div>

          <hr className="my-4 border-gray-200" />

          <div className="flex justify-between text-lg font-bold">
            <span>Payable Amount</span>
            <span>₹4,98,000.00</span>
          </div>
        </div>
      </div>

      {/* Payment methods section - light bg, overlaps upward a bit */}
      <div className="bg-[#fff8ed] w-full max-w-[380px] rounded-2xl p-5 -mt-10 z-0 shadow-md">
        <p className="font-semibold text-gray-800 mb-4">Select Payment Method</p>

        <div className="space-y-3">
          <PaymentOption 
            icon="https://img.icons8.com/color/48/000000/google-pay.png" 
            label="UPI" 
            isActive={true} // can make orange border if selected
          />

          <PaymentOption 
            icon="https://img.icons8.com/color/48/000000/wallet.png" 
            label="Wallet" 
          />

          <PaymentOption 
            icon="https://img.icons8.com/color/48/000000/credit-card.png" 
            label="Debit / Credit Card" 
          />

          <PaymentOption 
            icon="https://img.icons8.com/color/48/000000/bank-building.png" 
            label="Net Banking" 
          />
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          Powered by <span className="font-bold text-gray-700">SWIFT</span>PAY
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-[380px] mt-8">
        <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3.5 rounded-xl font-semibold text-base shadow-md transition">
          PROCEED TO PAY
        </button>
      </div>
    </div>
  );
}

function PaymentOption({ icon, label, isActive = false }) {
  return (
    <div 
      className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition
        ${isActive 
          ? "border-orange-500 bg-orange-50/30" 
          : "border-gray-200 hover:border-gray-300 bg-white"}`}
    >
      <div className="flex items-center gap-3">
        <img src={icon} alt={label} className="w-8 h-8" />
        <span className="font-medium text-gray-800">{label}</span>
      </div>
      <span className="text-gray-400 text-xl">⌄</span>
    </div>
  );
}