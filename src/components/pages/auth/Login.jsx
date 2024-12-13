

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//  Eye, EyeOff, Mail, Lock,
//  ChevronRight
// } from 'lucide-react';
// import { useAuth } from '../../context/AuthContext';
// import axiosClient from '../../../axios';



// const GoogleIcon = () => (
//  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
//    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//  </svg>
// );

// const CheckeredBackground = () => (
//  <svg width="100%" height="100%" className="absolute inset-0 opacity-10">
//    <defs>
//      <pattern id="checkerboard" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
//        <rect x="0" y="0" width="20" height="20" fill="white" />
//        <rect x="20" y="0" width="20" height="20" fill="transparent" />
//        <rect x="0" y="20" width="20" height="20" fill="transparent" />
//        <rect x="20" y="20" width="20" height="20" fill="white" />
//      </pattern>
//    </defs>
//    <rect width="100%" height="100%" fill="url(#checkerboard)" />
//  </svg>
// );

// const Login = () => {

//   const [errors, setErrors] = useState({
//     email: '',
//     password: '',
//     credentials: '',
//     general: ''
//   });
// const [successMessage, setSuccessMessage] = useState('');
//  const [showPassword, setShowPassword] = useState(false);
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [isLoading, setIsLoading] = useState(false);
//  const [rememberMe, setRememberMe] = useState(false);
 
//  const { login } = useAuth();
//  const navigate = useNavigate();

// //  const handleSubmit = async (e) => {
// //   e.preventDefault();
// //   setIsLoading(true);
// //   setErrors({ email: '', password: '', credentials: '', general: '' });

// //   try {
// //     // Utiliser la méthode login du contexte au lieu d'un appel direct à axiosClient
// //     await login({
// //       email,
// //       password,
// //       remember: rememberMe
// //     });
// //     // La redirection est déjà gérée dans la méthode login du contexte
// //   } catch (error) {
// //     console.log('Error response:', error.response?.data);
// //     if (error.response) {
// //       switch (error.response.status) {
// //         case 422:
// //           const validationErrors = error.response.data.errors;
// //           setErrors(prev => ({
// //             ...prev,
// //             email: validationErrors.email ? validationErrors.email[0] : '',
// //             password: validationErrors.password ? validationErrors.password[0] : ''
// //           }));
// //           break;
// //         case 401:
// //           setErrors(prev => ({
// //             ...prev,
// //             credentials: error.response.data.errors?.credentials?.[0] || 'Identifiants incorrects'
// //           }));
// //           break;
// //         default:
// //           setErrors(prev => ({
// //             ...prev,
// //             general: 'Une erreur est survenue'
// //           }));
// //       }
// //     }
// //   } finally {
// //     setIsLoading(false);
// //   }
// //  };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setIsLoading(true);
//   setErrors({ email: '', password: '', credentials: '', general: '' });

//   try {
//     await login({
//       email,
//       password,
//       remember: rememberMe
//     });
//   } catch (error) {
//     console.log('Error response:', error.response?.data);
//     if (error.response) {
//       switch (error.response.status) {
//         case 422:
//           const validationErrors = error.response.data.errors;
//           setErrors(prev => ({
//             ...prev,
//             email: validationErrors.email ? validationErrors.email[0] : '',
//             password: validationErrors.password ? validationErrors.password[0] : ''
//           }));
//           break;
//         case 401:
//           // Vérifier si c'est une erreur d'email non vérifié
//           if (error.response.data.email_verified === false) {
//             setErrors(prev => ({
//               ...prev,
//               credentials: 'Veuillez vérifier votre email avant de vous connecter.',
//               email_unverified: email
//             }));
            
//             // Afficher le bouton de renvoi d'email
//             return;
//           } else {
//             setErrors(prev => ({
//               ...prev,
//               credentials: error.response.data.errors?.credentials?.[0] || 'Identifiants incorrects'
//             }));
//           }
//           break;
//         default:
//           setErrors(prev => ({
//             ...prev,
//             general: 'Une erreur est survenue'
//           }));
//       }
//     }
//   } finally {
//     setIsLoading(false);
//   }
// };

// const handleResendVerification = async () => {
//   try {
//     await axiosClient.post('/resend-verification-email', { email: errors.email_unverified });

    
//     console.log('envoyé')
//     setSuccessMessage('Email de vérification renvoyé avec succès');
//     setTimeout(() => setSuccessMessage(''), 5000); // Le message disparaît après 5 secondes
//   } catch (error) {
//     setErrors(prev => ({
//       ...prev,
//       general: "Erreur lors du renvoi de l\'email de vérification"
//     }));
//   }
// };

//  const handleForgetPassword = () => {
//    navigate('/forget-password');
//  };

//  const handleEmailChange = (e) => {
//   setEmail(e.target.value);
//   setErrors(prev => ({ ...prev, email: '', credentials: '', general: '' }));
// };

// const handlePasswordChange = (e) => {
//   setPassword(e.target.value);
//   setErrors(prev => ({ ...prev, password: '', credentials: '', general: '' }));
// };

//  return (
//    <div className="min-h-screen bg-gray-50">
//      <div className="min-h-screen flex flex-col lg:flex-row">
//        {/* Left side: Statistics with Checkered Background */}
//        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-600 to-gray-800 relative p-12 overflow-hidden">
//          <CheckeredBackground />
//          <div className="w-full max-w-lg mx-auto flex flex-col justify-between relative z-10">
//            {/* Logo and Title */}
//            <div>
//              <h3 className="text-white mb-10">Logo</h3>
//              <motion.h1
//                initial={{ opacity: 0, y: 20 }}
//                animate={{ opacity: 1, y: 0 }}
//                className="text-4xl font-bold text-white mb-4"
//              >
//                Find Your Next Great Opportunity
//              </motion.h1>
//              <p className="text-blue-50 text-lg">
//                Connect with top companies and find the job that matches your expertise
//              </p>
//            </div>

//            {/* Statistics */}
//            <div className="grid grid-cols-2 gap-6">
//              {[
//                { value: "175,324", label: "Live Jobs" },
//                { value: "97,354", label: "Companies" },
//                { value: "18,599", label: "Candidates" },
//                { value: "7,532", label: "New Jobs" }
//              ].map((stat, index) => (
//                <motion.div
//                  key={index}
//                  initial={{ opacity: 0, y: 20 }}
//                  animate={{ opacity: 1, y: 0 }}
//                  transition={{ delay: 0.2 + index * 0.1 }}
//                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
//                >
//                  <div className="text-3xl font-bold text-white mb-1">
//                    {stat.value}
//                  </div>
//                  <div className="text-blue-100">{stat.label}</div>
//                </motion.div>
//              ))}
//            </div>
//          </div>
//        </div>

//        {/* Right side: Form */}
//        <div className="flex-1 flex items-center justify-center p-8">
//          <div className="w-full max-w-md space-y-8">
//            {/* Header */}
//            <div>
//              <h2 className="text-3xl font-bold text-gray-900 mb-2">
//                Sign In
//              </h2>
//              <p className="text-gray-600">
//                Don't have an account?{' '}
//                <Link to="/register" className="text-blue-600 hover:text-blue-500">
//                  Create Account
//                </Link>
//              </p>
//            </div>

//            {/* Message de succès */}
//                 {successMessage && (
//                   <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg">
//                     <div className="flex items-center space-x-2">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                       </svg>
//                       <span className="text-sm font-medium">{successMessage}</span>
//                     </div>
//                   </div>
//                 )}

//            {/* Form */}
//            <form onSubmit={handleSubmit} className="space-y-6">
//              <div className="space-y-4">
//              {(errors.general || errors.credentials) && (
//               <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
//                 <div className="flex items-center space-x-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                   </svg>
//                   <span className="text-sm font-medium">{errors.credentials || errors.general}</span>
//                 </div>
//               </div>
//             )}

//               {errors.email_unverified && (
//                 <div className="mt-2">
//                   <button
//                     type="button"
//                     onClick={handleResendVerification}
//                     className="text-sm text-blue-600 hover:text-blue-500 flex items-center"
//                   >
//                     <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
//                     </svg>
//                     Renvoyer l'email de vérification
//                   </button>
//                 </div>
//               )}

// <div>
//   <label className="block text-sm font-medium text-gray-700 mb-1">
//     Email Address
//   </label>
//   <div className="relative">
//     <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//     <input
//       type="email"
//       value={email}
//       onChange={handleEmailChange}
//       className={`w-full pl-12 pr-4 py-3 bg-white text-gray-900 rounded-xl border 
//         ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 
//         'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20'}`}
//       placeholder="john@example.com"
//       required
//     />
//   </div>
//   {errors.email && (
//     <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//   )}
// </div>

// <div>
//   <label className="block text-sm font-medium text-gray-700 mb-1">
//     Password
//   </label>
//   <div className="relative">
//     <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//     <input
//       type={showPassword ? "text" : "password"}
//       value={password}
//       onChange={handlePasswordChange}
//       className={`w-full pl-12 pr-12 py-3 bg-white text-gray-900 rounded-xl border 
//         ${errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 
//         'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20'}`}
//       placeholder="••••••••"
//       required
//     />
//     <button
//       type="button"
//       onClick={() => setShowPassword(!showPassword)}
//       className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//     >
//       {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//     </button>
//   </div>
//   {errors.password && (
//     <p className="mt-1 text-sm text-red-600">{errors.password}</p>
//   )}
// </div>

//              </div>

             

//              {/* Remember me and Forget password */}
//              <div className="flex items-center justify-between">
//                <div className="flex items-center">
//                  <input
//                    type="checkbox"
//                    checked={rememberMe}
//                    onChange={(e) => setRememberMe(e.target.checked)}
//                    className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
//                  />
//                  <label className="ml-2 text-sm text-gray-600">
//                    Remember me
//                  </label>
//                </div>
//                <button 
//                  type="button"
//                  onClick={handleForgetPassword}
//                  className="text-sm text-blue-600 hover:text-blue-500"
//                >
//                  Forgot password?
//                </button>
//              </div>

//              {/* Sign In Button */}
//              <motion.button
//                whileHover={{ scale: 1.01 }}
//                whileTap={{ scale: 0.99 }}
//                type="submit"
//                disabled={isLoading}
//                className="relative w-full group"
//              >
//                <div className="absolute -inset-0.5 from-blue-600 to-blue-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
//                <div className="relative w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center">
//                  {isLoading ? (
//                    <div className="flex items-center space-x-3">
//                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                      <span className="text-white font-medium">Signing in...</span>
//                    </div>
//                  ) : (
//                    <>
//                      <span className="text-white font-medium">Sign In</span>
//                      <ChevronRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
//                    </>
//                  )}
//                </div>
//              </motion.button>

//              {/* Separator */}
//              <div className="relative my-8">
//                <div className="absolute inset-0 flex items-center">
//                  <div className="w-full border-t border-gray-200"></div>
//                </div>
//                <div className="relative flex justify-center text-sm">
//                  <span className="px-4 bg-gray-50 text-gray-500">
//                    Or continue with
//                  </span>
//                </div>
//              </div>

//              {/* Social Button */}
//              <motion.button
//                type="button"
//                whileHover={{ scale: 1.02 }}
//                whileTap={{ scale: 0.98 }}
//                className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-medium"
//              >
//                <GoogleIcon />
//                <span>Continue with Google</span>
//              </motion.button>
//            </form>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
// };

// export default Login;


import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Eye, EyeOff, Mail, Lock,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import axiosClient from '../../../axios';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" fill="#000000"/>
  </svg>
);

const CheckeredBackground = () => (
  <svg width="100%" height="100%" className="absolute inset-0 opacity-10">
    <defs>
      <pattern id="checkerboard" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="20" height="20" fill="white" />
        <rect x="20" y="0" width="20" height="20" fill="transparent" />
        <rect x="0" y="20" width="20" height="20" fill="transparent" />
        <rect x="20" y="20" width="20" height="20" fill="white" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#checkerboard)" />
  </svg>
);

const Login = () => {
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    credentials: '',
    general: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [linkReset, setlinkReset] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({ email: '', password: '', credentials: '', general: '' });

    try {
      await login({
        email,
        password,
        remember: rememberMe
      });
    } catch (error) {
      console.log('Error response:', error.response?.data);
      if (error.response) {
        switch (error.response.status) {
          case 422:
            const validationErrors = error.response.data.errors;
            setErrors(prev => ({
              ...prev,
              email: validationErrors.email ? validationErrors.email[0] : '',
              password: validationErrors.password ? validationErrors.password[0] : ''
            }));
            break;
          case 401:
            if (error.response.data.email_verified === false) {
              setErrors(prev => ({
                ...prev,
                credentials: 'Veuillez vérifier votre email avant de vous connecter.',
                email_unverified: email
              }));
              return;
            } else {
              setErrors(prev => ({
                ...prev,
                credentials: error.response.data.errors?.credentials?.[0] || 'Identifiants incorrects'
              }));
            }
            break;
          default:
            setErrors(prev => ({
              ...prev,
              general: 'Une erreur est survenue'
            }));
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendVerification = async () => {
    try {
      await axiosClient.post('/resend-verification-email', { email: errors.email_unverified });
      setSuccessMessage('Email de vérification renvoyé avec succès');
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        general: "Erreur lors du renvoi de l'email de vérification"
      }));
    }
  };

  const handleForgetPassword = () => {
    navigate('/forget-password');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors(prev => ({ ...prev, email: '', credentials: '', general: '' }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors(prev => ({ ...prev, password: '', credentials: '', general: '' }));
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('reset') === 'success') {
        setSuccessMessage('Votre mot de passe a été réinitialisé avec succès');
    }
    if (params.get('error') === 'invalid_token') {
      setlinkReset('Le lien de réinitialisation est invalide ou a expiré.');
  }
}, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Côté gauche: Statistiques avec fond en damier */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-600 to-gray-800 relative p-12 overflow-hidden">
          <CheckeredBackground />
          <div className="w-full max-w-lg mx-auto flex flex-col justify-between relative z-10">
            <div>
              <h3 className="text-white mb-10">Logo</h3>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-4"
              >
                Trouvez votre prochaine opportunité
              </motion.h1>
              <p className="text-blue-50 text-lg">
                Connectez-vous avec les meilleures entreprises et trouvez l'emploi qui correspond à votre expertise
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "175 324", label: "Offres actives" },
                { value: "97 354", label: "Entreprises" },
                { value: "18 599", label: "Candidats" },
                { value: "7 532", label: "Nouvelles offres" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Côté droit: Formulaire */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            {/* En-tête */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Connexion
              </h2>
              <p className="text-gray-600">
                Vous n'avez pas de compte ?{' '}
                <Link to="/register" className="text-blue-600 hover:text-blue-500">
                  Créer un compte
                </Link>
              </p>
            </div>

            {/* Message de succès */}
            {successMessage && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">{successMessage}</span>
                </div>
              </div>
            )}

                {linkReset && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                        {linkReset}
                    </div>
                )}

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {(errors.general || errors.credentials) && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{errors.credentials || errors.general}</span>
                    </div>
                  </div>
                )}

                {errors.email_unverified && (
                  <div className="mt-2">
                    <button
                      type="button"
                      onClick={handleResendVerification}
                      className="text-sm text-blue-600 hover:text-blue-500 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0-11.601-2.566 1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                      </svg>
                      <span>Renvoyer l'email de vérification</span>
                    </button>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      className={`w-full pl-12 pr-4 py-3 bg-white text-gray-900 rounded-xl border 
                        ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 
                        'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20'}`}
                      placeholder="exemple@email.com"
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordChange}
                      className={`w-full pl-12 pr-12 py-3 bg-white text-gray-900 rounded-xl border 
                        ${errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 
                        'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20'}`}
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                  )}
                </div>
              </div>

              {/* Se souvenir de moi et Mot de passe oublié */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    Se souvenir de moi
                  </label>
                </div>
                <button 
                  type="button"
                  onClick={handleForgetPassword}
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  Mot de passe oublié ?
                </button>
              </div>

              {/* Bouton de connexion */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isLoading}
                className="relative w-full group"
              >
                <div className="absolute -inset-0.5 from-blue-600 to-blue-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center">
                  {isLoading ? (
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="text-white font-medium">Connexion en cours...</span>
                    </div>
                  ) : (
                    <>
                      <span className="text-white font-medium">Se connecter</span>
                      <ChevronRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </motion.button>

              {/* Séparateur */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-50 text-gray-500">
                    Ou continuer avec
                  </span>
                </div>
              </div>

              {/* Boutons sociaux */}
              <div className="space-y-3">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-medium"
                >
                  <GoogleIcon />
                  <span>Continuer avec Google</span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-medium"
                >
                  <FacebookIcon />
                  <span>Continuer avec Facebook</span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-medium"
                >
                  <AppleIcon />
                  <span>Continuer avec Apple</span>
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;