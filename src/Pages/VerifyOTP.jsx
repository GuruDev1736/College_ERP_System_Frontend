import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeftIcon, ShieldCheckIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import ThreeBackground from '../ThreeBackground';

function VerifyOTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();

    // Timer countdown
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (index, value) => {
    if (value.length > 1) return; // Prevent multiple characters

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    
    if (otpCode.length !== 6) {
      alert('Please enter the complete 6-digit code');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to reset password page
      navigate('/reset-password', { state: { email, otpCode } });
    }, 2000);
  };

  const handleResendOTP = () => {
    setTimer(60);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
    
    // Simulate API call
    alert('New verification code sent to your email');
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
                  <ShieldCheckIcon className="w-8 h-8 text-sky-400" />
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-lg">
              Verify Email
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Enter the 6-digit code sent to
            </p>
            <p className="text-sm text-sky-400 font-medium">{email}</p>
          </div>

          {/* Form */}
          <div className="relative group animate-fade-in-up">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white/10 backdrop-blur-xl py-6 px-6 shadow-2xl rounded-3xl sm:px-8 border border-white/20 hover:border-white/30 transition-all duration-300">
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* OTP Input */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-4 text-center">
                    Verification Code
                  </label>
                  <div className="flex justify-center space-x-3">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-12 h-12 text-center text-xl font-bold bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200 hover:bg-white/20"
                        placeholder="0"
                      />
                    ))}
                  </div>
                </div>

                {/* Timer and Resend */}
                <div className="text-center">
                  {!canResend ? (
                    <p className="text-sm text-slate-300">
                      Resend code in <span className="text-sky-400 font-medium">{timer}s</span>
                    </p>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      className="text-sm text-sky-400 hover:text-sky-300 transition duration-200 underline"
                    >
                      Resend verification code
                    </button>
                  )}
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
                        Verifying...
                      </div>
                    ) : (
                      <div className="flex items-center relative z-10">
                        <ShieldCheckIcon className="w-5 h-5 mr-2" />
                        Verify Code
                      </div>
                    )}
                  </button>
                </div>
              </form>

              {/* Back Button */}
              <div className="mt-5 text-center">
                <button
                  onClick={() => navigate('/forgot-password')}
                  className="inline-flex items-center text-sm text-sky-400 hover:text-sky-300 transition duration-200"
                >
                  <ArrowLeftIcon className="w-4 h-4 mr-1" />
                  Back to Email
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center animate-fade-in-up">
            <p className="text-xs text-slate-400">
              Didn't receive the code? Check your spam folder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyOTP;
