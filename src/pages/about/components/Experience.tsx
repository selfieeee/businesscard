import React from "react";
import {Grid} from "@mui/material";
import {TimeLineItem} from "./TimeLineItem";
import {useTranslation} from "react-i18next";

export const Experience = () => {
  const { t }: any = useTranslation();
  const Experience = [
    {
      date: '2019-Present',
      title: t('About.Experience.Title1'),
      text: t('About.Experience.Text1')
    }
  ]
  return (
    <Grid className="experience padd-15">
      <h3 className="title">{t("About.Experience.Experience")}</h3>
      <Grid className="row">
        <Grid className="timeline-box padd-15">
          <Grid className="timeline shadow-dark">
            {Experience.map((item, index) => (
              <TimeLineItem Data={item} key={index}/>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}