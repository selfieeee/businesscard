import React from "react";
import {Grid} from "@mui/material";
import {TimeLineItem} from "./TimeLineItem";

export const Experience = () => {
  const Experience = [
    {
      date: '2019-Present',
      title: '3rd category Engineer Programmer',
      text: 'Web and desktop solutions: desktop applications on base electron; websites on react typescript; parser scripts; layouts in Figma; setting up docker containers; ci/cd setup; creating tests in cypress'
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