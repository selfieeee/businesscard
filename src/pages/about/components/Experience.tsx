import React from "react";
import {Grid} from "@mui/material";
import {TimeLineItem} from "./TimeLineItem";

export const Experience = () => {
  const Experience = [
    {
      date: '2019-2020',
      title: 'Front-end',
      text: 'I worked in a team on a React-based project, it was my first project.'
    },
    {
      date: '2021-2022',
      title: 'Technology',
      text: 'I have been improving my knowledge in Javascript, TypeScript, React, TypeScript, Redux, SASS preprocessor, putting my knowledge into practice in a working project.'
    },
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