import React from "react";

export const ControllerLanguage = () => {
  const [lang, setLang] = React.useState('en')

  const handleChangeLang = () => {
    lang === 'en' ? setLang('ru') : setLang('en')
  }
  return {lang, handleChangeLang}
}