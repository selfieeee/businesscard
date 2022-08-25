import React from "react";
import {Grid} from "@mui/material";


export const PersonalSkills = () => {
  const skillInfo = [
    {name: 'CSS', value: 60},
    {name: 'JavaScript', value: 70},
    {name: 'HTML', value: 80},
    {name: 'TypeScript', value: 70},
    {name: 'Redux', value: 45},
    {name: 'React', value: 65},
  ]
  return (
    <Grid className="skills padd-15">
      <Grid className="row">
        {skillInfo.map((item, index) => (
          <Grid className="skill-item padd-15" key={index}>
            <h5>{item.name}</h5>
            <Grid className="progress">
              <Grid className="progress-in" style={{width:`${item.value}%`}}></Grid>
              <Grid className="skill-percent">{item.value}%</Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}