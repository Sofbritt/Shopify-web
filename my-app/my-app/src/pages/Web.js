import React from "react";
import Carousel from "../webFront/components/carousel/Carousel";
import SpecialOffers from "../webFront/components/specialOffers/SpecialOffers";
import SeasonsOffers from "../webFront/components/seasonsOffers/SeasonsOffers";
import Cosmetics from "../webFront/components/cosmetics/Cosmetics";
import News from "../webFront/components/news/News";
import Clothes from "../webFront/components/clothes/Clothes";
import SkinCare from "../webFront/components/scincare/SkinCare";
import Feedback from "../webFront/components/feedback/Feedback";
import Others from "../webFront/components/others/Others";
import { useEffect } from "react";


function Web() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Carousel />
      <SpecialOffers />
      <SeasonsOffers />
      <Cosmetics />
      <Clothes />
      <SkinCare />
      <Others />
      <News />
      <Feedback />
    </div>
  );
}

export default Web;
