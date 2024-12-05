// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import { 
// //   Eye, EyeOff, User, Mail, Lock,
// //   Building2, UserCircle, ChevronRight
// // } from 'lucide-react';

// // const GoogleIcon = () => (
// //   <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
// //     <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
// //     <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
// //     <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
// //     <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
// //   </svg>
// // );

// // const CheckeredBackground = () => (
// //   <svg width="100%" height="100%" className="absolute inset-0 opacity-10">
// //     <defs>
// //       <pattern id="checkerboard" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
// //         <rect x="0" y="0" width="20" height="20" fill="white" />
// //         <rect x="20" y="0" width="20" height="20" fill="transparent" />
// //         <rect x="0" y="20" width="20" height="20" fill="transparent" />
// //         <rect x="20" y="20" width="20" height="20" fill="white" />
// //       </pattern>
// //     </defs>
// //     <rect width="100%" height="100%" fill="url(#checkerboard)" />
// //   </svg>
// // );

// // const Login = () => {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// //   const [userType, setUserType] = useState('employer');

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <div className="min-h-screen flex flex-col lg:flex-row">
// //         {/* Left side: Statistics with Checkered Background */}
// //         <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-600 to-gray-800 relative p-12 overflow-hidden">
// //           <CheckeredBackground />
// //           <div className="w-full max-w-lg mx-auto flex flex-col justify-between relative z-10">
// //             {/* Logo and Title */}
// //             <div>
// //               {/* <img src="/logo-white.svg" alt="Logo" className="h-8 mb-12" /> */}
// //               <h3 className='text-white mb-10'> Logo </h3>
// //               <motion.h1
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 className="text-4xl font-bold text-white mb-4"
// //               >
// //                 Find Your Next Great Opportunity
// //               </motion.h1>
// //               <p className="text-blue-50 text-lg">
// //                 Connect with top companies and find the job that matches your expertise
// //               </p>
// //             </div>

// //             {/* Statistics */}
// //             <div className="grid grid-cols-2 gap-6">
// //               {[
// //                 { value: "175,324", label: "Live Jobs" },
// //                 { value: "97,354", label: "Companies" },
// //                 { value: "18,599", label: "Candidates" },
// //                 { value: "7,532", label: "New Jobs" }
// //               ].map((stat, index) => (
// //                 <motion.div
// //                   key={index}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 0.2 + index * 0.1 }}
// //                   className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
// //                 >
// //                   <div className="text-3xl font-bold text-white mb-1">
// //                     {stat.value}
// //                   </div>
// //                   <div className="text-blue-100">{stat.label}</div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right side: Form */}
// //         <div className="flex-1 flex items-center justify-center p-8">
// //           <div className="w-full max-w-md space-y-8">
// //             {/* Header */}
// //             <div>
// //               <h2 className="text-3xl font-bold text-gray-900 mb-2">
// //                  Sign In 
// //               </h2>
// //               <p className="text-gray-600">
// //                Don't have account?{' '}
// //                 <Link to="/login" className="text-blue-600 hover:text-blue-500">
// //                   Create Account
// //                 </Link>
// //               </p>
// //             </div>

// //             {/* Account Type */}
           

// //             {/* Form */}
// //             <form className="space-y-6">
// //               <div className="space-y-4">
               

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">
// //                     Email Address
// //                   </label>
// //                   <div className="relative">
// //                     <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
// //                     <input
// //                       type="email"
// //                       className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
// //                       placeholder="john@example.com"
// //                     />
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">
// //                     Password
// //                   </label>
// //                   <div className="relative">
// //                     <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
// //                     <input
// //                       type={showPassword ? "text" : "password"}
// //                       className="w-full pl-12 pr-12 py-3 bg-white text-gray-900 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
// //                       placeholder="••••••••"
// //                     />
// //                     <button
// //                       type="button"
// //                       onClick={() => setShowPassword(!showPassword)}
// //                       className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
// //                     >
// //                       {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
// //                     </button>
// //                   </div>
                  
// //                 </div>

// //               </div>

// //               {/* Terms of Service */}
// //               <div className="flex items-start">
// //                 <div className="flex items-center h-5">
// //                   <input
// //                     type="checkbox"
// //                     className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
// //                   />
// //                 </div>
// //                 <div className="ml-3">
// //                   <label className="text-sm text-gray-600">
// //                     Remember Me{' '} 
// //                     <a href="#" className="text-blue-600 hover:text-blue-500 ">
// //                      Forget password 
// //                     </a>
// //                   </label>
// //                 </div>
// //               </div>

// //               {/* Sign Up Button */}
// //               <motion.button
// //                 whileHover={{ scale: 1.01 }}
// //                 whileTap={{ scale: 0.99 }}
// //                 type="submit"
// //                 className="relative w-full group"
// //               >
// //                 <div className="absolute -inset-0.5  from-blue-600 to-blue-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
// //                 <div className="relative w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center">
// //                   <span className="text-white font-medium">
// //                     Create Account
// //                   </span>
// //                   <ChevronRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
// //                 </div>
// //               </motion.button>

// //               {/* Separator */}
// //               <div className="relative my-8">
// //                 <div className="absolute inset-0 flex items-center">
// //                   <div className="w-full border-t border-gray-200"></div>
// //                 </div>
// //                 <div className="relative flex justify-center text-sm">
// //                   <span className="px-4 bg-gray-50 text-gray-500">
// //                     Or continue with
// //                   </span>
// //                 </div>
// //               </div>

// //               {/* Social Button */}
// //               <motion.button
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //                 className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-medium"
// //               >
// //                 <GoogleIcon />
// //                 <span>Continue with Google</span>
// //               </motion.button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   Eye, EyeOff, Mail, Lock,
//   ChevronRight
// } from 'lucide-react';

// const GoogleIcon = () => (
//   <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
//     <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//     <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//     <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//     <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//   </svg>
// );

// const CheckeredBackground = () => (
//   <svg width="100%" height="100%" className="absolute inset-0 opacity-10">
//     <defs>
//       <pattern id="checkerboard" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
//         <rect x="0" y="0" width="20" height="20" fill="white" />
//         <rect x="20" y="0" width="20" height="20" fill="transparent" />
//         <rect x="0" y="20" width="20" height="20" fill="transparent" />
//         <rect x="20" y="20" width="20" height="20" fill="white" />
//       </pattern>
//     </defs>
//     <rect width="100%" height="100%" fill="url(#checkerboard)" />
//   </svg>
// );

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   const handleForgetPassword = () => {
//     navigate('/forget-password'); // Utilise le chemin défini dans vos routes
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="min-h-screen flex flex-col lg:flex-row">
//         {/* Left side: Statistics with Checkered Background */}
//         <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-600 to-gray-800 relative p-12 overflow-hidden">
//           <CheckeredBackground />
//           <div className="w-full max-w-lg mx-auto flex flex-col justify-between relative z-10">
//             {/* Logo and Title */}
//             <div>
//               <h3 className="text-white mb-10">Logo</h3>
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-4xl font-bold text-white mb-4"
//               >
//                 Find Your Next Great Opportunity
//               </motion.h1>
//               <p className="text-blue-50 text-lg">
//                 Connect with top companies and find the job that matches your expertise
//               </p>
//             </div>

//             {/* Statistics */}
//             <div className="grid grid-cols-2 gap-6">
//               {[
//                 { value: "175,324", label: "Live Jobs" },
//                 { value: "97,354", label: "Companies" },
//                 { value: "18,599", label: "Candidates" },
//                 { value: "7,532", label: "New Jobs" }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 + index * 0.1 }}
//                   className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
//                 >
//                   <div className="text-3xl font-bold text-white mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-blue-100">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right side: Form */}
//         <div className="flex-1 flex items-center justify-center p-8">
//           <div className="w-full max-w-md space-y-8">
//             {/* Header */}
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">
//                 Sign In
//               </h2>
//               <p className="text-gray-600">
//                 Don't have an account?{' '}
//                 <Link to="/register" className="text-blue-600 hover:text-blue-500">
//                   Create Account
//                 </Link>
//               </p>
//             </div>

//             {/* Form */}
//             <form className="space-y-6">
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                     <input
//                       type="email"
//                       className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
//                       placeholder="john@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       className="w-full pl-12 pr-12 py-3 bg-white text-gray-900 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
//                       placeholder="••••••••"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                     >
//                       {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Remember me and Forget password */}
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
//                   />
//                   <label className="ml-2 text-sm text-gray-600">
//                     Remember me
//                   </label>
//                 </div>
//                 <a 
//                  onClick={handleForgetPassword}
//                 className="text-sm text-blue-600 hover:text-blue-500">
//                   Forgot password?
//                 </a>
//               </div>

//               {/* Sign In Button */}
//               <motion.button
//                 whileHover={{ scale: 1.01 }}
//                 whileTap={{ scale: 0.99 }}
//                 type="submit"
//                 className="relative w-full group"
//               >
//                 <div className="absolute -inset-0.5  from-blue-600 to-blue-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
//                 <div className="relative w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center">
//                   <span className="text-white font-medium">
//                     Sign In
//                   </span>
//                   <ChevronRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </motion.button>

//               {/* Separator */}
//               <div className="relative my-8">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-200"></div>
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-4 bg-gray-50 text-gray-500">
//                     Or continue with
//                   </span>
//                 </div>
//               </div>

//               {/* Social Button */}
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-medium"
//               >
//                 <GoogleIcon />
//                 <span>Continue with Google</span>
//               </motion.button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
 Eye, EyeOff, Mail, Lock,
 ChevronRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';



const GoogleIcon = () => (
 <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
   <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
   <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
   <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
   <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
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
    // Utiliser la méthode login du contexte au lieu d'un appel direct à axiosClient
    await login({
      email,
      password,
      remember: rememberMe
    });
    // La redirection est déjà gérée dans la méthode login du contexte
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
          setErrors(prev => ({
            ...prev,
            credentials: error.response.data.errors?.credentials?.[0] || 'Identifiants incorrects'
          }));
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

 return (
   <div className="min-h-screen bg-gray-50">
     <div className="min-h-screen flex flex-col lg:flex-row">
       {/* Left side: Statistics with Checkered Background */}
       <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-600 to-gray-800 relative p-12 overflow-hidden">
         <CheckeredBackground />
         <div className="w-full max-w-lg mx-auto flex flex-col justify-between relative z-10">
           {/* Logo and Title */}
           <div>
             <h3 className="text-white mb-10">Logo</h3>
             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl font-bold text-white mb-4"
             >
               Find Your Next Great Opportunity
             </motion.h1>
             <p className="text-blue-50 text-lg">
               Connect with top companies and find the job that matches your expertise
             </p>
           </div>

           {/* Statistics */}
           <div className="grid grid-cols-2 gap-6">
             {[
               { value: "175,324", label: "Live Jobs" },
               { value: "97,354", label: "Companies" },
               { value: "18,599", label: "Candidates" },
               { value: "7,532", label: "New Jobs" }
             ].map((stat, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 + index * 0.1 }}
                 className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
               >
                 <div className="text-3xl font-bold text-white mb-1">
                   {stat.value}
                 </div>
                 <div className="text-blue-100">{stat.label}</div>
               </motion.div>
             ))}
           </div>
         </div>
       </div>

       {/* Right side: Form */}
       <div className="flex-1 flex items-center justify-center p-8">
         <div className="w-full max-w-md space-y-8">
           {/* Header */}
           <div>
             <h2 className="text-3xl font-bold text-gray-900 mb-2">
               Sign In
             </h2>
             <p className="text-gray-600">
               Don't have an account?{' '}
               <Link to="/register" className="text-blue-600 hover:text-blue-500">
                 Create Account
               </Link>
             </p>
           </div>

           {/* Form */}
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

<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Email Address
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
      placeholder="john@example.com"
      required
    />
  </div>
  {errors.email && (
    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
  )}
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Password
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

             

             {/* Remember me and Forget password */}
             <div className="flex items-center justify-between">
               <div className="flex items-center">
                 <input
                   type="checkbox"
                   checked={rememberMe}
                   onChange={(e) => setRememberMe(e.target.checked)}
                   className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                 />
                 <label className="ml-2 text-sm text-gray-600">
                   Remember me
                 </label>
               </div>
               <button 
                 type="button"
                 onClick={handleForgetPassword}
                 className="text-sm text-blue-600 hover:text-blue-500"
               >
                 Forgot password?
               </button>
             </div>

             {/* Sign In Button */}
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
                     <span className="text-white font-medium">Signing in...</span>
                   </div>
                 ) : (
                   <>
                     <span className="text-white font-medium">Sign In</span>
                     <ChevronRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                   </>
                 )}
               </div>
             </motion.button>

             {/* Separator */}
             <div className="relative my-8">
               <div className="absolute inset-0 flex items-center">
                 <div className="w-full border-t border-gray-200"></div>
               </div>
               <div className="relative flex justify-center text-sm">
                 <span className="px-4 bg-gray-50 text-gray-500">
                   Or continue with
                 </span>
               </div>
             </div>

             {/* Social Button */}
             <motion.button
               type="button"
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-medium"
             >
               <GoogleIcon />
               <span>Continue with Google</span>
             </motion.button>
           </form>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Login;