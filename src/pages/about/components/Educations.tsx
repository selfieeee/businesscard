import React from "react";
import {Grid} from "@mui/material";
import {TimeLineItem} from "./TimeLineItem";

export const Educations = () => {
  const Educations = [
    {
      date: '2016-2019',
      title: 'Omsk Industrial and Economic College',
      text: 'I studied at the Faculty of Applied Computer Science'
    },
    {
      date: '2019-2021',
      title: 'Omsk State Technical University',
      text: 'I studied at the Faculty of Information Technology and Computer Systems'
    },
  ]
  return (
    <Grid className="education padd-15">
      <h3 className="title">Education</h3>
      <Grid className="row">
        <Grid className="timeline-box padd-15">
          <Grid className="timeline shadow-dark">
            {Educations.map((item) => (
              <TimeLineItem Data={item}/>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}