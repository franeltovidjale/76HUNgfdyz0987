import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

const Footer = () => {
  const { t, changeLanguage, currentLanguage } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Section 1 - MyJob */}
          <div>
            <h2 className="text-white text-2xl font-semibold mb-4 flex items-center">
              <span>💼</span> {t("footer.myJob.title")}
            </h2>
            <p>
              {t("footer.myJob.callNow")}{" "}
              <span className="text-white font-semibold">(319) 555-0115</span>
            </p>
            <p className="mt-2">{t("footer.myJob.address")}</p>
          </div>

          {/* Section 2 - Quick Link */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("footer.quickLink.title")}
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white">{t("footer.quickLink.about")}</Link></li>
              <li><Link to="/contact" className="text-white font-medium">➜ {t("footer.quickLink.contact")}</Link></li>
              <li><Link to="/pricing" className="hover:text-white">{t("footer.quickLink.pricing")}</Link></li>
              <li><Link to="/blog" className="hover:text-white">{t("footer.quickLink.blog")}</Link></li>
            </ul>
          </div>

          {/* Section 3 - Candidate */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("footer.candidate.title")}
            </h3>
            <ul className="space-y-2">
              <li><Link to="/browse-jobs" className="hover:text-white">{t("footer.candidate.browseJobs")}</Link></li>
              <li><Link to="/browse-employers" className="hover:text-white">{t("footer.candidate.browseEmployers")}</Link></li>
              <li><Link to="/dashboard" className="hover:text-white">{t("footer.candidate.dashboard")}</Link></li>
              <li><Link to="/saved-jobs" className="hover:text-white">{t("footer.candidate.savedJobs")}</Link></li>
            </ul>
          </div>

          {/* Section 4 - Employers */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("footer.employers.title")}
            </h3>
            <ul className="space-y-2">
              <li><Link to="/post-job" className="hover:text-white">{t("footer.employers.postJob")}</Link></li>
              <li><Link to="/browse-candidates" className="hover:text-white">{t("footer.employers.browseCandidates")}</Link></li>
              <li><Link to="/employer-dashboard" className="hover:text-white">{t("footer.employers.dashboard")}</Link></li>
              <li><Link to="/applications" className="hover:text-white">{t("footer.employers.applications")}</Link></li>
            </ul>
          </div>

          {/* Section 5 - Support */}
          <div>
            <h5 className="text-white  font-semibold mb-4">
              {t("footer.support.title")}
            </h5>
            <ul className="space-y-2">
              <li><Link to="/faqs" className="hover:text-white">{t("footer.support.faqs")}</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white">{t("footer.support.privacyPolicy")}</Link></li>
              <li><Link to="/terms" className="hover:text-white">{t("footer.support.terms")}</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 {t("footer.myJob.title")}. {t("footer.copyright")}
          </p>

          {/* Sélecteur de langue */}
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="mr-2">{t("footer.language")}: </span>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1 rounded-lg text-sm ${
                currentLanguage === "en" ? "bg-blue-600 text-white" : "text-gray-300"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("fr")}
              className={`ml-2 px-3 py-1 rounded-lg text-sm ${
                currentLanguage === "fr" ? "bg-blue-600 text-white" : "text-gray-300"
              }`}
            >
              FR
            </button>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white"><Facebook size={20} /></Link>
            <Link to="#" className="hover:text-white"><Instagram size={20} /></Link>
            <Link to="#" className="hover:text-white"><Twitter size={20} /></Link>
            <Link to="#" className="hover:text-white"><Youtube size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
