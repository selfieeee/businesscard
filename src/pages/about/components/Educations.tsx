import React from "react";
import {Grid} from "@mui/material";
import {TimeLineItem} from "./TimeLineItem";
import {useTranslation} from "react-i18next";

export const Educations = () => {
  const { t }: any = useTranslation();
  const Educations = [
    {
      date: '2016-2019',
      title: t('About.Education.Title1'),
      text: t('About.Education.Text1')
    },
    {
      date: '2019-2021',
      title: t('About.Education.Title2'),
      text: t('About.Education.Text2')
    },
  ]
  return (
    <Grid className="education padd-15">
      <h3 className="title">{t("About.Education.Education")}</h3>
      <Grid className="row">
        <Grid className="timeline-box padd-15">
          <Grid className="timeline shadow-dark">
            {Educations.map((item, index) => (
              <TimeLineItem Data={item} key={index}/>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}