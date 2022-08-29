import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HeroPro from "../components/HeroPro";

const Project = () => {
  return (
    <div>
      <Nav />
      <HeroPro heading="Projects" text="My Recent Work" />
      <Footer />
    </div>
  )
}

export default Project