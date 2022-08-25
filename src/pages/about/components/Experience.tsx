import React from "react";
import {Grid} from "@mui/material";
import {TimeLineItem} from "./TimeLineItem";

export const Experience = () => {
  const Experience = [
    {
      date: '2019-Present',
      title: '3rd category Software Engineer',
      text: 'Web and desktop solutions: Electron JS desktop applications; websites using react and typescript; parser scripts; Figma layouts; setting up docker containers; ci/cd setup; creating tests with cypress'
    }
  ]
  return (
    <Grid className="experience padd-15">
      <h3 className="title">Experience</h3>
      <Grid className="row">
        <Grid className="timeline-box padd-15">
          <Grid className="timeline shadow-dark">
            {Experience.map((item, index) => (
              <TimeLineItem Data={item} key={index}/>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}