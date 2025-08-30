import React, { useState } from "react";
import Squares from "../components/ui/Squares";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleLogin = () => {
    // login logic
  };
  const handleForgotPassword = () => {
    // forgot password logic
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Background (interactive squares) */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.3}
          squareSize={60}
          direction="diagonal"
          borderColor="#121CAB"
          hoverFillColor="#352650"
        />
      </div>

      {/* Login Box */}
      <div className="relative z-10 h-full pointer-events-none">
        <div
          className="absolute top-1/2 right-[50px] max-w-[700px] w-full p-12 min-h-[550px] 
                     bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl shadow-2xl rounded-2xl 
                     border border-white/20 dark:border-gray-700/40 pointer-events-auto transition-all"
          style={{ transform: "translateY(-50%)" }}
        >
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 text-center mb-10">
            Login
          </h1>

          {/* Username Input */}
          <div className="mb-6">
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full p-4 rounded-xl border border-gray-300/50 dark:border-gray-600
                         bg-white/80 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                         shadow-md transition"
            />
          </div>

          {/* Password Input with Eye Icon */}
          <div className="relative mb-6">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-4 rounded-xl border border-gray-300/50 dark:border-gray-600
                         bg-white/80 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                         shadow-md transition"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-6 w-6" />
              ) : (
                <EyeIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              onClick={handleLogin}
              className="w-full py-4 px-6 bg-indigo-600 dark:bg-indigo-500
                         text-white text-lg font-semibold rounded-xl shadow-lg
                         hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
            >
              Login
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-center">
            <button
              onClick={handleForgotPassword}
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium transition"
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
