import React from 'react'
import Nav from "../components/Nav";
import HeroAbt from "../components/HeroAbt";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
    <Nav />
    <HeroAbt heading="About Me" text="Dad. Husband. Developer. Veteran."/>
    <Footer />
    </div>
  )
}

export default About