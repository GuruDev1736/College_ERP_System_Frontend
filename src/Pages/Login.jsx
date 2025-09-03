import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon, AcademicCapIcon, SparklesIcon } from "@heroicons/react/24/outline";
import ThreeBackground from "../ThreeBackground";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="h-screen w-screen fixed inset-0 overflow-hidden">
      {/* Three.js Background */}
      <ThreeBackground />
      
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-6">
          {/* Logo and Header */}
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center mb-4">
              <div className="relative group animate-float">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-sky-500/20">
                  <AcademicCapIcon className="w-8 h-8 text-sky-400" />
                  <SparklesIcon className="w-3 h-3 text-sky-300 absolute -top-1 -right-1" />
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-lg">
              College ERP System
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Sign in to access your dashboard
            </p>
          </div>

          {/* Login Form */}
          <div className="relative group animate-fade-in-up">
            {/* Glassmorphism effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white/10 backdrop-blur-xl py-6 px-6 shadow-2xl rounded-3xl sm:px-8 border border-white/20 hover:border-white/30 transition-all duration-300">
              <form className="space-y-5" onSubmit={handleLogin}>
                {/* Username Input */}
                <div>
                  <label htmlFor="username" className="block text-sm font-semibold text-white mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      value={formData.username}
                      onChange={handleInputChange}
                      className="appearance-none block w-full px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl shadow-lg placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200 hover:bg-white/20"
                      placeholder="Enter your username"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-white mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="appearance-none block w-full px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl shadow-lg placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200 pr-12 hover:bg-white/20"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember me and Forgot password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-sky-500 focus:ring-sky-400 border-white/30 rounded transition duration-200 bg-white/10"
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-slate-300">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="font-medium text-sky-400 hover:text-sky-300 transition duration-200"
                    >
                      Forgot password?
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition duration-300 transform hover:scale-105 shadow-2xl hover:shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                  >
                    <div className="absolute inset-0 w-3 bg-white/20 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    {isLoading ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing in...
                      </div>
                    ) : (
                      <div className="flex items-center relative z-10">
                        <SparklesIcon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                        Sign in to Dashboard
                      </div>
                    )}
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="mt-5">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-3 py-1 bg-slate-800/50 text-slate-300 font-medium rounded-lg backdrop-blur-sm border border-white/10">Quick Access</span>
                  </div>
                </div>
              </div>

              {/* Quick Access Buttons */}
              <div className="mt-5 grid grid-cols-1 gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/dashboard")}
                  className="w-full inline-flex justify-center py-2 px-4 border border-white/20 rounded-lg shadow-lg bg-white/5 backdrop-blur-sm text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition duration-200 hover:border-white/30"
                >
                  <span>Demo as Student</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center animate-fade-in-up">
            <p className="text-xs text-slate-400">
              © 2025 College ERP System. All rights reserved.
            </p>
            <div className="mt-2 flex justify-center space-x-4 text-xs">
              <a href="#" className="text-sky-400 hover:text-sky-300 transition duration-200 hover:underline">Privacy Policy</a>
              <a href="#" className="text-sky-400 hover:text-sky-300 transition duration-200 hover:underline">Terms of Service</a>
              <a href="#" className="text-sky-400 hover:text-sky-300 transition duration-200 hover:underline">Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
