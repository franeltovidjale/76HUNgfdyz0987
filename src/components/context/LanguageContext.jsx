// src/context/LanguageContext.jsx
import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: {
      home:'Home',
      findJob: 'Find Job',
      employers: 'Employers',
      candidates: 'Candidates',
      pricing: 'Pricing Plans',
      // support: 'Customer Support',
      signIn: 'Sign In',
      postJob: 'Post A Jobs',
      'find job':'Find Job',
    },
    // auth: {
    //   createAccount: "Create account",
    //   alreadyHaveAccount: "Already have account?",
    //   logIn: "Log In",
    //   fullName: "Full Name",
    //   username: "Username",
    //   emailAddress: "Email address",
    //   password: "Password",
    //   confirmPassword: "Confirm Password",
    //   termsAgree: "I've read and agree with your",
    //   termsOfService: "Terms of Services",
    //   createAccountButton: "Create Account",
    //   orContinueWith: "or",
    //   signInWithFacebook: "Sign up with Facebook",
    //   signInWithGoogle: "Sign up with Google"
    // },
    home: {
      title: 'Find a job that suits your interest & skills.',
      subtitle: 'Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.',
      searchPlaceholder: 'Job title, Keyword...',
      locationPlaceholder: 'Your Location',
      findJobButton: 'Find Job',
      suggestion: 'Suggestion:',
      stats: {
        liveJob: 'Live Job',
        companies: 'Companies',
        candidates: 'Candidates',
        newJobs: 'New Jobs'
      },
      stepsCreateAccount : {
        title : {
          createaccount : 'Create account',
          uploadcv : 'Upload CV/Resume',
          findsuitable : 'Find suitable job',
          applyjob : 'Apply job',
 
        },
        description : {
          createaccount : 'Aliquam facilisis egestas sapien, nec tempor leo tristique at.',
          uploadcv : 'Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales',
          findsuitable : 'Phasellus quis eleifend ex. Morbi nec fringilla nibh.',
          applyjob : 'Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.',
        }
    },
    popularVacancies: {
      title: "Most Popular Vacancies",
      jobs: {
        anesthesiologists: {
          title: "Anesthesiologists",
          positions: "45,904 Open Positions"
        },
        surgeons: {
          title: "Surgeons",
          positions: "50,364 Open Positions"
        },
        obstetricians: {
          title: "Obstetricians-Gynecologists",
          positions: "4,339 Open Positions"
        },
        orthodontists: {
          title: "Orthodontists",
          positions: "20,079 Open Positions"
        },
        maxillofacial: {
          title: "Maxillofacial Surgeons",
          positions: "74,875 Open Positions"
        },
        softwareDev: {
          title: "Software Developer",
          positions: "43,359 Open Positions"
        },
        psychiatrists: {
          title: "Psychiatrists",
          positions: "18,599 Open Positions"
        },
        dataScientist: {
          title: "Data Scientist",
          positions: "28,200 Open Positions"
        },
        financialManager: {
          title: "Financial Manager",
          positions: "61,391 Open Positions"
        },
        managementAnalysis: {
          title: "Management Analysis",
          positions: "93,046 Open Positions"
        },
        itManager: {
          title: "IT Manager",
          positions: "50,963 Open Positions"
        },
        operationsResearch: {
          title: "Operations Research Analysis",
          positions: "16,627 Open Positions"
        }
      }
    }
     
    },
   
  },
  fr: {
    nav: {
      home : 'Accueil',
      findJob: 'Rechercher',
      employers: 'Employeurs',
      candidates: 'Candidats',
      pricing: 'Tarifs',
      // support: 'Support Client',
      signIn: 'Connexion',
      postJob: 'Publier une offre',
      'find job':'Rechercher',

     

    },
    // auth: {
    //   createAccount: "Créer un compte",
    //   alreadyHaveAccount: "Vous avez déjà un compte ?",
    //   logIn: "Se connecter",
    //   fullName: "Nom complet",
    //   username: "Nom d'utilisateur",
    //   emailAddress: "Adresse email",
    //   password: "Mot de passe",
    //   confirmPassword: "Confirmer le mot de passe",
    //   termsAgree: "J'ai lu et j'accepte les",
    //   termsOfService: "Conditions d'utilisation",
    //   createAccountButton: "Créer un compte",
    //   orContinueWith: "ou",
    //   signInWithFacebook: "Continuer avec Facebook",
    //   signInWithGoogle: "Continuer avec Google"
    // },
    home: {
      title: 'Trouvez un emploi qui correspond à vos intérêts et compétences.',
      subtitle: 'Découvrez des milliers d\'opportunités professionnelles adaptées à votre profil.',
      searchPlaceholder: 'Titre du poste, Mot-clé...',
      locationPlaceholder: 'Votre localisation',
      findJobButton: 'Rechercher',
      suggestion: 'Suggestions :',
      stats: {
        liveJob: 'Offres actives',
        companies: 'Entreprises',
        candidates: 'Candidats',
        newJobs: 'Nouvelles offres'
      },
      stepsCreateAccount : {
        title : {
          createaccount : 'Creer un compte',
          uploadcv : 'Ajouter votre CV',
          findsuitable : 'Trouver un emploi',
          applyjob : 'Postuler',
 
        },
        description : {
          createaccount : 'Aliquam facilisis egestas sapien, nec tempor leo tristique at.',
          uploadcv : 'Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales',
          findsuitable : 'Phasellus quis eleifend ex. Morbi nec fringilla nibh.',
          applyjob : 'Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.',
        }
    },
    popularVacancies: {
      title: "Postes les plus recherchés",
      jobs: {
        anesthesiologists: {
          title: "Anesthésistes",
          positions: "45 904 Postes ouverts"
        },
        surgeons: {
          title: "Chirurgiens",
          positions: "50 364 Postes ouverts"
        },
        obstetricians: {
          title: "Obstétriciens-Gynécologues",
          positions: "4 339 Postes ouverts"
        },
        orthodontists: {
          title: "Orthodontistes",
          positions: "20 079 Postes ouverts"
        },
        maxillofacial: {
          title: "Chirurgiens Maxillo-Faciaux",
          positions: "74 875 Postes ouverts"
        },
        softwareDev: {
          title: "Développeur Logiciel",
          positions: "43 359 Postes ouverts"
        },
        psychiatrists: {
          title: "Psychiatres",
          positions: "18 599 Postes ouverts"
        },
        dataScientist: {
          title: "Data Scientist",
          positions: "28 200 Postes ouverts"
        },
        financialManager: {
          title: "Gestionnaire Financier",
          positions: "61 391 Postes ouverts"
        },
        managementAnalysis: {
          title: "Analyste en Management",
          positions: "93 046 Postes ouverts"
        },
        itManager: {
          title: "Responsable Informatique",
          positions: "50 963 Postes ouverts"
        },
        operationsResearch: {
          title: "Analyste en Recherche Opérationnelle",
          positions: "16 627 Postes ouverts"
        }
      }
    }
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');

  const value = {
    currentLang,
    setLanguage: (lang) => setCurrentLang(lang),
    t: (key) => {
      const keys = key.split('.');
      let translation = translations[currentLang];
      
      for (const k of keys) {
        if (translation[k] === undefined) {
          console.warn(`Translation missing for key: ${key}`);
          // return key;
          return `[Missing translation: ${key}]`; // Ajouter une valeur de secours
        }
        translation = translation[k];
      }
      
      return translation;
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};