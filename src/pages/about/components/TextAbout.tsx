import React from 'react';
import {Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

export const TextAbout = () => {
  const { t }: any = useTranslation();
  return (
    <Grid className="row">
      <Grid className="about-text padd-15">
        <h3>{t("About.I’m Pavel Mikhailov and")} <span>{t("About.Web Developer")}</span></h3>
        <p>{t("About.Text")}</p>
      </Grid>
    </Grid>
  )
}