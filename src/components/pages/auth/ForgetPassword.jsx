import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRedirect = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du bouton "submit"

    if (!email) {
      setError('Email is required.');
    } else {
      setError('');
      navigate('/reset-password'); // Redirige si l'email est valide
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

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Forgot password?</h2>
          <p className="text-gray-600">No worries, we'll send you reset instructions.</p>
        </div>

        <form className="space-y-6" onSubmit={handleRedirect}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Met à jour l'état
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>} {/* Affiche une erreur si nécessaire */}
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="relative w-full group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl opacity-60 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-medium">Send Instructions</span>
              <ChevronRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
    