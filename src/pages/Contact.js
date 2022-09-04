import React from 'react'
import Nav from "../components/Nav";
import HeroCon from "../components/HeroCon";
import Footer from "../components/Footer";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
    <Nav />
    <HeroCon heading="Contact Me" text="I would love to hear from you!" />
    <Form />
    <Footer />
    </div>
  )
}

export default Contact