import React from 'react'
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import HeroPro from "../components/HeroPro.js";
import WorkCard from "../components/WorkCard.js";

const Project = () => {
  return (
    <div>
      <Nav />
      <HeroPro heading="Projects" text="My Recent Work" />
      <WorkCard />
      <Footer />
    </div>
  )
}

export default Project