import React from "react";
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
    </Layout>
  );
}

export default Home;
