import React from "react";
import "./Services.scss";
import {Grid} from "@mui/material";
import VanillaTilt from 'vanilla-tilt';
import {Title} from "./components/Title";
import {ServiceItems} from "./components/ServiceItems";

export const Services = () => {
  React.useEffect(() => {
    const element: any = document.querySelectorAll(".service-item")
    VanillaTilt.init(element, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1
    });
  }, [])

  return (
    <section className="service section">
      <Grid className="container">
        <Title />
        <ServiceItems />
      </Grid>
    </section>
  )
}