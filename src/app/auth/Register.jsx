// src/app/auth/Register.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

import Button from "@components/shared/Button";
import Input from "@components/shared/Input";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      // Replace with Register API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Account created successfully!");

      navigate("/login");
    } catch (error) {
      toast.error("Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}

      <div className="mb-8 text-center">

        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
          <UserPlus size={30} />
        </div>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Create Account
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Join HackSprint AI Coach and start building smarter projects.
        </p>

      </div>

      {/* Form */}

      <form onSubmit={handleSubmit} className="space-y-5">

        <Input
          label="Full Name"
          name="name"
          placeholder="John Doe"
          value={form.name}
          onChange={handleChange}
        />

        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={handleChange}
        />

        {/* Password */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <div className="relative">

            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              value={form.password}
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

        </div>

        {/* Confirm Password */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Confirm Password
          </label>

          <div className="relative">

            <Input
              name="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showConfirm ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

        </div>

        {/* Terms */}

        <label className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">

          <input
            type="checkbox"
            required
            className="mt-1 rounded border-slate-300"
          />

          <span>
            I agree to the{" "}
            <Link
              to="#"
              className="font-medium text-blue-600"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="#"
              className="font-medium text-blue-600"
            >
              Privacy Policy
            </Link>.
          </span>

        </label>

        <Button
          type="submit"
          loading={loading}
          className="w-full"
        >
          Create Account
        </Button>

      </form>

      {/* Footer */}

      <div className="mt-8 text-center text-sm">

        <span className="text-slate-500">
          Already have an account?
        </span>

        <Link
          to="/login"
          className="ml-2 font-semibold text-blue-600 hover:text-blue-700"
        >
          Login
        </Link>

      </div>
    </>
  );
};

export default Register;