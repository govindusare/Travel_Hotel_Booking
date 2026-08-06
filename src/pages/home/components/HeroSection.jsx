   import { useState } from "react";
   import planeIcon from "../../../assets/heroicon/airplane-01.png";
   import hotelIcon from "../../../assets/heroicon/hotel-01.png";
   import trainIcon from "../../../assets/heroicon/train.png";
   import busIcon from "../../../assets/heroicon/bus-03.png";
   import carIcon from "../../../assets/heroicon/car-03.png";

   import gpsIcon from "../../../assets/heroicon/gps-01.png";
   import calendarIcon from "../../../assets/heroicon/calendar-03.png";
   import userIcon from "../../../assets/heroicon/user.png";
   import searchIcon from "../../../assets/heroicon/search-01.png";

   import arrowRight from "../../../assets/heroicon/arrow-right.png";
   import arrowUp from "../../../assets/heroicon/arrow-up.png";
   import arrowDown from "../../../assets/heroicon/arrow-down.png";
   import arrowLeft from "../../../assets/heroicon/arrow-left.png";

    // Import local assets
    import heroImg from "../../../assets/heroimg/heroo.png";
    import slid1 from "../../../assets/heroimg/slid1.jpg";
    import slid2 from "../../../assets/heroimg/slid2.jpg";

    const Hero = () => {
    const [activeTab, setActiveTab] = useState("flights");
    const [activeSlide, setActiveSlide] = useState(0);

    const goPrev = () =>
        setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    const goNext = () =>
        setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    const slides = [
        {
        img: heroImg,
        subtitle: "Let's Feel Your Trip",
        title: "Discover The World With Our Guide At A Time.",
        },
        {
        img: slid1,
        subtitle: "Breathtaking Views",
        title: "Explore The Unexplored Mountains.",
        },
        {
        img: slid2,
        subtitle: "Peaceful Retreats",
        title: "Rejuvenate Near Crystal Waters.",
        },
      ];

    const tabs = [
        { id: "flights", label: "Flights", icon: planeIcon },
        { id: "hotels", label: "Hotels", icon: hotelIcon },
        { id: "trains", label: "Trains", icon: trainIcon },
        { id: "bus", label: "Bus", icon: busIcon },
        { id: "car", label: "Car Rental", icon: carIcon },
      ];

    return (
        <section
        className="layout relative w-full max-w-[1728px] min-h-[820px] sm:min-h-[900px] lg:h-[900px] mx-auto bg-cover bg-center transition-all 
        duration-700 ease-in-out flex flex-col justify-between overflow-hidden "
        style={{
            backgroundImage: `url(${slides[activeSlide].img})`,
        }}
        >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55"></div>

        {/* Content wrapper */}
        <div className="relative max-w-10xl mx-auto w-full h-full flex flex-col justify-between px-6 md:px-0 pt-32 pb-0 z-10 flex-grow">

            {/* Main Text Content and Right Carousel Selector */}
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full mt-5 md:mt-16 gap-8 md:gap-10">
            {/* Text Area */}
            <div className="text-white max-w-2xl">
                <p className="italic text-2xl md:text-3xl lg:text-4xl mb-4 font-playball text-white/80 drop-shadow-md">
                {slides[activeSlide].subtitle}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight drop-shadow-lg font-satika">
                {slides[activeSlide].title.split(" ").slice(0, 3).join(" ")}
                <br />
                {slides[activeSlide].title.split(" ").slice(3, 6).join(" ")}
                <br />
                {slides[activeSlide].title.split(" ").slice(6).join(" ")}
                </h1>

                <button className="mt-8 md:mt-10 bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-white transition-all px-6 py-3 rounded-full flex items-center gap-2 text-base font-bold shadow-lg shadow-cyan-500/20 group cursor-pointer">
                Explore Tours
                <img
                 src={arrowRight}
                 alt="Arrow"
                 className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                 />
                </button>
            </div>

            {/* Right Floating Vertical Slider Indicator */}
            <div className="self-center md:self-auto bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-full px-1 py-2 sm:px-3 sm:py-3 md:px-4 md:py-6 flex flex-row md:flex-col items-center gap-2 sm:gap-3 md:gap-4 border border-white/20 shadow-xl transition-all duration-300">
                {/* Up arrow */}
               <button
                onClick={goPrev}
                aria-label="Previous slide"
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 active:scale-90 transition-all duration-300 cursor-pointer shrink-0"
               >
                 {/* Mobile */}
                  <img
                  src={arrowLeft}
                  alt="Previous"
                  className="w-4 h-4 md:hidden"
                  />

                 {/* Desktop */}
                 <img
                 src={arrowUp}
                 alt="Up"
                 className="hidden md:block w-4 h-4"
                 />
                 </button>

                {slides.map((slide, idx) => (
                <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`relative group focus:outline-none cursor-pointer transition-all duration-300 ${activeSlide === idx ? "scale-110" : "scale-90 hover:scale-100"
                    }`}
                    >
                    <img
                    src={slide.img}
                    className={`w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-full object-cover border-2 shadow-md transition-all duration-300 ${activeSlide === idx
                        ? "border-cyan-400 ring-4 ring-cyan-400/35"
                        : "border-white/50 group-hover:border-white"
                        }`}
                    alt={`Slide thumbnail ${idx + 1}`}
                    />
                    {/* Tooltip on hover - above on mobile row layout, to the side on desktop column layout */}
                    <span className="hidden md:block absolute right-18 top-1/2 -translate-y-1/2 bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg 
                    opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md z-20">
                    {slide.subtitle}
                    </span>
                    <span className="md:hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900/90 text-white text-[10px] font-semibold px-2 py-1 rounded-md
                    opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md z-20">
                    {slide.subtitle}
                    </span>
                </button>
                ))}

              {/* Down arrow */}
              <button
              onClick={goNext}
              aria-label="Next slide"
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 active:scale-90 transition-all duration-300 cursor-pointer shrink-0"
              >
              {/* Mobile */}
              <img
              src={arrowRight}
              alt="Next"
              className="w-4 h-4 md:hidden"
              />

              {/* Desktop */}
              <img
              src={arrowDown}
              alt="Down"
              className="hidden md:block w-4 h-4"
              />
             </button>
             </div>
             </div>
             </div>

             {/* Bottom Booking Card — flush against the bottom of the section, no gap */}
             <div className="relative z-10 w-full max-w-5xl mx-auto mb-0 mt-8 md:mt-0 px-2 sm:px-0 lg:absolute lg:top-[700px] lg:left-[264px] lg:right-[263px] lg:w-auto lg:max-w-none lg:mx-0 lg:px-0">

            {/* Tabs pill */}
            <div className="relative z-10 w-full sm:w-[92%] lg:w-[74%] bg-white rounded-t-[24px] md:rounded-t-[32px] px-3 md:px-6 pt-3 md:pt-4 pb-3 md:pb-4 flex gap-2 overflow-x-auto border-[4px] md:border-[8px] border-[#E7E7E7] border-b-0 -mb-[4px] md:-mb-[8px]">
            {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

  return (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`px-3 py-2 rounded-full font-bold text-sm md:text-base whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 ${
        isActive
          ? "bg-[#0d3b52] text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
      <span
        className={`w-7 h-7 rounded-full flex items-center justify-center bg-white shadow-sm`}
      >
        <img
          src={tab.icon}
          alt={tab.label}
          className="w-4 h-4 object-contain"
        />
      </span>

      {tab.label}
    </button>
    );
    })}
    </div>

    {/* Search fields card */}
    <div className="relative z-0 bg-white rounded-b-[24px] md:rounded-b-none md:rounded-tr-[32px] p-4 md:p-6 border-[4px] md:border-[8px] border-[#E7E7E7] border-b-0 md:border-b-0 lg:h-[244px]">
        <div className="flex flex-col md:flex-row items-stretch md:items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">

        {/* Destination */}
        <div className="flex items-center gap-2 py-2 md:py-1 md:pr-2 flex-1 md:min-w-[130px]">
            <img
            src={gpsIcon}
            alt="Location"
            className="w-6 h-6"
           />
            <div className="flex-1">
            <select className="bg-transparent font-bold text-[#0d3b52] text-base md:text-lg focus:outline-none w-full cursor-pointer appearance-none">
                <option value="">Select</option>
                <option value="halong">Halong Bay, Vietnam</option>
                <option value="bali">Bali, Indonesia</option>
                <option value="rome">Rome, Italy</option>
                <option value="tokyo">Tokyo, Japan</option>
                </select>
                <p className="text-sm text-gray-400 -mt-0.5">Destination</p>
                </div>
               </div>

        {/* Depart Date */}
        <div className="flex items-center gap-2 py-2 md:py-1 md:px-4 flex-1 md:min-w-[150px]">
            <img
            src={calendarIcon}
            alt="Calendar"
            className="w-6 h-6"
            />
             <div
             className="flex-1 cursor-pointer"
             onClick={() => document.getElementById("departDate").showPicker()}
      >
  <p className="font-bold text-[#0d3b52] text-base md:text-lg">Date</p>
  <p className="text-sm text-gray-400">Depart</p>

  <input
    id="departDate"
    type="date"
    className="absolute opacity-0 pointer-events-none"
  />
</div>
        </div>

        {/* Return Date */}
        <div className="flex items-center gap-2 py-2 md:py-1 md:px-4 flex-1 md:min-w-[150px]">
            <img
    src={calendarIcon}
    alt="Calendar"
    className="w-6 h-6"
/>
<div
  className="flex-1 cursor-pointer"
  onClick={() => document.getElementById("returnDate").showPicker()}
>
  <p className="font-bold text-[#0d3b52] text-base md:text-lg">Date</p>
  <p className="text-sm text-gray-400">Return</p>

  <input
    id="returnDate"
    type="date"
    className="absolute opacity-0 pointer-events-none"
  />
</div>
        
        </div>

        {/* Travelers */}
        <div className="flex items-center gap-2 py-2 md:py-1 md:px-4 flex-1 md:min-w-[150px]">
            <img
    src={userIcon}
    alt="User"
    className="w-6 h-6"
/>
            <div className="flex-1">
            <select className="bg-transparent font-bold text-[#0d3b52] text-base md:text-lg focus:outline-none w-full cursor-pointer appearance-none">
                <option value="2-0">2 Adults, 0 Child</option>
                <option value="1-0">1 Adult</option>
                <option value="2-2">2 Adults, 2 Children</option>
                <option value="4-0">4 Adults, 0 Children</option>
            </select>
            <p className="text-sm text-gray-400 -mt-0.5">Travelers</p>
            </div>
        </div>

        {/* Search Button */}
        <div className="pt-2 md:pt-0 md:pl-5 w-full md:w-auto">
            <button className="w-full md:w-16 h-12 md:h-16 bg-[#0d3b52] hover:bg-[#144f6d] active:scale-95 text-white rounded-full flex items-center justify-center gap-2 shadow-lg shadow-[#0d3b52]/20 transition-all duration-300 cursor-pointer">
            <img
    src={searchIcon}
    alt="Search"
    className="w-6 h-6"
/>
            <span className="md:hidden font-bold">Search</span>
            </button>
        </div>
        </div>
    </div>
    </div>

        </section>
    );
    };

    export default Hero;
