// src/pages/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(mobile)) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }
    // normally: call API to send OTP. We'll navigate to OTP page with state:
    navigate("/otp", { state: { mobile: `+91${mobile}` } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
        <button onClick={() => window.history.back()} className="text-gray-500 mb-3">← Back</button>

        <div className="flex flex-col items-center">
          <img src="/blinkit-logo-hd.png" alt="Blinkit" className="h-16 mb-4" />
          <h1 className="text-xl font-bold text-center">India's last minute app</h1>
          <p className="text-sm text-gray-500 text-center mb-6">Log in or Sign up</p>
        </div>

        <form onSubmit={handleContinue} className="space-y-4">
          <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2">
            <span className="text-gray-600">+91</span>
            <input
              inputMode="numeric"
              pattern="\d*"
              maxLength={10}
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
              placeholder="Enter mobile number"
              className="flex-1 ml-2 outline-none"
              required
            />
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">Continue</button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          By continuing, you agree to our <span className="underline">Terms of service</span> & <span className="underline">Privacy policy</span>
        </p>
      </div>
    </div>
  );
}
