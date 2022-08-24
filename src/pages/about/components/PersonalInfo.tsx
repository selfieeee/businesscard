import React from 'react';
import {Grid} from "@mui/material";

export const PersonalInfo = () => {
  const personalInfo = [
    {name: 'Birthday', value: '16 may 1999'},
    {name: 'Email', value: 'pmihajlov14@gmail.com'},
    {name: 'Age', value: '23'},
    {name: 'Phone', value: '+7 968 106 03 49'},
    {name: 'City', value: 'Omsk'}
  ]
  return (
    <Grid className="personal-info padd-15">
      <Grid className="row">
        {personalInfo.map((item) => (
          <Grid className="info-item padd-15">
            <p>{item.name} : <span>{item.value}</span></p>
          </Grid>
        ))}
      </Grid>
      <Grid className="row">
        <Grid className="buttons padd-15">
          <a href="/contact" className="btn hire-me">More About Me</a>
        </Grid>
      </Grid>
    </Grid>
  )
}