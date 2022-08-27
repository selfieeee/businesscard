import React from 'react';
import {Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

export const Title = () => {
  const { t }: any = useTranslation();
  return (
    <Grid className="row">
      <Grid className="section-title padd-15">
        <h2>{t("ContactMe.Contact Me")}</h2>
      </Grid>
    </Grid>
  )
}