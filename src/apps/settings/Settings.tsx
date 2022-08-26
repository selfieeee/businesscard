import React from "react";
import {Grid} from "@mui/material";
import {FaCog, FaMoon} from "react-icons/fa";
import "./style-switcher.scss"

export const Settings = (Props: {Controller: object}) => {
  const Controller:any = Props.Controller
  const colors = ["#ec1839", "#fa5b0f", "#37b182", "#1854b4", "#f021b2"]
  const [activeColor, setActiveColor] = React.useState('color-1')
  //@ts-ignore
  const alternateStyles = document.querySelectorAll('.alternate-style')
  function setActiveStyle(color:any) {
    alternateStyles.forEach((style, index) => {
      //@ts-ignore
      color === "color-1" && document.querySelector(':root').style.setProperty('--skin-color',colors[0]);
      //@ts-ignore
      color === "color-2" && document.querySelector(':root').style.setProperty('--skin-color',colors[1]);
      //@ts-ignore
      color === "color-3" && document.querySelector(':root').style.setProperty('--skin-color',colors[2]);
      //@ts-ignore
      color === "color-4" && document.querySelector(':root').style.setProperty('--skin-color',colors[3]);
      //@ts-ignore
      color === "color-5" && document.querySelector(':root').style.setProperty('--skin-color',colors[4]);
    })
  }

  React.useEffect(()=>{
    setActiveStyle(activeColor)
  })

  return (
    <Grid className='style-switcher' style={{transform: Controller.open ? "translateX(100%)" : "translateX(-25px)"}}>
      <Grid className="style-switcher-toggle s-icon">
        <i onClick={() => Controller.handleSetOpen(Controller.open)}><FaCog className="fas fa-spin"/></i>
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