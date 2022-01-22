import React, { Fragment } from "react";
import {
  PartnersSection,
  HeroSection,
  IntroVideoSection,
  HighlightsSection,
} from "../components/sections";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <IntroVideoSection />
      <PartnersSection />
      <HighlightsSection />
    </Fragment>
  );
};

export default HomePage;
