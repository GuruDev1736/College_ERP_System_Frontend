import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, EnvelopeIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import ThreeBackground from '../ThreeBackground';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsEmailSent(true);
      // Navigate to OTP verification page
      navigate('/verify-otp', { state: { email } });
    }, 2000);
  };

  return (
    <div className="h-screen w-screen fixed inset-0 overflow-hidden">
      <ThreeBackground />
      
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center mb-4">
              <div className="relative group animate-float">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-sky-500/20">
                  <AcademicCapIcon className="w-8 h-8 text-sky-400" />
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-lg">
              Reset Password
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Enter your email to receive a verification code
            </p>
          </div>

          {/* Form */}
          <div className="relative group animate-fade-in-up">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white/10 backdrop-blur-xl py-6 px-6 shadow-2xl rounded-3xl sm:px-8 border border-white/20 hover:border-white/30 transition-all duration-300">
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none block w-full px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl shadow-lg placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200 hover:bg-white/20"
                      placeholder="Enter your registered email"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-slate-400" />
                    </div>
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
                        Sending Code...
                      </div>
                    ) : (
                      <div className="flex items-center relative z-10">
                        <EnvelopeIcon className="w-5 h-5 mr-2" />
                        Send Verification Code
                      </div>
                    )}
                  </button>
                </div>
              </form>

              {/* Back to Login */}
              <div className="mt-5 text-center">
                <button
                  onClick={() => navigate('/')}
                  className="inline-flex items-center text-sm text-sky-400 hover:text-sky-300 transition duration-200"
                >
                  <ArrowLeftIcon className="w-4 h-4 mr-1" />
                  Back to Login
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center animate-fade-in-up">
            <p className="text-xs text-slate-400">
              We'll send a verification code to your email
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
