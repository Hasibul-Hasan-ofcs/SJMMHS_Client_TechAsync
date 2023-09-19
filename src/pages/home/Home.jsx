import React from "react";
import SetPageTitle from "./../../components/page_title/SetPageTitle";
import IntroCarousel from "./../../components/intro_carousel/IntroCarousel";

const Home = () => {
  SetPageTitle("Sattar Jute Mills Model High School");

  return (
    <div className="container px-2 md:px-3 mx-auto shadow-xl border py-3">
      <IntroCarousel></IntroCarousel>
    </div>
  );
};

export default Home;
