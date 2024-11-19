import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmailVerification = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = Array(6).fill(0).map(() => useRef(null));

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if current input is filled
    if (value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newCode = [...code];
    
    for (let i = 0; i < pastedData.length; i++) {
      if (/[0-9]/.test(pastedData[i])) {
        newCode[i] = pastedData[i];
      }
    }
    
    setCode(newCode);
    if (newCode[5]) {
      inputRefs[5].current.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Back Button */}
        <Link 
          to="/login" 
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to login
        </Link>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Check your email</h2>
          <p className="text-gray-600 mb-8">
            We sent a verification code to<br />
            <span className="font-medium text-gray-900">example@email.com</span>
          </p>
        </div>

        <form className="space-y-6">
          {/* Verification Code Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 text-center">
              Enter verification code
            </label>
            <div className="flex gap-2 justify-center">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="relative w-full group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl opacity-60 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-medium">
                Verify Email
              </span>
              <ChevronRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-500">
              Didn't receive the code?<br />
              Check your spam folder or
            </p>
            <button 
              type="button"
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Click to resend
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;