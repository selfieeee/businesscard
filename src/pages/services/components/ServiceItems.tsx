import {Grid} from "@mui/material";
import React from "react";
import {FaBullhorn, FaCode, FaLaptopCode, FaMobileAlt, FaPalette, FaSearch} from "react-icons/fa";

export const ServiceItems = () => {
  const Services = [
    {title:'Adaptive Layout', icon: <FaMobileAlt className="fa"/>, text: 'I know how to make adaptive interfaces'},
    {title:'Linux', icon: <FaLaptopCode className="fa"/>, text: 'I work on Linux'},
    {title:'Sass/Scss', icon: <FaPalette className="fa"/>, text: 'I work with sass/scss preprocessors'},
    {title:'Code Style', icon: <FaCode className="fa"/>, text: 'I\'m styling my code'},
    {title:'Search for info', icon: <FaSearch className="fa"/>, text: 'I know how to search information'},
    {title:'Communication', icon: <FaBullhorn className="fa"/>, text: 'I am sociable'}
  ]
  return (
    <Grid className="row">
      {Services.map((item, index) => (
        <Grid className="service-item padd-15" key={index}>
          <Grid className="service-item-inner">
            <Grid className="icon">
              <i>{item.icon}</i>
            </Grid>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}