import React from "react";
import {Grid} from "@mui/material";
import {Link} from "react-router-dom";
import Hero from "./components/hero.jpg";
import "./Home.scss"
import { useTranslation } from 'react-i18next';

export const Home = (Props: {Controller: object}) => {
  const { t }: any = useTranslation();
  const Controller:any = Props.Controller

  return (
    <section className="home section">
      <Grid className="container">
        <Grid className="row">
          <Grid className="home-info padd-15">
            <h3 className="hello">{t('Home.Hello, my name is')}<span className="name">{t('Home.Name')}</span></h3>
            <h3 className="my-proffession">{t("Home.I’m a")}<span className="typing">{t("Home.Web Developer")}</span></h3>
            <p>{t('Home.About')}</p>
            <Link to={"/contact"} className="btn hire-me" onClick={()=>Controller.handleSetActive({home: false, about: false, services: false, portfolio: false, contact: true})}>{t("Home.More About Me")}</Link>
          </Grid>
          <Grid className="home-img padd-15">
            <img src={Hero} alt="" />
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}