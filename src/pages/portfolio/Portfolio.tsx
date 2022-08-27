import React from "react";
import {Grid} from "@mui/material";
import {Title} from "./components/Title";
import "./Portfolio.scss";
import {useTranslation} from "react-i18next";

export const Portfolio = () => {
  const { t }: any = useTranslation();
  return (
    <section className="portfolio section">
      <Grid className="container">
        <Title />
        <Grid className="row">
          <Grid className="portfolio-heading padd-15">
            <h2>{t("Portfolio.My Last Projects")} :</h2>
          </Grid>
        </Grid>
        {/*<Grid className="row">*/}
        {/*  <Grid className="portfolio-item padd-15">*/}
        {/*    <Grid className="portfolio-item-inner shadow-dark">*/}
        {/*      <Grid className="portfolio-img">*/}
        {/*        <img src="" alt="" />*/}
        {/*      </Grid>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*  <Grid className="portfolio-item padd-15">*/}
        {/*    <Grid className="portfolio-item-inner shadow-dark">*/}
        {/*      <Grid className="portfolio-img">*/}
        {/*        <img src="" alt="" />*/}
        {/*      </Grid>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*  <Grid className="portfolio-item padd-15">*/}
        {/*    <Grid className="portfolio-item-inner shadow-dark">*/}
        {/*      <Grid className="portfolio-img">*/}
        {/*        <img src="" alt="" />*/}
        {/*      </Grid>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*  <Grid className="portfolio-item padd-15">*/}
        {/*    <Grid className="portfolio-item-inner shadow-dark">*/}
        {/*      <Grid className="portfolio-img">*/}
        {/*        <img src="" alt="" />*/}
        {/*      </Grid>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*  <Grid className="portfolio-item padd-15">*/}
        {/*    <Grid className="portfolio-item-inner shadow-dark">*/}
        {/*      <Grid className="portfolio-img">*/}
        {/*        <img src="" alt="" />*/}
        {/*      </Grid>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*  <Grid className="portfolio-item padd-15">*/}
        {/*    <Grid className="portfolio-item-inner shadow-dark">*/}
        {/*      <Grid className="portfolio-img">*/}
        {/*        <img src="" alt="" />*/}
        {/*      </Grid>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</Grid>*/}
      </Grid>
    </section>
  )
}