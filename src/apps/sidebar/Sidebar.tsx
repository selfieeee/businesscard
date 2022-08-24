import React from "react";
import {Grid, List, ListItem} from "@mui/material";
import { Link } from "react-router-dom";
import {FaBriefcase, FaComments, FaHome, FaList, FaUser} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <Grid className="aside">
      <Grid className="logo">
        <Link to={"/home"}><span>S</span>elfie</Link>
      </Grid>
      <Grid className="nav-toggler">
        <span></span>
      </Grid>
      <List className="nav">
        <ListItem><Link to={"/home"} className="active"><i><FaHome className="fa fa-home"/></i> Home</Link></ListItem>
        <ListItem><Link to={"/about"}><i><FaUser className="fa fa-user"/></i> About</Link></ListItem>
        <ListItem><Link to={"/services"}><i><FaList className="fa fa-list"/></i> Services</Link></ListItem>
        <ListItem><Link to={"/portfolio"}><i><FaBriefcase className="fa fa-briefcase"/></i> Portfolio</Link></ListItem>
        <ListItem><Link to={"/contact"}><i><FaComments className="fa fa-comments"/></i> Contact</Link></ListItem>
      </List>
    </Grid>
  )
}
