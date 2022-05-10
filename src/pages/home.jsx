import React from "react";
import Benefits from "../components/home/benefits";
import Herosection from "../components/home/herosection";
import SalesForce from "../components/home/salesForce";
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
    </Layout>
  );
}

export default Home;
