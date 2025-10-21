// src/pages/OTP.tsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function OTP() {
  const location = useLocation();
  const navigate = useNavigate();
  const mobile = (location.state as any)?.mobile ?? "+91XXXXXXXXXX";
  const [otp, setOtp] = useState("");

  const submitOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      alert("Enter 6-digit OTP");
      return;
    }
    // In real app: verify with API, then set user state & redirect
    alert(`OTP ${otp} verified for ${mobile} (mock)`);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
        <button onClick={() => navigate(-1)} className="text-gray-500 mb-3">← Back</button>

        <div className="text-center mb-6">
          <h2 className="text-lg font-bold">Enter OTP</h2>
          <p className="text-sm text-gray-500">We sent an OTP to <span className="font-medium">{mobile}</span></p>
        </div>

        <form onSubmit={submitOtp} className="space-y-4">
          <input
            inputMode="numeric"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter 6-digit OTP"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-center text-lg outline-none"
          />
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">Verify</button>
        </form>

        <div className="text-xs text-center text-gray-400 mt-3">
          Didn't receive OTP? <button className="text-green-600" onClick={() => alert("Resend mock OTP")}>Resend</button>
        </div>
      </div>
    </div>
  );
}
