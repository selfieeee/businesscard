import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { FaCog, FaMoon, FaSun } from "react-icons/fa";
import "./style-switcher.scss";

interface SettingsProps {
  ControllerTheme: {
    open: boolean;
    mode: boolean;
    handleSetOpen: () => void;
    handleChangeMode: () => void;
  };
  ControllerLanguage: {
    lang: string;
    handleChangeLang: () => void;
  };
}

export const Settings: React.FC<SettingsProps> = ({ ControllerTheme, ControllerLanguage }) => {
  const colors = ["#ec1839", "#fa5b0f", "#37b182", "#1854b4", "#f021b2"];
  const [activeColor, setActiveColor] = useState('color-1');

  const setActiveStyle = (color: string) => {
    const colorIndex = parseInt(color.split('-')[1], 10) - 1;
    document.documentElement.style.setProperty('--skin-color', colors[colorIndex]);
  };

  const setDarkLightMode = () => {
    document.body.classList.toggle('dark', ControllerTheme.mode);
    if (ControllerTheme.mode) {
      document.documentElement.style.setProperty('--bg-black-900', '#151515');
      document.documentElement.style.setProperty('--bg-black-100', '#222222');
      document.documentElement.style.setProperty('--bg-black-50', '#393939');
      document.documentElement.style.setProperty('--text-black-900', '#ffffff');
      document.documentElement.style.setProperty('--text-black-700', '#e9e9e9');
    } else {
      document.documentElement.style.setProperty('--bg-black-900', '#f2f2fc');
      document.documentElement.style.setProperty('--bg-black-100', '#fdf9ff');
      document.documentElement.style.setProperty('--bg-black-50', '#e8dfec');
      document.documentElement.style.setProperty('--text-black-900', '#302e4d');
      document.documentElement.style.setProperty('--text-black-700', '#504e70');
    }
  };

  useEffect(() => {
    setActiveStyle(activeColor);
    setDarkLightMode();
  }, [activeColor, ControllerTheme.mode]);

  return (
    <Grid className='style-switcher' style={{ transform: ControllerTheme.open ? "translateX(100%)" : "translateX(-25px)" }}>
      <Grid className="style-lang s-icon" onClick={ControllerLanguage.handleChangeLang}>
        {ControllerLanguage.lang}
      </Grid>
      <Grid className="style-switcher-toggle s-icon" onClick={ControllerTheme.handleSetOpen}>
        <FaCog className="fas fa-spin" />
      </Grid>
      <Grid className="day-night s-icon" onClick={ControllerTheme.handleChangeMode}>
        {ControllerTheme.mode ? <FaMoon /> : <FaSun />}
      </Grid>
      <h4>Theme Colors</h4>
      <Grid className="colors">
        {colors.map((color, index) => (
          <span key={index} className={`color-${index + 1}`} onClick={() => setActiveColor(`color-${index + 1}`)}></span>
        ))}
      </Grid>
    </Grid>
  );
};
