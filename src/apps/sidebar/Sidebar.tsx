import React from "react";
import {Grid, List, ListItem} from "@mui/material";
import { Link } from "react-router-dom";
import {FaBriefcase, FaComments, FaHome, FaList, FaUser} from "react-icons/fa";
import "./Sidebar.scss";
import {useTranslation} from "react-i18next";

export const Sidebar = (Props: {Controller: object}) => {
  const Controller:any = Props.Controller
  const { t }: any = useTranslation();
  return (
    <Grid className="aside">
      <Grid className="logo">
        <Link onClick={()=>Controller.handleSetActive({home: true, about: false, services: false, portfolio: false, contact: false})} to={"/home"}><span>S</span>elfie</Link>
      </Grid>
      <Grid className="nav-toggler">
        <span></span>
      </Grid>
      <List className="nav">
        <ListItem onClick={()=>Controller.handleSetActive({home: true, about: false, services: false, portfolio: false, contact: false})}><Link to={"/home"} className={Controller.active.home ? "active":""}><i><FaHome className="fa fa-home"/></i>{t("Sidebar.Home")}</Link></ListItem>
        <ListItem onClick={()=>Controller.handleSetActive({home: false, about: true, services: false, portfolio: false, contact: false})}><Link to={"/about"} className={Controller.active.about ? "active":""}><i><FaUser className="fa fa-user"/></i>{t("Sidebar.About")}</Link></ListItem>
        <ListItem onClick={()=>Controller.handleSetActive({home: false, about: false, services: true, portfolio: false, contact: false})}><Link to={"/services"} className={Controller.active.services ? "active":""}><i><FaList className="fa fa-list"/></i>{t("Sidebar.Services")}</Link></ListItem>
        <ListItem onClick={()=>Controller.handleSetActive({home: false, about: false, services: false, portfolio: true, contact: false})}><Link to={"/portfolio"} className={Controller.active.portfolio ? "active":""}><i><FaBriefcase className="fa fa-briefcase"/></i>{t("Sidebar.Portfolio")}</Link></ListItem>
        <ListItem onClick={()=>Controller.handleSetActive({home: false, about: false, services: false, portfolio: false, contact: true})}><Link to={"/contact"} className={Controller.active.contact ? "active":""}><i><FaComments className="fa fa-comments"/></i>{t("Sidebar.Contact")}</Link></ListItem>
      </List>
    </Grid>
  )
}
