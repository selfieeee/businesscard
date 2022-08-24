import React from "react";
import {Grid} from "@mui/material";
import {Link} from "react-router-dom";
import "./Home.scss"

export const Home = () => {
  return (
    <section className="home section">
      <Grid className="container">
        <Grid className="row">
          <Grid className="home-info padd-15">
            <h3 className="hello">Hello, my name is <span className="name">Pavel Mikhailov</span></h3>
            <h3 className="my-proffession">I’m a <span className="typing">Web Developer</span></h3>
            <p>I'm a web Developer with experience for over 3
              years. My experience is creating websites, tests,
              setting up Docker containers, pipelines and more...
            </p>
            <Link to={"/contact"} className="btn hire-me">More About Me</Link>
          </Grid>
          <Grid className="home-img padd-15">
            <img src="" alt="" />
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}