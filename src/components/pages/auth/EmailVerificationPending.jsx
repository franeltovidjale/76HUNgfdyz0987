// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Mail, RefreshCw } from 'lucide-react';
// import axiosClient from '../../../axios';




// const EmailVerificationPending = () => {
//   const [isResending, setIsResending] = useState(false);
//   const [message, setMessage] = useState(null);

//   const handleResendEmail = async () => {
//     setIsResending(true);
//     try {
//       const email = sessionStorage.getItem('registeredEmail'); // Email stocké lors de l'inscription
//       const response = await axiosClient.post('/resend-verification-email', { email });
      
//       setMessage({
//         type: 'success',
//         text: 'Email de vérification renvoyé avec succès.'
//       });
//     } catch (error) {
//       setMessage({
//         type: 'error',
//         text: error.response?.data?.message || 'Erreur lors du renvoi de l\'email.'
//       });
//     } finally {
//       setIsResending(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="min-h-screen flex flex-col lg:flex-row">
//         {/* Left side avec le même design que ConfirmationMail */}
//         <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-600 to-gray-800 relative p-12 overflow-hidden">
//           {/* <CheckeredBackground /> */}
//           <div className="w-full max-w-lg mx-auto flex flex-col justify-between relative z-10">
//             <div>
//               <h3 className='text-white mb-10'>Logo</h3>
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-4xl font-bold text-white mb-4"
//               >
//                 Vérification de votre compte
//               </motion.h1>
//               <p className="text-blue-50 text-lg">
//                 Vérifiez votre boîte mail pour activer votre compte
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="flex-1 flex items-center justify-center p-8">
//           <div className="w-full max-w-md">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="bg-white rounded-2xl shadow-xl p-8"
//             >
//               <div className="text-center">
//                 <Mail className="mx-auto h-16 w-16 text-blue-600" />
//                 <h2 className="mt-4 text-2xl font-bold text-gray-900">
//                   Vérifiez votre email
//                 </h2>
//                 <p className="mt-4 text-gray-600">
//                   Un email de confirmation a été envoyé à votre adresse email.
//                   Veuillez cliquer sur le lien dans l'email pour activer votre compte.
//                 </p>
//                 <p className="mt-2 text-sm text-red-600">
//                   N'oubliez pas de vérifier vos spams si vous ne trouvez pas l'email.
//                 </p>

//                 {/* Message de succès ou d'erreur */}
//                 {message && (
//                   <div className={`mt-4 p-3 rounded-lg ${
//                     message.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
//                   }`}>
//                     {message.text}
//                   </div>
//                 )}

//                 {/* Bouton de renvoi */}
//                 <motion.button
//                   whileHover={{ scale: 1.01 }}
//                   whileTap={{ scale: 0.99 }}
//                   onClick={handleResendEmail}
//                   disabled={isResending}
//                   className="mt-6 relative w-full group"
//                 >
//                   <div className="relative w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center">
//                     {isResending ? (
//                       <div className="flex items-center space-x-2">
//                         <RefreshCw className="animate-spin h-5 w-5 text-white" />
//                         <span className="text-white font-medium">Envoi en cours...</span>
//                       </div>
//                     ) : (
//                       <span className="text-white font-medium">Renvoyer l'email de vérification</span>
//                     )}
//                   </div>
//                 </motion.button>

//                 <Link
//                   to="/login"
//                   className="mt-4 inline-block text-sm text-blue-600 hover:text-blue-500"
//                 >
//                   Retour à la connexion
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmailVerificationPending;

// 2

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Mail, RefreshCw } from 'lucide-react';
// import axiosClient from '../../../axios';

// const EmailVerificationPending = () => {
//   const [isResending, setIsResending] = useState(false);
//   const [message, setMessage] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [email, setEmail] = useState('');

//   const handleResendEmail = async (e) => {
//     if (!showForm) {
//       setShowForm(true);
//       return;
//     }

//     e.preventDefault();
//     setIsResending(true);
//     try {
//       const response = await axiosClient.post('/resend-verification-email', { email });
      
//       setMessage({
//         type: 'success',
//         text: 'Email de vérification renvoyé avec succès.'
//       });
//       setShowForm(false);
//     } catch (error) {
//       setMessage({
//         type: 'error',
//         text: error.response?.data?.message || 'Erreur lors du renvoi de l\'email.'
//       });
//     } finally {
//       setIsResending(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="min-h-screen flex flex-col lg:flex-row">
//         {/* Left side avec le même design que ConfirmationMail */}
//         <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-600 to-gray-800 relative p-12 overflow-hidden">
//           <div className="w-full max-w-lg mx-auto flex flex-col justify-between relative z-10">
//             <div>
//               <h3 className='text-white mb-10'>Logo</h3>
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-4xl font-bold text-white mb-4"
//               >
//                 Vérification de votre compte
//               </motion.h1>
//               <p className="text-blue-50 text-lg">
//                 Vérifiez votre boîte mail pour activer votre compte
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="flex-1 flex items-center justify-center p-8">
//           <div className="w-full max-w-md">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="bg-white rounded-2xl shadow-xl p-8"
//             >
//               <div className="text-center">
//                 <Mail className="mx-auto h-16 w-16 text-blue-600" />
//                 <h2 className="mt-4 text-2xl font-bold text-gray-900">
//                   Vérifiez votre email
//                 </h2>
//                 <p className="mt-4 text-gray-600">
//                   Un email de confirmation a été envoyé à votre adresse email.
//                   Veuillez cliquer sur le lien dans l'email pour activer votre compte.
//                 </p>
//                 <p className="mt-2 text-sm text-red-600">
//                   N'oubliez pas de vérifier vos spams si vous ne trouvez pas l'email.
//                 </p>

//                 {message && (
//                   <div className={`mt-4 p-3 rounded-lg ${
//                     message.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
//                   }`}>
//                     {message.text}
//                   </div>
//                 )}

//                 {showForm && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     className="mt-4"
//                   >
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Entrez votre email"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </motion.div>
//                 )}

//                 <motion.button
//                   whileHover={{ scale: 1.01 }}
//                   whileTap={{ scale: 0.99 }}
//                   onClick={handleResendEmail}
//                   disabled={isResending}
//                   className="mt-6 relative w-full group"
//                 >
//                   <div className="relative w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center">
//                     {isResending ? (
//                       <div className="flex items-center space-x-2">
//                         <RefreshCw className="animate-spin h-5 w-5 text-white" />
//                         <span className="text-white font-medium">Envoi en cours...</span>
//                       </div>
//                     ) : (
//                       <span className="text-white font-medium">
//                         {showForm ? 'Soumettre' : 'Renvoyer l\'email de vérification'}
//                       </span>
//                     )}
//                   </div>
//                 </motion.button>

//                 <Link
//                   to="/login"
//                   className="mt-4 inline-block text-sm text-blue-600 hover:text-blue-500"
//                 >
//                   Retour à la connexion
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmailVerificationPending;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, RefreshCw } from 'lucide-react';
import {axiosClient} from '../../../axios';

const EmailVerificationPending = () => {
  const [isResending, setIsResending] = useState(false);
  const [message, setMessage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    let timeoutId;
    
    if (message?.type === 'success') {
      timeoutId = setTimeout(() => {
        setMessage(null);
      }, 6000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [message]);

  const handleResendEmail = async (e) => {
    if (!showForm) {
      setShowForm(true);
      return;
    }

    e.preventDefault();
    setIsResending(true);
    try {
      const response = await axiosClient.post('/resend-verification-email', { email });
      
      setMessage({
        type: 'success',
        text: 'Email de vérification renvoyé avec succès.'
      });
      setShowForm(false);
      setEmail('');
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Erreur lors du renvoi de l\'email.'
      });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left side */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-600 to-gray-800 relative p-12 overflow-hidden">
          <div className="w-full max-w-lg mx-auto flex flex-col justify-between relative z-10">
            <div>
              <h3 className='text-white mb-10'>Logo</h3>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-4"
              >
                Vérification de votre compte
              </motion.h1>
              <p className="text-blue-50 text-lg">
                Vérifiez votre boîte mail pour activer votre compte
              </p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="text-center">
                <Mail className="mx-auto h-16 w-16 text-blue-600" />
                <h2 className="mt-4 text-2xl font-bold text-gray-900">
                  Vérifiez votre email
                </h2>
                <p className="mt-4 text-gray-600">
                  Un email de confirmation a été envoyé à votre adresse email.
                  Veuillez cliquer sur le lien dans l'email pour activer votre compte.
                </p>
                <p className="mt-2 text-sm text-blue-600">
                  N'oubliez pas de vérifier vos spams si vous ne trouvez pas l'email.
                </p>

                <AnimatePresence>
                  {message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`mt-4 p-3 rounded-lg ${
                        message.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                      }`}
                    >
                      {message.text}
                    </motion.div>
                  )}
                </AnimatePresence>

                {showForm && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Entrez votre email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={handleResendEmail}
                  disabled={isResending}
                  className="mt-6 relative w-full group"
                >
                  <div className="relative w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center">
                    {isResending ? (
                      <div className="flex items-center space-x-2">
                        <RefreshCw className="animate-spin h-5 w-5 text-white" />
                        <span className="text-white font-medium">Envoi en cours...</span>
                      </div>
                    ) : (
                      <span className="text-white font-medium">
                        {showForm ? 'Soumettre' : 'Renvoyer l\'email de vérification'}
                      </span>
                    )}
                  </div>
                </motion.button>

                <Link
                  to="/login"
                  className="mt-4 inline-block text-sm text-blue-600 hover:text-blue-500"
                >
                  Retour à la connexion
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPending;