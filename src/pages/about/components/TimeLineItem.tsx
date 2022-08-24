import React from 'react';
import {Grid} from "@mui/material";
import {FaCalendar} from "react-icons/fa";

interface Data {
  date: string,
  title: string,
  text: string
}

export const TimeLineItem = (Props: any) => {
  const Data = Props.Data
  return (
    <Grid className="timeline-item">
      <Grid className="circle-dot"></Grid>
      <h3 className="timeline-date">
        <i><FaCalendar className="fa fa-calendar"/></i> {Data.date}
      </h3>
      <h4 className="timeline-title">
        {Data.title}
      </h4>
      <p className="timeline-text">
        {Data.text}
      </p>
    </Grid>
  )
}