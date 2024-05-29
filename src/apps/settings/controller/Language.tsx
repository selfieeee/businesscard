import React from 'react';

export const ControllerLanguage = () => {
  const [lang, setLang] = React.useState('en');

  const handleChangeLang = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'ru' : 'en'));
  };

  return { lang, handleChangeLang };
};