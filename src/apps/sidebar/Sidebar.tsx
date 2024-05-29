import React from "react";
import { Grid, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { FaBriefcase, FaComments, FaHome, FaList, FaUser } from "react-icons/fa";
import "./Sidebar.scss";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  controller: {
    active: {
      home: boolean;
      about: boolean;
      services: boolean;
      portfolio: boolean;
      contact: boolean;
    };
    handleSetActive: (active: {
      home: boolean;
      about: boolean;
      services: boolean;
      portfolio: boolean;
      contact: boolean;
    }) => void;
  };
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ controller, isOpen, toggleSidebar }) => {
  const { t } = useTranslation();

  const handleClick = (section: string) => {
    const newActiveState = {
      home: section === 'home',
      about: section === 'about',
      services: section === 'services',
      portfolio: section === 'portfolio',
      contact: section === 'contact',
    };
    controller.handleSetActive(newActiveState);
    toggleSidebar(); // Закрытие боковой панели после выбора
  };

  return (
    <Grid className={`aside ${isOpen ? 'open' : ''}`}>
      <Grid className="logo">
        <Link onClick={() => handleClick('home')} to="/businesscard/home">
          <span>S</span>elfie
        </Link>
      </Grid>
      <Grid className="nav-toggler" onClick={toggleSidebar}>
        <span></span>
      </Grid>
      <List className="nav">
        <ListItem onClick={() => handleClick('home')}>
          <Link to="/businesscard/home" className={controller.active.home ? 'active' : ''}>
            <i>
              <FaHome className="fa fa-home" />
            </i>
            {t('Sidebar.Home')}
          </Link>
        </ListItem>
        <ListItem onClick={() => handleClick('about')}>
          <Link to="/businesscard/about" className={controller.active.about ? 'active' : ''}>
            <i>
              <FaUser className="fa fa-user" />
            </i>
            {t('Sidebar.About')}
          </Link>
        </ListItem>
        <ListItem onClick={() => handleClick('services')}>
          <Link to="/businesscard/services" className={controller.active.services ? 'active' : ''}>
            <i>
              <FaList className="fa fa-list" />
            </i>
            {t('Sidebar.Services')}
          </Link>
        </ListItem>
        <ListItem onClick={() => handleClick('portfolio')}>
          <Link to="/businesscard/portfolio" className={controller.active.portfolio ? 'active' : ''}>
            <i>
              <FaBriefcase className="fa fa-briefcase" />
            </i>
            {t('Sidebar.Portfolio')}
          </Link>
        </ListItem>
        <ListItem onClick={() => handleClick('contact')}>
          <Link to="/businesscard/contact" className={controller.active.contact ? 'active' : ''}>
            <i>
              <FaComments className="fa fa-comments" />
            </i>
            {t('Sidebar.Contact')}
          </Link>
        </ListItem>
      </List>
    </Grid>
  );
};
