import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Sidebar} from "./apps/sidebar/Sidebar";
import {Settings} from "./apps/settings/Settings";
import {Grid} from "@mui/material";
import {Home} from "./pages/home/Home";
import {About} from "./pages/about/About";
import {Services} from "./pages/services/Services";
import {Portfolio} from "./pages/portfolio/Portfolio";
import {Contact} from "./pages/contact/Contact";
import {ControllerActivePage} from "./apps/sidebar/controller/ActivePage";
import {ControllerThemeColor} from "./apps/settings/controller/ThemeColor";
import {i18next} from "./apps/i18n/I18Next";
import {ControllerLanguage} from "./apps/settings/controller/Language";

function App() {
  const Controller = ControllerActivePage()
  const ControllerTheme = ControllerThemeColor()
  const ControllerLang = ControllerLanguage()
  i18next(ControllerLang.lang)

  return (
    <Router>
      <Grid className="main-content">
        <Sidebar Controller={Controller}/>
        <Grid className="main-content">
          <Grid className="mobile">
            <Home Controller={Controller}/>
            <About />
            <Services />
            <Portfolio />
            <Contact />
          </Grid>
          <Grid className="desktop">
            <Routes>
              <Route path="/" element={<Home Controller={Controller}/>} />
              <Route path={"/home"} element={<Home Controller={Controller}/>}></Route>
              <Route path={"/about"} element={<About />}></Route>
              <Route path={"/services"} element={<Services />}></Route>
              <Route path={"/portfolio"} element={<Portfolio />}></Route>
              <Route path={"/contact"} element={<Contact />}></Route>
            </Routes>
          </Grid>
        </Grid>
      </Grid>
      <Settings ControllerTheme={ControllerTheme} ControllerLanguage={ControllerLang} />
    </Router>
  );
}

export default App;
