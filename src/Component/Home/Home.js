import React from "react";
import Description from "../Description/Description";
import Services from "../Services/Services";
import Specialities from "../Specialities/Specialities";
import Testimonial from "../Testimonial/Testimonial";
import TopItems from "../TopItems/TopItems";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Description />
      <TopItems></TopItems>
      <Specialities></Specialities>
      <Services></Services>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
