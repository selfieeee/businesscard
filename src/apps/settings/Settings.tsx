import React from "react";
import {Grid} from "@mui/material";
import {FaCog, FaMoon} from "react-icons/fa";

export const Settings = () => {
  const [activeColor, setActiveColor] = React.useState('color-1')
  return (
    <Grid className="style-switcher">
      <Grid className="style-switcher-toggle s-icon">
        <i className="fas fa-skin"><FaCog /></i>
      </Grid>
      <Grid className="day-night s-icon">
        <i className="fas"><FaMoon /></i>
      </Grid>
      <h4>Theme Colors</h4>
      <Grid className="colors">
        <span className="color-1" onClick={()=>setActiveColor('color-1')}></span>
        <span className="color-2" onClick={()=>setActiveColor('color-2')}></span>
        <span className="color-3" onClick={()=>setActiveColor('color-3')}></span>
        <span className="color-4" onClick={()=>setActiveColor('color-4')}></span>
        <span className="color-5" onClick={()=>setActiveColor('color-5')}></span>
      </Grid>
    </Grid>
  )
}