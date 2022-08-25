import {Grid} from "@mui/material";
import React from "react";
import {FaBullhorn, FaCode, FaLaptopCode, FaMobileAlt, FaPalette, FaSearch} from "react-icons/fa";

export const ServiceItems = () => {
  const Services = [
    {title:'Adaptive Layout', icon: <FaMobileAlt className="fa"/>},
    {title:'Linux', icon: <FaLaptopCode className="fa"/>},
    {title:'Sass/Scss', icon: <FaPalette className="fa"/>},
    {title:'Code Style', icon: <FaCode className="fa"/>},
    {title:'Search for info', icon: <FaSearch className="fa"/>},
    {title:'Communication', icon: <FaBullhorn className="fa"/>}
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
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}