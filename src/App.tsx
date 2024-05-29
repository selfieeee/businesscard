import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Sidebar } from './apps/sidebar/Sidebar';
import { Settings } from './apps/settings/Settings';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Services } from './pages/services/Services';
import { Portfolio } from './pages/portfolio/Portfolio';
import { Contact } from './pages/contact/Contact';
import { ControllerActivePage } from './apps/sidebar/controller/ActivePage';
import { ControllerThemeColor } from './apps/settings/controller/ThemeColor';
import { i18next } from './apps/i18n/I18Next';
import { ControllerLanguage } from './apps/settings/controller/Language';

const App: React.FC = () => {
  const controller = ControllerActivePage();
  const controllerTheme = ControllerThemeColor();
  const controllerLang = ControllerLanguage();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  i18next(controllerLang.lang);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Grid container className="main-content">
        <Sidebar controller={controller} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Grid item className={`main-content ${isSidebarOpen ? 'blur' : ''}`}>
          <Routes>
            <Route path="/businesscard" element={<Home controller={controller} />} />
            <Route path="/businesscard/home" element={<Home controller={controller} />} />
            <Route path="/businesscard/about" element={<About />} />
            <Route path="/businesscard/services" element={<Services />} />
            <Route path="/businesscard/portfolio" element={<Portfolio />} />
            <Route path="/businesscard/contact" element={<Contact />} />
          </Routes>
        </Grid>
      </Grid>
      <Settings ControllerTheme={controllerTheme} ControllerLanguage={controllerLang} />
    </Router>
  );
};

export default App;
