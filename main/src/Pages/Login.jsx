import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Squares from "../components/ui/Squares";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleLogin = () => {
    // login logic
    navigate("/dashboard"); // Redirect to the dashboard page
  };
  const handleForgotPassword = () => {
    // forgot password logic
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      {/* Background (interactive squares) */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.2}
          squareSize={40}
          direction="diagonal"
          borderColor="#ffffff22"
          hoverFillColor="#ffffff33"
        />
      </div>

      {/* Login Box */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div
          className="max-w-[400px] w-full p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700"
          style={{ transform: "translateX(400px)" }}
        >
          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-6">
            Welcome User
          </h1>

          {/* Username Input */}
          <div className="mb-4">
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600
                         bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                         transition"
            />
          </div>

          {/* Password Input with Eye Icon */}
          <div className="relative mb-4">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600
                         bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                         transition"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              onClick={handleLogin}
              className="w-full py-3 bg-indigo-500 text-white text-sm font-medium rounded-md shadow-md
                         hover:bg-indigo-600 transition"
            >
              Login
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-center">
            <button
              onClick={handleForgotPassword}
              className="text-indigo-500 hover:underline text-sm transition"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
