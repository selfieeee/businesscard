import React from "react";
import {Grid} from "@mui/material";
import "./About.scss";

export const About = () => {
  const personalInfo = [
    {name: 'Birthday', value: '16 may 1999'},
    {name: 'Email', value: 'pmihajlov14@gmail.com'},
    {name: 'Age', value: '23'},
    {name: 'Phone', value: '+7 968 106 03 49'},
    {name: 'City', value: 'Omsk'}
  ]

  const skillInfo = [
    {name: 'CSS', value: 60},
    {name: 'JavaScript', value: 70},
    {name: 'HTML', value: 80},
    {name: 'TypeScript', value: 70},
    {name: 'Redux', value: 45}
  ]

  return (
    <section className="about section">
      <Grid className="container">
        <Grid className="row">
          <Grid className="section-title padd-15">
            <h2>About Me</h2>
          </Grid>
        </Grid>
        <Grid className="row">
          <Grid className="about-content padd-15">
            <Grid className="row">
              <Grid className="about-text padd-15">
                <h3>I’m Pavel Mikhailov and <span>Web Developer</span></h3>
                <p>
                  I'm a web Developer with experience for over 3 years.
                  My experience is in creating and maintaining websites.
                </p>
              </Grid>
            </Grid>
            <Grid className="row">
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
              <Grid className="skills padd-15">
                <Grid className="row">
                  {skillInfo.map((item) => (
                    <Grid className="skill-item padd-15">
                      <h5>{item.name}</h5>
                      <Grid className="progress">
                        <Grid className="progress-in" style={{width:`${item.value}%`}}></Grid>
                        <Grid className="skill-percent">{item.value}%</Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}