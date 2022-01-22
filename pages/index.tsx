import React, { Fragment } from "react";
import {
  PartnersSection,
  HeroSection,
  IntroVideoSection,
} from "../components/sections";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <IntroVideoSection />
      <PartnersSection />
    </Fragment>
  );
};

export default HomePage;
