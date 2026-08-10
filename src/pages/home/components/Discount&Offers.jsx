import { useRef, useState, useEffect } from "react";
import data from "./../../../json/discount&offers.json";

import family from "../../../assets/discountsOffers/family.png";
import baliCouple from "../../../assets/discountsOffers/bali-couple.png";
import travelWorld from "../../../assets/discountsOffers/travel-world.jpg";
import Travel_couple from "../../../assets/discountsOffers/Travel_couple.png";

import Vector1070 from "../../../assets/discountsOffers/Vector1070.svg";
import Vector1071 from "../../../assets/discountsOffers/Vector1071.svg";

/* =========================================================
   IMAGE MAP
========================================================= */

const images = {
  family,
  baliCouple,
  travelWorld,
  Travel_couple,
  Vector1070,
  Vector1071,
};

const AUTO_SLIDE_INTERVAL = 4000;

/* =========================================================
   FAMILY TYPE CARD
========================================================= */

const FamilyCard = ({ card }) => (
  <div className={`relative h-70 w-full overflow-hidden rounded-[30px] bg-gradient-to-r sm:h-72.5 lg:h-80 ${
      card.gradient || "from-[#6EC8DD] via-[#8BD9EB] to-[#46BADB]"
    }`}
  >
    {/* Background Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_32%,rgba(255,255,255,0.42),transparent_65%)]" />

    {/* Border Decoration */}
    <div className=" absolute left-4 top-5 h-[80%] w-[68%] rounded-[18px] border border-white/60 sm:left-5 sm:top-6 sm:h-[82%] sm:w-[70%]  md:left-5 lg:left-5.75 lg:top-[31px] lg:h-[264px] lg:w-[302px]"/>

    {/* Content */}
    <div className="absolute left-4 top-9 z-20 flex h-[185px] w-[56%] flex-col items-center gap-3 text-center  sm:left-5 sm:top-11 sm:w-[54%]  md:w-[52%] lg:left-[30px] lg:top-[61px] lg:h-[210px] lg:w-[238px] lg:gap-[18px]" >
      {/* Save Text */}
      <p className=" font-medium italic leading-none text-[#1C1C1C] text-[clamp(24px,5vw,34px)]">
        {card.saveText}
      </p>

      {/* Discount */}
      <h2 className=" text-[clamp(30px,6vw,42px)] font-bold leading-none   text-[#1C1C1C]">
        {card.discount}
      </h2>

      {/* Tour */}
      <p className="text-[clamp(16px,3.8vw,24px)] font-medium leading-none  text-[#202020]" >
        {card.tour}
      </p>

      {/* Button */}
      <button
        className="mt-auto flex h-[44px] w-[140px] items-center justify-center gap-2 rounded-full  bg-[#163F50]
        text-[15px] font-semibold text-white  transition hover:bg-[#103442] sm:h-[50px] sm:w-[160px] sm:text-[16px] md:h-[46px] md:w-[145px] md:text-[15px]  lg:h-[58px] lg:w-[178px]  lg:px-[22px] lg:py-[14px] lg:text-[18px]"
      >
        {card.button}

        <span className="text-[18px] lg:text-[22px]">→</span>
      </button>
    </div>

    {/* Family Image */}
    <img
      src={images[card.image]}
      alt={card.tour}
      className="absolute bottom-0 right-[-15px] z-30 h-[205px] w-auto object-contain  sm:right-[-20px] sm:h-[245px] md:right-[-40px] md:h-[240px] lg:right-[-40px] lg:h-[285px]"
    />
  </div>
);

/* =========================================================
   BALI TYPE CARD
========================================================= */

const BaliCard = ({ card }) => (
  <div
    className="relative h-70 w-full overflow-hidden rounded-[22px] bg-[linear-gradient(90deg,#E88F00_0%,#F3A000_45%,#F7C65C_100%)] sm:h-72.5 lg:h-80">
    {/* Title */}
    <div
      className=" absolute left-[6%] top-[8%] z-20 sm:top-[9%] md:top-[10%] lg:top-[10%] ">
      <h2 className="text-[clamp(24px,3.2vw,34px)] font-bold leading-[1.05] text-white">
        {card.title1}
      </h2>

      <h2 className="text-[clamp(24px,3.2vw,34px)] font-bold leading-[1.05] text-white">
        {card.title2}
      </h2>
    </div>

    {/* Price Section */}
    <div
      className="absolute left-[6%] top-[40%] z-20 flex items-start  sm:top-[40%] md:top-[42%] lg:top-[44%]">
      {/* Left Vector */}
      <img
        src={images[card.leftVector]}
        alt=""
        className=" mt-2 h-[58px] w-auto shrink-0  sm:h-[72px] md:h-[72px] lg:h-[86px]"/>

      <div className="relative px-2 sm:px-3 md:px-4">
        {/* Price Label */}
        <div className="mb-1 flex items-center gap-2">
          <span
            className="text-[13px] font-semibold tracking-[0.3px] text-white sm:text-[16px] md:ml-[-8px] md:text-[16px] lg:text-[18px]"
          >
            {card.priceLabel}
          </span>
        </div>

        {/* Price */}
        <h3
          className=" font-serif text-[clamp(22px,3vw,34px)] font-bold leading-none  text-[#FFF33A] md:ml-[-17px]"
        >
          {card.price}
        </h3>

        {/* Per Person */}
        <p
          className="mt-2 text-[13px] font-semibold text-white sm:mt-3 sm:text-[16px] md:ml-[-20px] md:text-[16px] lg:text-[18px]"
        >
          {card.perPerson}
        </p>
      </div>

      {/* Right Vector */}
      <img
        src={images[card.rightVector]}
        alt=""
        className="mt-2 -ml-2 h-[58px] w-auto shrink-0 sm:-ml-2 sm:h-[74px] md:-ml-3 md:h-[74px]  lg:-ml-4 lg:h-[88px] "
      />
    </div>

    {/* Days Badge */}
    <div
      className=" absolute left-[42%] top-[34%] z-30 sm:left-[40%] sm:top-[35%] md:left-[45%] md:top-[35.5%] lg:left-[220px] lg:top-[36%]"
    >
      <div
        className="relative h-[60px] w-[60px] sm:h-[68px] sm:w-[68px] md:h-[72px] md:w-[60px] lg:h-[74px] lg:w-[74px]"
      >
        {/* Badge Shape */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFF000"
            d="
              M50 6
              C63 6 73 13 77 24
              C82 26 98 38 94 47
              C96 61 87 71 75 75
              C72 84 59 93 50 94
              C37 94 27 87 25 74
              C13 71 4 61 6 47
              C4 40 20 29 20 24
              C27 13 37 6 50 6Z
            "
          />
        </svg>

        {/* Badge Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h3
            className="font-serif text-[18px] font-bold leading-none sm:text-[20px] lg:text-[22px]"
          >
            {card.days}
          </h3>

          <p
            className=" mt-[2px] text-[10px] font-semibold leading-none sm:text-[12px] lg:text-[13px]"
          >
            {card.daysLabel}
          </p>
        </div>
      </div>
    </div>

    {/* Dashed Circle */}
    <div
      className="absolute right-[-12%] top-[35%] z-10 h-[150px] w-[150px] rounded-full border border-dashed border-white/40 sm:h-[185px] sm:w-[185px] 
      md:right-[-10%] md:h-[210px] md:w-[210px] lg:right-[-8%] lg:h-[230px] lg:w-[230px]"
    />

    {/* Dashed Half Circle */}
    <div
      className="absolute right-[4%] top-[60%]  z-10 h-[80px] w-[80px] rotate-[18deg] rounded-full border-l border-dashed border-white/40 
      sm:h-[95px] sm:w-[95px] md:right-[4.5%] md:h-[108px] md:w-[108px] lg:right-[5%] lg:h-[120px] lg:w-[120px]"
    />

    {/* Couple Image */}
    <img
      src={images[card.coupleImage]}
      alt=""
      className="absolute bottom-[-18px] right-[-5px] z-20 h-auto w-[190px] object-contain sm:w-[195px] md:right-[-15px] md:-bottom-[30px]  
      md:h-[320px] md:w-[195px]  lg:-right-[10px] lg:-bottom-[35px] lg:h-[320px] lg:w-[233px]"
    />
  </div>
);

/* =========================================================
   TRAVEL TYPE CARD
========================================================= */

const TravelCard = ({ card }) => (
  <div className="relative h-70 w-full overflow-hidden rounded-[24px] sm:h-72.5 lg:h-80">
    {/* Background */}
    <div className="absolute inset-0 bg-[#FBC71D]" />

    {/* Background Image */}
    <div
      className="absolute left-0 top-0 z-10 h-full w-[62%] overflow-hidden [clip-path:polygon(0_0,82%_0,100%_100%,0_100%)] sm:w-[64%] lg:w-[332px]"
    >
      <img
        src={images[card.backgroundImage]}
        alt="Travel Around The World"
        className="h-full w-full object-cover"
      />
    </div>

    {/* Couple */}
    <img
      src={images[card.coupleImage]}
      alt="Couple"
      className=" absolute bottom-[-4%] left-[50%] z-40 h-auto w-[60%] max-w-[255px]  object-contain sm:left-[52%] sm:w-[44%] lg:left-[270px] lg:w-[255px]"
    />

    {/* Discount Badge */}
    <div
      className=" absolute left-[46%] top-[7%] z-50 flex h-13 w-13 -rotate-[4deg] flex-col items-center justify-center rounded-full border-2
       border-white   bg-[#14A8DB]  text-white shadow-lg  sm:left-[47%] sm:h-15 sm:w-15 lg:left-[246px] lg:h-17 lg:w-17 "
    >
      <span
        className="text-sm font-bold leading-none sm:text-[17px] lg:text-[19px]">
        {card.discount}
      </span>

      <span
        className="mt-0.5 text-[8px] font-semibold leading-none sm:text-[9px] lg:text-[10px]">
        {card.discountLabel}
      </span>
    </div>
  </div>
);

/* =========================================================
   TYPE → COMPONENT MAP
========================================================= */

const cardComponents = {
  family: FamilyCard,
  bali: BaliCard,
  travel: TravelCard,
};

/* =========================================================
   RENDER CARD
========================================================= */

const renderCard = (card) => {
  const Component = cardComponents[card.type];

  if (!Component) return null;

  return <Component key={card.id} card={card} />;
};

/* =========================================================
   CHUNK ARRAY
========================================================= */

const chunkArray = (arr, size) => {
  const chunks = [];

  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }

  return chunks;
};

/* =========================================================
   SLIDER DOTS
========================================================= */

const SliderDots = ({ slides, currentSlide, goToSlide }) => {
  if (slides.length <= 1) return null;

  return (
    <div className="mt-8 flex items-center justify-center gap-3">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => goToSlide(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`
            h-2.5 rounded-full
            transition-all duration-300
            ${
              currentSlide === i
                ? "w-8.5 bg-[#153E4D]"
                : "w-2.5 bg-gray-300 hover:bg-gray-400"
            }
          `}
        />
      ))}
    </div>
  );
};

/* =========================================================
   SCROLL SLIDER HOOK
========================================================= */

const useScrollSlider = (slidesLength) => {
  const containerRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  /* Go To Slide */
  const goToSlide = (index) => {
    const el = containerRef.current;

    if (!el || slidesLength === 0) return;

    const target = ((index % slidesLength) + slidesLength) % slidesLength;

    el.scrollTo({
      left: target * el.clientWidth,
      behavior: "smooth",
    });
  };

  /* Sync Current Slide With Scroll */
  useEffect(() => {
    const el = containerRef.current;

    if (!el) return;

    let debounceId;

    const handleScroll = () => {
      clearTimeout(debounceId);

      debounceId = setTimeout(() => {
        if (!el.clientWidth) return;

        const index = Math.round(el.scrollLeft / el.clientWidth);

        setCurrentSlide(index);
      }, 100);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", handleScroll);

      clearTimeout(debounceId);
    };
  }, []);

  /* Auto Slide */
  useEffect(() => {
    if (slidesLength <= 1) return;

    const timer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [slidesLength, currentSlide]);

  /* Keyboard Navigation */
  useEffect(() => {
    if (slidesLength <= 1) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        goToSlide(currentSlide + 1);
      } else if (e.key === "ArrowLeft") {
        goToSlide(currentSlide - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slidesLength, currentSlide]);

  return {
    containerRef,
    currentSlide,
    goToSlide,
  };
};

/* =========================================================
   MOBILE VIEW
========================================================= */

const MobileView = ({ cards }) => {
  const cardsPerSlide = 1;

  const slides = chunkArray(cards, cardsPerSlide);

  const { containerRef, currentSlide, goToSlide } = useScrollSlider(
    slides.length,
  );

  return (
    <div className="block sm:hidden">
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden "
      >
        {slides.map((slideCards, i) => (
          <div
            key={i}
            className="grid w-full flex-shrink-0 snap-start grid-cols-1 gap-5 px-2"
          >
            {slideCards.map(renderCard)}
          </div>
        ))}
      </div>

      <SliderDots
        slides={slides}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
      />
    </div>
  );
};

/* =========================================================
   TABLET VIEW
========================================================= */

const TabletView = ({ cards }) => {
  const cardsPerSlide = 2;

  const slides = chunkArray(cards, cardsPerSlide);

  const { containerRef, currentSlide, goToSlide } = useScrollSlider(
    slides.length,
  );

  return (
    <div className="hidden sm:block lg:hidden">
      <div
        ref={containerRef}
        className=" flex overflow-x-auto snap-x snap-mandatory scroll-smooth
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {slides.map((slideCards, i) => (
          <div
            key={i}
            className="grid w-full flex-shrink-0 snap-start grid-cols-2 gap-6 px-3 "
          >
            {slideCards.map(renderCard)}
          </div>
        ))}
      </div>

      <SliderDots
        slides={slides}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
      />
    </div>
  );
};

/* =========================================================
   DESKTOP VIEW
========================================================= */

const DesktopView = ({ cards }) => {
  const cardsPerSlide = 3;

  const slides = chunkArray(cards, cardsPerSlide);

  const { containerRef, currentSlide, goToSlide } = useScrollSlider(
    slides.length,
  );

  return (
    <div className="hidden lg:block">
      <div
        ref={containerRef}
        className=" flex overflow-x-auto  snap-x snap-mandatory  scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none]  [&::-webkit-scrollbar]:hidden "
      >
        {slides.map((slideCards, i) => (
          <div
            key={i}
            className=" grid w-full flex-shrink-0 snap-start grid-cols-3 gap-[27px] px-3" >
            {slideCards.map(renderCard)}
          </div>
        ))}
      </div>

      <SliderDots
        slides={slides}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
      />
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const DiscountsOffers = () => {
  const cards = data.cards;

  return (
    <section
      className="w-full bg-white py-14  sm:py-16  md:py-20  lg:py-24"  >
      {/* ================= HEADING ================= */}

      <div className=" mb-10 px-4 text-center sm:mb-12 md:mb-16 ">
        {/* Subtitle */}
        <h4 className=" text-[clamp(26px,5vw,42px)]  font-normal text-[#184B5D] " >
          {data.heading.subTitle}
        </h4>

        {/* Main Title */}
        <h2 className="mt-2 text-[clamp(34px,7vw,76px)] font-bold leading-[100%]  text-[#163F52]  sm:mt-3 ">
          {data.heading.title}
        </h2>
      </div>

      {/* ================= CARDS ================= */}

      <div className="mx-auto max-w-[1548px] px-4 sm:px-6 ">
        <MobileView cards={cards} />

        <TabletView cards={cards} />

        <DesktopView cards={cards} />
      </div>
    </section>
  );
};

export default DiscountsOffers;
