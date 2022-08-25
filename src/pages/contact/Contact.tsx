import React from "react";
import {Grid, TextField, Typography} from "@mui/material";
import {Title} from "./components/Title";
import "./Contact.scss";
import {FaPhone} from "react-icons/fa";
import {FaMapMarkerAlt} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaGlobeEurope} from "react-icons/fa";

export const Contact = () => {
  const contactInfo = [
    {name: 'Phone', value: null, element: <Typography sx={{color: 'var(--text-black-700)'}} component="a" href="tel:+79681060349">+7 968 106 03 49</Typography>, icon: <FaPhone className="fa"/>},
    {name: 'Office', value: 'In Progress', icon: <FaMapMarkerAlt className="fa"/>},
    {name: 'Email', value: null, element: <Typography sx={{color: 'var(--text-black-700)'}} component="a" href="mailto:pmihajlov14@gmail.com">pmihajlov14@gmail.com</Typography>, icon: <FaEnvelope className="fa"/>},
    {name: 'Website', value: 'In Progress', icon: <FaGlobeEurope className="fa"/>}
  ]
  return (
    <section className="contact section">
      <Grid className="container">
        <Title />
        <h3 className="contact-title padd-15">Have You Any Questions?</h3>
      </Grid>
      <Grid className="row">
        {contactInfo.map((item) => (
          <Grid className="contact-info-item padd-15">
            <Grid className="icon">
              <i>{item.icon}</i>
            </Grid>
            <h4>{item.name}</h4>
            {item.value ? <p>{item.value}</p> : item.element}
          </Grid>
        ))}
      </Grid>
      <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
      <h4 className="contact-sub-title padd-15">I'M VERY RESPONSIVE TO MESSAGE</h4>
      <Grid className="row">
        <Grid className="contact-form padd-15">
          <Grid className="row">
            <Grid className="form-item col-6 padd-15">
              <Grid className="form-group">
                <input placeholder="Name" className="form-control" type="text" />
              </Grid>
            </Grid>
            <Grid className="form-item col-6 padd-15">
              <Grid className="form-group">
                <input placeholder="Email" className="form-control" type="email" />
              </Grid>
            </Grid>
          </Grid>
          <Grid className="row">
            <Grid className="form-item col-12 padd-15">
              <Grid className="form-group">
                <input placeholder="Subject" className="form-control" type="text" />
              </Grid>
            </Grid>
          </Grid>
          <Grid className="row">
            <Grid className="form-item col-12 padd-15">
              <Grid className="form-group">
                <textarea name="" className="form-control" id="" placeholder="Message"></textarea>
              </Grid>
            </Grid>
          </Grid>
          <Grid className="row">
            <Grid className="form-item col-12 padd-15">

              <button type="submit" className="btn">Send Message</button>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}