/** @format */

import React from "react";
import About from "../About/About";
import MailFeatures from "../About/MailFeatures";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Lastest from "../Latest/Lastest";
import Pricing from "../Pricing/Pricing";
import Support from "../Support/Support";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <About />
      <MailFeatures />
      <Pricing />
      <Support />
      <Lastest />
      <Footer />
    </div>
  );
};

export default HomeScreen;
