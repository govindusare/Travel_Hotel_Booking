import React from "react";
import tourguide from "../../../json/tourguide.json";

import TourGuide1 from "../../../assets/TourGuideimages/TourGuide1.png";
import TourGuide2 from "../../../assets/TourGuideimages/TourGuide2.png";
import TourGuide3 from "../../../assets/TourGuideimages/TourGuide3.png";
import TourGuide4 from "../../../assets/TourGuideimages/TourGuide4.png";

import Whatappicon from "../../../assets/TourGuideimages/Whatappicon.svg";
import Twittericon from "../../../assets/TourGuideimages/Twittericon.svg";
import Instragramicon from "../../../assets/TourGuideimages/Instragramicon.svg";

import worldicon from "../../../assets/TourGuideimages/worldicon.png";
import locationicon from "../../../assets/TourGuideimages/locationicon.png";
import tourguidebg from "../../../assets/TourGuideimages/tourguidebg.jpg";

const images = {
  "TourGuide1.png": TourGuide1,
  "TourGuide2.png": TourGuide2,
  "TourGuide3.png": TourGuide3,
  "TourGuide4.png": TourGuide4,
};

const icons = {
  "whatsapp.svg": Whatappicon,
  "twitter.svg": Twittericon,
  "instagram.svg": Instragramicon,
};

const TourGuide = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-20 lg:pt-24 pb-16">
      <img
        src={locationicon}
        alt="location"
        className="hidden sm:block absolute right-4 sm:right-20 top-1 sm:top-10 w-12 sm:w-14 opacity-20 z-20"
      />

      {/* Heading */}
      <div className="max-w-[1380px] mx-auto px-5 relative z-10">
        <div className="text-center">
          <p className="italic font-serif text-[#174B5B] text-2xl">
            Meet With Guide
          </p>
          <h2 className="mt-3 text-[#174B5B] text-5xl lg:text-[64px] font-bold leading-tight">
            Our Best Tour Guider
          </h2>
        </div>
      </div>

      <div className="relative isolate w-full mt-16">
        <img
          src={tourguidebg} alt="guidebg"
          className=" absolute inset-x-0 top-1/2 bottom-0 z-0 w-full h-2/2 object-cover object-center  pointer-events-none "
        />

        <img
          src={worldicon}
          alt="world"
          className="hidden md:block absolute -top-4 left-2 sm:left-4 lg:left-8 w-10 sm:w-12 opacity-20 z-10"
        />

        {/* Cards */}
        <div className="max-w-[1380px] mx-auto px-5 relative z-10">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-y-8 gap-x-4 sm:gap-x-6 justify-items-center "
          >
            {tourguide.map((guide) => (
              <div
                key={guide.id}
                className="relative w-[220px] sm:w-[210px] lg:w-[235px] h-[340px] sm:h-[370px] lg:h-[400px] rounded-t-[150px]
                rounded-b-[150px] overflow-hidden bg-[#1CA8CB] shadow-xl group transition-all duration-500 hover:-translate-y-2 "
              >
                {/* Guide Image */}
                <img
                  src={images[guide.image]}
                  alt={guide.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom Gradient */}
                <div
                  className="absolute bottom-0 left-0  w-full h-[42%] bg-gradient-to-t  from-black/95  via-black/20 to-transparent "
                />

                {/* Content */}
                <div className="absolute bottom-4 sm:bottom-7 left-0 w-full px-3 text-center text-white">
                  <h3 className="text-lg sm:text-2xl lg:text-[26px] font-bold leading-tight">
                    {guide.name}
                  </h3>

                  <p className="text-[11px] sm:text-sm lg:text-[15px] mt-1 sm:mt-2 opacity-95 leading-snug">
                    {guide.designation}
                  </p>

                  <div className="flex justify-center gap-2 sm:gap-4 lg:gap-5 mt-2 sm:mt-4 lg:mt-5">
                    <img
                      src={icons[guide.whatapp]}
                      alt=""
                      className="w-3.5 h-3.5 sm:w-5 sm:h-5 cursor-pointer transition-transform duration-300 hover:scale-125"
                    />
                    <img
                      src={icons[guide.twitter]}
                      alt=""
                      className="w-3.5 h-3.5 sm:w-5 sm:h-5 cursor-pointer transition-transform duration-300 hover:scale-125"
                    />
                    <img
                      src={icons[guide.instagram]}
                      alt=""
                      className="w-3.5 h-3.5 sm:w-5 sm:h-5 cursor-pointer transition-transform duration-300 hover:scale-125"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourGuide;