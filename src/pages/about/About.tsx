import React from "react";
import {Grid} from "@mui/material";
import "./About.scss";
import {Title} from "./components/Title";
import {TextAbout} from "./components/TextAbout";
import {PersonalInfo} from "./components/PersonalInfo";
import {PersonalSkills} from "./components/PersonalSkills";
import {Educations} from "./components/Educations";
import {Experience} from "./components/Experience";

export const About = () => {
  return (
    <section className="about section">
      <Grid className="container">
        <Title />
        <Grid className="row">
          <Grid className="about-content padd-15">
            <TextAbout />
            <Grid className="row">
              <PersonalInfo />
              <PersonalSkills />
            </Grid>
            <Grid className="row">
              <Educations />
              <Experience />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}