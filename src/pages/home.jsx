import React from "react";
import Footer from "../components/footer";
import Benefits from "../components/home/benefits";
import Delivery from "../components/home/delivery";
import Faq from "../components/home/faq";
import Herosection from "../components/home/herosection";
import SalesForce from "../components/home/salesForce";
import StoreOverview from "../components/home/storeOverview";
import WhatWeDo from "../components/home/whatWeDo";
import Layout from "../components/layout";
import Navbar from "../components/navbar";

function Home() {
  return (
    <Layout>
      <Navbar />
      <Herosection />
      <WhatWeDo />
      <SalesForce />
      <Benefits />
      <Delivery />
      <StoreOverview />
      <Faq />
      <Footer />
    </Layout>
  );
}

export default Home;
