import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon, KeyIcon, CheckCircleIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import ThreeBackground from '../ThreeBackground';

function ResetPassword() {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState({
    new: false,
    confirm: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    hasLength: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpecial: false
  });
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';
  const otpCode = location.state?.otpCode || '';

  const checkPasswordStrength = (password) => {
    setPasswordStrength({
      hasLength: password.length >= 8,
      hasUpper: /[A-Z]/.test(password),
      hasLower: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'newPassword') {
      checkPasswordStrength(value);
    }
  };

  const isPasswordValid = () => {
    return Object.values(passwordStrength).every(Boolean);
  };

  const doPasswordsMatch = () => {
    return formData.newPassword === formData.confirmPassword && formData.confirmPassword !== '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isPasswordValid()) {
      alert('Please meet all password requirements');
      return;
    }

    if (!doPasswordsMatch()) {
      alert('Passwords do not match');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Password reset successfully!');
      navigate('/');
    }, 2000);
  };

  const StrengthIndicator = ({ met, text }) => (
    <div className={`flex items-center space-x-2 text-xs ${met ? 'text-green-400' : 'text-slate-400'}`}>
      <CheckCircleIcon className={`w-4 h-4 ${met ? 'text-green-400' : 'text-slate-500'}`} />
      <span>{text}</span>
    </div>
  );

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
                  <KeyIcon className="w-8 h-8 text-sky-400" />
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-lg">
              Create New Password
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Set a strong password for your account
            </p>
          </div>

          {/* Form */}
          <div className="relative group animate-fade-in-up">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white/10 backdrop-blur-xl py-6 px-6 shadow-2xl rounded-3xl sm:px-8 border border-white/20 hover:border-white/30 transition-all duration-300">
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* New Password Input */}
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-semibold text-white mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      id="newPassword"
                      name="newPassword"
                      type={showPassword.new ? "text" : "password"}
                      required
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      className="appearance-none block w-full px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl shadow-lg placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200 pr-12 hover:bg-white/20"
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(prev => ({ ...prev, new: !prev.new }))}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword.new ? (
                        <EyeSlashIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  
                  {/* Password Strength Indicators */}
                  {formData.newPassword && (
                    <div className="mt-3 space-y-1 p-3 bg-slate-800/30 rounded-lg border border-white/10">
                      <StrengthIndicator met={passwordStrength.hasLength} text="At least 8 characters" />
                      <StrengthIndicator met={passwordStrength.hasUpper} text="One uppercase letter" />
                      <StrengthIndicator met={passwordStrength.hasLower} text="One lowercase letter" />
                      <StrengthIndicator met={passwordStrength.hasNumber} text="One number" />
                      <StrengthIndicator met={passwordStrength.hasSpecial} text="One special character" />
                    </div>
                  )}
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-white mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword.confirm ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="appearance-none block w-full px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl shadow-lg placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200 pr-12 hover:bg-white/20"
                      placeholder="Confirm new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(prev => ({ ...prev, confirm: !prev.confirm }))}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword.confirm ? (
                        <EyeSlashIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  
                  {/* Password Match Indicator */}
                  {formData.confirmPassword && (
                    <div className="mt-2">
                      <div className={`flex items-center space-x-2 text-xs ${doPasswordsMatch() ? 'text-green-400' : 'text-red-400'}`}>
                        <CheckCircleIcon className={`w-4 h-4 ${doPasswordsMatch() ? 'text-green-400' : 'text-red-400'}`} />
                        <span>{doPasswordsMatch() ? 'Passwords match' : 'Passwords do not match'}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading || !isPasswordValid() || !doPasswordsMatch()}
                    className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition duration-300 transform hover:scale-105 shadow-2xl hover:shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                  >
                    <div className="absolute inset-0 w-3 bg-white/20 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    {isLoading ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Updating Password...
                      </div>
                    ) : (
                      <div className="flex items-center relative z-10">
                        <KeyIcon className="w-5 h-5 mr-2" />
                        Reset Password
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center animate-fade-in-up">
            <p className="text-xs text-slate-400">
              Your password will be updated securely
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
