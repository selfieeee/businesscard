import React from "react";
import "./Services.scss";
import {Grid} from "@mui/material";
import {FaMobileAlt} from "react-icons/fa";
import {FaLaptopCode} from "react-icons/fa";
import {IoIosColorPalette} from "react-icons/io";
import {FaCode} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {HiSpeakerphone} from "react-icons/hi";

export const Services = () => {
  return (
    <section className="service section">
      <Grid className="container">
        <Grid className="row">
          <Grid className="section-title padd-15">
            <h2>Services</h2>
          </Grid>
        </Grid>

        <Grid className="row">

          <Grid className="service-item">
            <Grid className="service-item-inner">
              <Grid className="icon">
                <i><FaMobileAlt className="fa fa-mobile-alt"/></i>
              </Grid>
              <h4>Adaptive Layout</h4>
            </Grid>
          </Grid>

          <Grid className="service-item">
            <Grid className="service-item-inner">
              <Grid className="icon">
                <i><FaLaptopCode className="fa fa-laptop-code"/></i>
              </Grid>
              <h4>Linux</h4>
            </Grid>
          </Grid>

          <Grid className="service-item">
            <Grid className="service-item-inner">
              <Grid className="icon">
                <i><IoIosColorPalette className="fa io-ios-color-palette"/></i>
              </Grid>
              <h4>Sass/Scss</h4>
            </Grid>
          </Grid>

          <Grid className="service-item">
            <Grid className="service-item-inner">
              <Grid className="icon">
                <i><FaCode className="fa fa-code"/></i>
              </Grid>
              <h4>Code Style</h4>
            </Grid>
          </Grid>

          <Grid className="service-item">
            <Grid className="service-item-inner">
              <Grid className="icon">
                <i><FaSearch className="fa fa-search"/></i>
              </Grid>
              <h4>Search for info</h4>
            </Grid>
          </Grid>

          <Grid className="service-item">
            <Grid className="service-item-inner">
              <Grid className="icon">
                <i><HiSpeakerphone className="fa fa-speaker-phone"/></i>
              </Grid>
              <h4>Communication</h4>
            </Grid>
          </Grid>

        </Grid>

      </Grid>
    </section>
  )
}