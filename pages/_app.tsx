import React, { Fragment } from "react";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import "../styles/main.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
