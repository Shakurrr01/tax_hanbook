import { LanguageContext } from './LanguageContext';
import { useState, useEffect } from 'react';

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Get language from localStorage or default to English
    const savedLanguage = localStorage.getItem('tax-handbook-language');
    return savedLanguage || 'en';
  });

  const languages = {
    en: { name: 'English', flag: './images/flags/uk-flag.svg', code: 'en' }, // UK flag for English
    fr: { name: 'Français', flag: './images/flags/france-flag.svg', code: 'fr' }, // France flag for French
    rw: { name: 'Kinyarwanda', flag: './images/flags/rwanda-flag.svg', code: 'rw' } // Rwanda flag for Kinyarwanda
  };

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem('tax-handbook-language', languageCode);
    // Update document language for accessibility
    document.documentElement.lang = languageCode;
  };

  useEffect(() => {
    // Set initial document language
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const value = {
    currentLanguage,
    changeLanguage,
    languages,
    currentLanguageInfo: languages[currentLanguage]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
