import React from 'react';
import './styles.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Sidebar} from "./apps/sidebar/Sidebar";
import {Settings} from "./apps/settings/Settings";
import {Grid, List, ListItem} from "@mui/material";
import {FaHome} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import {FaList} from 'react-icons/fa';
import {FaBriefcase} from 'react-icons/fa';
import {FaComments} from 'react-icons/fa';


function App() {
  return (
    <Grid className="main-content">
      <Grid className="aside">
        <Grid className="logo">
          <a href={"#"}><span>S</span>elfie</a>
        </Grid>
        <div className="nav-toggler">
          <span></span>
        </div>
        <List className="nav">
          <ListItem><a href={"#"} className="active"><i><FaHome className="fa fa-home"/></i> Home</a></ListItem>
          <ListItem><a href={"#"}><i><FaUser className="fa fa-user"/></i> About</a></ListItem>
          <ListItem><a href={"#"}><i><FaList className="fa fa-list"/></i> Services</a></ListItem>
          <ListItem><a href={"#"}><i><FaBriefcase className="fa fa-briefcase"/></i> Portfolio</a></ListItem>
          <ListItem><a href={"#"}><i><FaComments className="fa fa-comments"/></i> Contact</a></ListItem>
        </List>
      </Grid>
      <Grid className="main-content">
        <section className="home section">
          home
        </section>
      </Grid>
    </Grid>
    // <Router>
    //   <Sidebar />
    //   <Settings />
    //   <Routes>
    //     <Route path={""} element={<></>}></Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
