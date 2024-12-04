import { useParams } from 'react-router-dom';

const ConfirmationEmail = () => {
 const { token } = useParams();

 const handleVerification = async () => {
    try {
      await axiosClient.get(`/verify-email/${token}`);
      navigate('/login'); // Redirection après vérification réussie
    } catch (error) {
      console.error(error);
    }
  };

 return (
   <div className="min-h-screen bg-gray-100 py-8">
     <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
       <div className="bg-orange-600 p-8 text-center">
         <div className="text-5xl mb-3">🔒</div>
         <h1 className="text-2xl font-bold text-white">Activez Votre Compte !</h1>
       </div>
       
       <div className="p-8">
         <h2 className="text-2xl text-orange-600 text-center font-bold mb-4">
           Confirmez votre inscription
         </h2>
         
         <div className="space-y-4 text-center text-gray-600">
           <p>Bonjour,</p>
           <p>
             Nous sommes ravis de vous accueillir ! Cliquez ci-dessous pour confirmer 
             votre email et finaliser votre inscription.
           </p>
         </div>

         <div className="my-8 h-px bg-orange-600/30" />
         
         <div className="text-center mb-8">
           <button
             onClick={handleVerification}
             className="inline-block px-8 py-3 text-lg font-bold text-white rounded-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 shadow-lg shadow-orange-600/40 transition-all"
           >
             Confirmer mon compte
           </button>
         </div>

         <div className="text-center text-sm text-gray-600 space-y-2">
           <p>Si le bouton ne fonctionne pas, copiez et collez ce lien :</p>
           <p className="text-orange-600 break-all">
             {`http://localhost:3000/verify-email/${token}`}
           </p>
         </div>
       </div>

       <div className="bg-gray-50 p-6 text-center text-sm text-gray-600">
         <p>
           Contact : 
           <a href="mailto:contact@jobexpress.com" className="text-orange-600">
             contact@jobexpress.com
           </a>
         </p>
         <p>&copy; 2024 JobExpress. Tous droits réservés.</p>
       </div>
     </div>
   </div>
 );
};

export default ConfirmationEmail;