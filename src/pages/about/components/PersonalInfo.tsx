import React from 'react';
import {Grid, Typography} from "@mui/material";

export const PersonalInfo = () => {
  const personalInfo = [
    {name: 'Birthday', value: '16 may 1999'},
    {name: 'Email', value: null, element: <Typography sx={{color: 'var(--text-black-700)'}} component="a" href="mailto:pmihajlov14@gmail.com">pmihajlov14@gmail.com</Typography>},
    {name: 'Age', value: '23'},
    {name: 'Phone', value: null, element: <Typography sx={{color: 'var(--text-black-700)'}} component="a" href="tel:+79681060349">+7 968 106 03 49</Typography>},
    {name: 'City', value: 'Omsk'}
  ]
  return (
    <Grid className="personal-info padd-15">
      <Grid className="row">
        {personalInfo.map((item, index) => (
          <Grid className="info-item padd-15" key={index}>
            <p>{item.name} : <span>{item.value ? item.value : item.element}</span></p>
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