// src/app/auth/Login.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import toast from "react-hot-toast";

import Button from "@components/shared/Button";
import Input from "@components/shared/Input";
import useAuth from "@hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  navigate("/dashboard");
};

  return (
    <>
      {/* Header */}

      <div className="mb-8 text-center">

        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
          <LogIn size={30} />
        </div>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Welcome Back
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Login to continue building your hackathon project.
        </p>

      </div>

      {/* Form */}

      <form onSubmit={handleSubmit} className="space-y-6">

        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={handleChange}
        />

        <div>

          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <div className="relative">

            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
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

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2 text-sm">

            <input
              type="checkbox"
              className="rounded border-slate-300"
            />

            Remember Me

          </label>

          <Link
            to="/forgot-password"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Forgot Password?
          </Link>

        </div>

        <Button
          type="submit"
          loading={loading}
          className="w-full"
        >
          Login
        </Button>

      </form>

      {/* Footer */}

      <div className="mt-8 text-center text-sm">

        <span className="text-slate-500">
          Don't have an account?
        </span>

        <Link
          to="/register"
          className="ml-2 font-semibold text-blue-600 hover:text-blue-700"
        >
          Create Account
        </Link>

      </div>
    </>
  );
};

export default Login;