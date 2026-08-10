import React from "react";

import ArrowRight from "../../../assets/tourCategories/ArrowRight.svg";
import categoryData from "../../../json/tourcategories.json";

// Images
import cruise from "../../../assets/tourCategories/cruise.jpg";
import hiking from "../../../assets/tourCategories/hiking.jpg";
import bird from "../../../assets/tourCategories/bird.jpg";
import wildlife from "../../../assets/tourCategories/wildlife.jpg";
import walking from "../../../assets/tourCategories/walking.jpg";

// SVG
import TravelIcon from "../../../assets/tourCategories/Travel.svg";
import NotebookIcon from "../../../assets/tourCategories/Notebook.svg";
import Vector1052 from "../../../assets/tourCategories/Vector1052.svg";


/* =========================================================
   IMAGE MAP
========================================================= */

const imageMap = {
  cruise,
  hiking,
  bird,
  wildlife,
  walking,
};


/* =========================================================
   CATEGORY DATA
========================================================= */

const categories = categoryData.map((item) => ({
  ...item,
  image: imageMap[item.image],
}));


/* =========================================================
   DESKTOP CARD POSITIONS
========================================================= */

const desktopCardPositions = [
  {
    transform: "translateY(42px) rotate(-8deg)",
  },
  {
    transform: "translateY(12px) rotate(-5deg)",
  },
  {
    transform: "translateY(-8px) rotate(0deg)",
  },
  {
    transform: "translateY(12px) rotate(5deg)",
  },
  {
    transform: "translateY(42px) rotate(8deg)",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const TourCategories = () => {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-white
        py-10
        sm:py-12
        md:py-14
        lg:h-[500px]
        lg:py-0
      "
    >

      {/* =====================================================
          BACKGROUND VECTOR
      ===================================================== */}

      <img
        src={Vector1052}
        alt=""
        className="
          pointer-events-none
          absolute inset-0
          h-full w-full
          object-cover
          select-none
          opacity-70
        "
      />


      {/* =====================================================
          DECORATIVE NOTEBOOK ICON
      ===================================================== */}

      <img
        src={NotebookIcon}
        alt=""
        className="
          pointer-events-none
          absolute
          right-[14%]
          top-[82px]
          z-0
          hidden
          w-[55px]
          select-none

          lg:block

          xl:right-[24%]
          xl:top-[76px]
          xl:w-[65px]

          2xl:right-[27%]
          2xl:top-[72px]
          2xl:w-[72px]
        "
      />


      {/* =====================================================
          DECORATIVE TRAVEL ICON
      ===================================================== */}

      <img
        src={TravelIcon}
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-[20px]
          left-[18px]
          z-0
          hidden
          w-[50px]
          select-none

          md:block

          lg:bottom-[28px]
          lg:left-[18px]
          lg:w-[55px]

          xl:left-[25px]
          xl:w-[60px]
        "
      />


      {/* =====================================================
          HEADING
      ===================================================== */}

      <div
        className="
          relative
          z-10
          px-4
          text-center

          lg:pt-[48px]
        "
      >

        {/* Small Heading */}
        <h4
          className="
            font-serif
            text-[22px]
            font-normal
            italic
            leading-none
            text-[#173F52]

            sm:text-[24px]

            md:text-[26px]

            lg:text-[22px]
          "
        >
          Wonderful Place For You
        </h4>


        {/* Main Heading */}
        <h2
          className="
            mt-3
            text-[34px]
            font-bold
            leading-none
            text-[#173F52]

            sm:text-[38px]

            md:text-[42px]

            lg:text-[40px]
          "
        >
          Tour Categories
        </h2>

      </div>


      {/* =====================================================
          CARDS CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mt-10
          w-full
          overflow-hidden
          pb-10

          sm:mt-12
          sm:pb-12

          md:mt-14

          lg:mt-[18px]
          lg:overflow-visible
          lg:pb-0
        "
      >


        {/* ===================================================
            DESKTOP
        =================================================== */}
<div
  className="
    mx-auto
    hidden
    h-[350px]
    w-full
    max-w-[1250px]
    items-start
    justify-between
    px-5
    lg:flex
  "
>
  {categories.map((item, index) => {
    const position =
      desktopCardPositions[index] ||
      desktopCardPositions[2];

    return (
      <div
        key={index}
        className="
          group
          flex
          w-[180px]
          flex-none
          flex-col
          items-center
          will-change-transform
          transition-transform
          duration-500
          ease-out
          hover:-translate-y-2

          xl:w-[190px]
          2xl:w-[200px]
        "
        style={{
          transform: position.transform,
        }}
      >
                {/* =========================================
                    IMAGE
                ========================================= */}
<div
          className="
            h-[180px]
            w-[180px]
            overflow-hidden
            rounded-[12px]
            bg-white

            xl:h-[190px]
            xl:w-[190px]

            2xl:h-[200px]
            2xl:w-[200px]
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>


                {/* =========================================
                    TITLE
                ========================================= */}

                <h3
          className="
            mt-3
            whitespace-nowrap
            text-center
            text-[17px]
            font-bold
            leading-tight
            text-[#143F4A]

            xl:text-[18px]

            2xl:text-[19px]
          "
        >
          {item.title}
        </h3>



                {/* =========================================
                    READ MORE BUTTON
                ========================================= */}

                <button
          className="
            mt-2
            flex
            h-[34px]
            w-[112px]
            items-center
            justify-center
            gap-1.5
            rounded-full
            border
            border-[#B8C8CC]
            bg-white
            text-[11px]
            font-normal
            text-[#143F4A]
            transition-all
            duration-300

            hover:border-[#143F4A]
            hover:bg-[#143F4A]
            hover:text-white

            xl:h-[36px]
            xl:w-[118px]
            xl:text-[12px]
          "
        >
          Read More

          <img
            src={ArrowRight}
            alt=""
            className="
              h-[12px]
              w-[12px]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>

      </div>
    );
  })}
</div>


        {/* ===================================================
            TABLET
        =================================================== */}

        <div
          className="
            hidden
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            px-4
            scrollbar-hide

            md:flex

            lg:hidden
          "
        >

          {categories.map((item, index) => (

            <div
              key={index}
              className="
                group
                w-[220px]
                flex-none
                snap-start

                sm:w-[240px]
              "
            >

              {/* Image */}
              <div
                className="
                  aspect-square
                  w-full
                  overflow-hidden
                  rounded-[24px]
                  p-2
                  shadow-md
                  transition-shadow
                  duration-300
                  group-hover:shadow-xl
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-full
                    w-full
                    rounded-[20px]
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>


              {/* Title */}
              <h3
                className="
                  mt-4
                  text-center
                  text-xl
                  font-bold
                  text-[#143F4A]

                  sm:text-[22px]
                "
              >
                {item.title}
              </h3>


              {/* Button */}
              <button
                className="
                  mx-auto
                  mt-3
                  flex
                  h-[42px]
                  w-[150px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  text-[14px]
                  text-[#143F4A]
                  transition-all
                  duration-300
                  hover:bg-[#143F4A]
                  hover:text-white

                  sm:h-[44px]
                  sm:w-[160px]
                "
              >
                Read More

                <img
                  src={ArrowRight}
                  alt=""
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </button>

            </div>

          ))}

        </div>


        {/* ===================================================
            MOBILE
        =================================================== */}

        <div
          className="
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            px-4
            scrollbar-hide

            md:hidden
          "
        >

          {categories.map((item, index) => (

            <div
              key={index}
              className="
                group
                w-full
                flex-none
                snap-center
              "
            >

              <div className="mx-auto max-w-[320px]">

                {/* Image */}
                <div
                  className="
                    overflow-hidden
                    rounded-[24px]
                    p-2
                    transition-shadow
                    duration-300
                    group-hover:shadow-xl
                  "
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-[240px]
                      w-full
                      rounded-[20px]
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                </div>


                {/* Title */}
                <h3
                  className="
                    mt-4
                    text-center
                    text-xl
                    font-bold
                    text-[#143F4A]
                  "
                >
                  {item.title}
                </h3>


                {/* Button */}
                <button
                  className="
                    mx-auto
                    mt-3
                    flex
                    h-[42px]
                    w-[150px]
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-gray-300
                    bg-white
                    text-[14px]
                    text-[#143F4A]
                    transition-all
                    duration-300
                    hover:bg-[#143F4A]
                    hover:text-white
                  "
                >
                  Read More

                  <img
                    src={ArrowRight}
                    alt=""
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};


export default TourCategories;
