import React from "react";
import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import OurTeam from "./components/OurTeam";

const page = () => {
  return (
    <div>
      <Hero />
      <FeaturedWork />
      <Services/>
      <Testimonials/>
      <OurTeam/>
      <Contact/>
     
    </div>
  );
};

export default page;
