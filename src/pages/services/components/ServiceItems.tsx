import {Grid} from "@mui/material";
import React from "react";
import {FaBullhorn, FaCode, FaLaptopCode, FaMobileAlt, FaPalette, FaSearch} from "react-icons/fa";
import {useTranslation} from "react-i18next";

export const ServiceItems = () => {
  const { t }: any = useTranslation();
  const Services = [
    {title: t('Services.Adaptive Layout'), icon: <FaMobileAlt className="fa"/>, text: t('Services.Text1')},
    {title: t('Services.Linux'), icon: <FaLaptopCode className="fa"/>, text: t('Services.Text2')},
    {title: 'Sass/Scss', icon: <FaPalette className="fa"/>, text: t('Services.Text3')},
    {title: t('Services.Code Style'), icon: <FaCode className="fa"/>, text: t('Services.Text4')},
    {title: t('Services.Search for info'), icon: <FaSearch className="fa"/>, text: t('Services.Text5')},
    {title: t('Services.Communication'), icon: <FaBullhorn className="fa"/>, text: t('Services.Text6')}
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