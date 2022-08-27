import {Grid} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";

export const Title = () => {
  const { t }: any = useTranslation();
  return (
    <Grid className="row">
      <Grid className="section-title padd-15">
        <h2>{t("Services.Services")}</h2>
      </Grid>
    </Grid>
  )
}