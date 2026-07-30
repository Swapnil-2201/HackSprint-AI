// src/app/auth/VerifyOTP.jsx

import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";

import Button from "@components/shared/Button";

const VerifyOTP = () => {
  const navigate = useNavigate();

  const OTP_LENGTH = 6;

  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(45);

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData.getData("text").slice(0, OTP_LENGTH);

    if (!/^\d+$/.test(pasted)) return;

    const values = pasted.split("");

    const newOtp = [...otp];

    values.forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);

    inputRefs.current[values.length - 1]?.focus();
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    const code = otp.join("");

    if (code.length !== OTP_LENGTH) {
      toast.error("Please enter the complete OTP.");
      return;
    }

    try {
      setLoading(true);

      // Replace with Verify OTP API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("OTP Verified Successfully!");

      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = () => {
    if (timer !== 0) return;

    setTimer(45);
    toast.success("OTP Sent Again.");
  };

  return (
    <>
      {/* Header */}

      <div className="mb-8 text-center">

        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
          <ShieldCheck size={32} />
        </div>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Verify OTP
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Enter the 6-digit code sent to your email.
        </p>

      </div>

      {/* Email */}

      <div className="mb-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-700 dark:bg-slate-800">

        <div className="flex items-center gap-3">

          <Mail className="text-blue-600" size={20} />

          <span className="text-sm font-medium">
            demo@gmail.com
          </span>

        </div>

        <Link
          to="/register"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Change
        </Link>

      </div>

      {/* OTP */}

      <form onSubmit={handleVerify}>

        <div className="mb-8 flex justify-between gap-3">

          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              value={digit}
              maxLength={1}
              onPaste={handlePaste}
              onChange={(e) =>
                handleChange(e.target.value, index)
              }
              onKeyDown={(e) =>
                handleKeyDown(e, index)
              }
              className="h-16 w-16 rounded-xl border border-slate-300 text-center text-2xl font-bold outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          ))}

        </div>

        {/* Resend */}

        <div className="mb-8 text-center text-sm">

          {timer > 0 ? (
            <p className="text-slate-500">
              Didn't receive the code?
              <span className="ml-2 font-semibold text-blue-600">
                00:{String(timer).padStart(2, "0")}
              </span>
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Resend OTP
            </button>
          )}

        </div>

        <Button
          type="submit"
          loading={loading}
          className="w-full"
        >
          Verify & Continue
        </Button>

      </form>

      {/* Footer */}

      <div className="mt-8 text-center">

        <Link
          to="/login"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          ← Back to Login
        </Link>

      </div>
    </>
  );
};

export default VerifyOTP;