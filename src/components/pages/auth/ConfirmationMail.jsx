import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Check } from 'lucide-react';

const ConfirmationEmail = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Vérifiez votre email</h1>
        </div>

        <div className="p-8">
          <div className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4"
            >
              <Check className="w-8 h-8 text-blue-600" />
            </motion.div>

            <h2 className="text-xl font-semibold text-gray-900">
              Email de confirmation envoyé !
            </h2>

            <p className="text-gray-600">
              Nous venons de vous envoyer un email avec un lien de confirmation.
              Veuillez vérifier votre boîte de réception et cliquer sur le lien pour activer votre compte.
            </p>

            <div className="pt-4">
              <p className="text-sm text-gray-500">
                Vous n'avez pas reçu l'email ? Vérifiez vos spams ou
                <button className="text-blue-600 hover:text-blue-500 font-medium ml-1">
                  renvoyer l'email
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 bg-gray-50 p-6">
          <div className="flex justify-center space-x-4 text-sm text-gray-600">
            <Link to="/login" className="hover:text-blue-600">
              Retour à la connexion
            </Link>
            <span>•</span>
            <a href="mailto:support@example.com" className="hover:text-blue-600">
              Contacter le support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationEmail;