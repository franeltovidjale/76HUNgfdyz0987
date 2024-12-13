// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, ChevronRight, ArrowLeft } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';

// const ForgetPassword = () => {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleRedirect = (e) => {
//     e.preventDefault(); // Empêche le comportement par défaut du bouton "submit"

//     if (!email) {
//       setError('Email is required.');
//     } else {
//       setError('');
//       navigate('/reset-password'); // Redirige si l'email est valide
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="max-w-md w-full space-y-8">
//         {/* Back Button */}
//         <Link
//           to="/login"
//           className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to login
//         </Link>

//         <div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">Forgot password?</h2>
//           <p className="text-gray-600">No worries, we'll send you reset instructions.</p>
//         </div>

//         <form className="space-y-6" onSubmit={handleRedirect}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <div className="relative">
//               <Mail
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//               <input
//                 type="email"
//                 className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} // Met à jour l'état
//               />
//             </div>
//             {error && <p className="text-red-500 text-sm mt-1">{error}</p>} {/* Affiche une erreur si nécessaire */}
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.01 }}
//             whileTap={{ scale: 0.99 }}
//             type="submit"
//             className="relative w-full group"
//           >
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl opacity-60 group-hover:opacity-100 transition duration-200"></div>
//             <div className="relative w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center">
//               <span className="text-white font-medium">Send Instructions</span>
//               <ChevronRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
//             </div>
//           </motion.button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;
    
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronRight, ArrowLeft, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import axiosClient from '../../../axios';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Validation de l'email
    if (!email) {
      setError('Veuillez saisir votre adresse email');
      return;
    }

    if (!validateEmail(email)) {
      setError('Veuillez saisir une adresse email valide');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axiosClient.post('/forgot-password', { email });
      setSuccessMessage('Les instructions de réinitialisation ont été envoyées à votre adresse email');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError('Une erreur est survenue. Veuillez réessayer plus tard.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Bouton retour */}
        <Link
          to="/login"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à la connexion
        </Link>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Mot de passe oublié ?
          </h2>
          <p className="text-gray-600">
            Pas d'inquiétude, nous allons vous envoyer les instructions de réinitialisation.
          </p>
        </div>

        {/* Message de succès */}
        {successMessage && (
          <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">{successMessage}</span>
            </div>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adresse email
            </label>
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                className={`w-full pl-12 pr-4 py-3 bg-white text-gray-900 rounded-xl border 
                  ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 
                  'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20'}`}
                placeholder="exemple@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                disabled={isLoading}
              />
            </div>
            {error && (
              <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isLoading}
            className="relative w-full group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center">
              {isLoading ? (
                <div className="flex items-center space-x-3">
                  <Loader className="w-5 h-5 text-white animate-spin" />
                  <span className="text-white font-medium">Envoi en cours...</span>
                </div>
              ) : (
                <>
                  <span className="text-white font-medium">Envoyer les instructions</span>
                  <ChevronRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </div>
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;