// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { CheckCircle, XCircle, RefreshCw, ChevronRight } from 'lucide-react';
// import axiosClient from '../../../axios';
// import { useAuth } from '../../context/AuthContext';

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

// const ConfirmationMail = () => {
//   const [verificationStatus, setVerificationStatus] = useState('verifying');
//   const [message, setMessage] = useState('');
//   const { token } = useParams();
//   const navigate = useNavigate();
//   const { logout } = useAuth();

//   useEffect(() => {
//     console.log('Page de vérification chargée');
//     console.log('Token reçu:', token);
    
//     // Appeler la fonction de vérification si nous avons un token
//     if (token) {
//       verifyEmailToken();
//     }
//   }, [token]); 

//   // const verifyEmailToken = async () => {
//   //   console.log("Token reçu:", token); // Vérifier si le token est bien reçu
    
//   //   try {
//   //     console.log("Tentative de vérification..."); 
//   //     const response = await axiosClient.get(`/verify-email/${token}`);
//   //     console.log("Réponse reçue:", response); // Vérifier la réponse
      
//   //     if (response.status === 201) {
//   //       setVerificationStatus('success');
//   //       setMessage('Votre email a été vérifié avec succès!');
//   //       // Décommenter la redirection si vous voulez qu'elle fonctionne
//   //       setTimeout(() => {
//   //         logout();
//   //         navigate('/login');
//   //       }, 3000);
//   //     }
//   //   } catch (error) {
//   //     console.log("Erreur:", error); // Voir l'erreur en détail
//   //     setVerificationStatus('error');
//   //     setMessage(error.response?.data?.message || 'Le lien de vérification est invalide ou a expiré.');
//   //   }
//   // };

//   const verifyEmailToken = async () => {
//     console.log("Tentative de vérification avec token:", token);
//     debugger
//     try {
//       // Ajout des options de requête
//       const response = await axiosClient.get(`/verify-email/${token}`, {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         }
//       });
      
//       console.log("Réponse complète:", response);
      
//       if (response.status === 201) {
//         setVerificationStatus('success');
//         setMessage(response.data.message);
//         // Ajouter la redirection
//           setTimeout(() => {
//             // navigate('/login');
//           }, 3000);
//       } else {
//         throw new Error('Réponse inattendue du serveur');
//       }
//     } catch (error) {
//       console.error("Erreur complète:", error);
//       setVerificationStatus('error');
//       if (error.response) {
//         console.log("Données de l'erreur:", error.response.data);
//         setMessage(error.response.data.message);
//       } else {
//         setMessage('Une erreur est survenue lors de la vérification.');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="min-h-screen flex flex-col lg:flex-row">
//         {/* Left side: Statistics with Checkered Background */}
//         <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-600 to-gray-800 relative p-12 overflow-hidden">
//           <CheckeredBackground />
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
//                 Nous vérifions votre adresse email pour sécuriser votre compte
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right side: Verification Status */}
//         <div className="flex-1 flex items-center justify-center p-8">
//           <div className="w-full max-w-md">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="bg-white rounded-2xl shadow-xl p-8"
//             >
//               <div className="text-center">
//                 {verificationStatus === 'verifying' && (
//                   <>
//                     <RefreshCw className="mx-auto h-16 w-16 text-blue-600 animate-spin" />
//                     <h2 className="mt-4 text-2xl font-bold text-gray-900">
//                       Vérification en cours
//                     </h2>
//                     <p className="mt-2 text-gray-600">
//                       Veuillez patienter pendant que nous vérifions votre email...
//                     </p>
//                   </>
//                 )}

//                 {verificationStatus === 'success' && (
//                   <>
//                     <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
//                     <h2 className="mt-4 text-2xl font-bold text-gray-900">
//                       Email Vérifié!
//                     </h2>
//                     <p className="mt-2 text-gray-600">
//                       {message}
//                     </p>
//                     <p className="mt-2 text-sm text-gray-500">
//                       Redirection vers la page de connexion...
//                     </p>
//                   </>
//                 )}

//                 {verificationStatus === 'error' && (
//                   <>
//                     <XCircle className="mx-auto h-16 w-16 text-red-500" />
//                     <h2 className="mt-4 text-2xl font-bold text-gray-900">
//                       Échec de la Vérification
//                     </h2>
//                     <p className="mt-2 text-gray-600">
//                       {message}
//                     </p>
//                     <motion.button
//                       whileHover={{ scale: 1.01 }}
//                       whileTap={{ scale: 0.99 }}
//                       onClick={() => navigate('/login')}
//                       className="mt-6 relative w-full group"
//                     >
//                       <div className="absolute -inset-0.5 from-blue-600 to-blue-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
//                       <div className="relative w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center">
//                         <span className="text-white font-medium">
//                           Retour à la connexion
//                         </span>
//                         <ChevronRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
//                       </div>
//                     </motion.button>
//                   </>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationMail;