// src/app/auth/ForgotPassword.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import toast from "react-hot-toast";

import Button from "@components/shared/Button";
import Input from "@components/shared/Input";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      // Replace with API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Password reset link has been sent.");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mb-8 text-center">

        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
          <Mail size={30} />
        </div>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Forgot Password
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Enter your registered email and we'll send you a password reset link.
        </p>

      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          type="submit"
          loading={loading}
          className="w-full"
        >
          Send Reset Link
        </Button>

      </form>

      <div className="mt-8 text-center">

        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
        >
          <ArrowLeft size={16} />
          Back to Login
        </Link>

      </div>
    </>
  );
};

export default ForgotPassword;