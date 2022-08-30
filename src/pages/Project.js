import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HeroPro from "../components/HeroPro";
import WorkCard from "../components/WorkCard";

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