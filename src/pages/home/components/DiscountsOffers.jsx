// import { useRef, useState } from "react";
// import data from "./../../../json/DiscountOffers.json";

// import family from "../../../assets/home/discountsOffers/family.png";
// import baliCouple from "../../../assets/home/discountsOffers/bali-couple.png";
// import travelWorld from "../../../assets/home/discountsOffers/travel-world.jpg";
// import Travel_couple from "../../../assets/home/discountsOffers/Travel_couple.png";
// import Vector1070 from "../../../assets/home/discountsOffers/Vector1070.svg";
// import Vector1071 from "../../../assets/home/discountsOffers/Vector1071.svg";

// const images = {
//   family,
//   baliCouple,
//   travelWorld,
//   Travel_couple,
//   Vector1070,
//   Vector1071,
// };

// /* ============================================================
//    CARD COMPONENTS (shared across all screen sizes)
//    Edit these for content/design changes that should apply
//    everywhere. For size-specific tweaks, use the sm:/lg: prefixes
//    inside these, or override at the view-section level below.
// ============================================================ */

// /* ================= Family-type Card ================= */
// const FamilyCard = ({ card }) => (
//   <div
//     className={`relative w-full h-70 sm:h-72.5 lg:h-80 overflow-hidden rounded-[30px] bg-gradient-to-r ${
//       card.gradient || "from-[#6EC8DD] via-[#8BD9EB] to-[#46BADB]"
//     }`}
//   >
//     <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_32%,rgba(255,255,255,0.42),transparent_65%)]" />

//     <div
//       className="
//         absolute left-4 top-5 w-[68%] h-[80%] rounded-[18px] border border-white/60
//         sm:left-5 sm:top-6 sm:w-[70%] sm:h-[82%] md:left-5
//         lg:left-5.75 lg:top-[31px] lg:w-[302px] lg:h-[264px]
//       "
//     />

//     <div
//       className="
//         absolute left-4 top-9 w-[56%] h-[185px] flex flex-col items-center text-center gap-3 z-20
//         sm:left-5 sm:top-11 sm:w-[54%] md:w-[52%]
//         lg:left-[30px] lg:top-[61px] lg:w-[238px] lg:h-[210px] lg:gap-[18px]
//       "
//     >
//       <p
//         className="italic leading-none text-[#1C1C1C]"
//         style={{
//           fontFamily: "Sitka",
//           fontSize: "clamp(24px,5vw,34px)",
//           fontWeight: 600,
//         }}
//       >
//         {card.saveText}
//       </p>

//       <h2
//         className="leading-none text-[#1C1C1C]"
//         style={{
//           fontFamily: "Sitka",
//           fontSize: "clamp(30px,6vw,42px)",
//           fontWeight: 700,
//           WebkitTextStroke: "1.5px #ffffff",
//         }}
//       >
//         {card.discount}
//       </h2>

//       <p
//         className="leading-none text-[#202020]"
//         style={{
//           fontFamily: "Sitka",
//           fontSize: "clamp(16px,3.8vw,24px)",
//           fontWeight: 600,
//         }}
//       >
//         {card.tour}
//       </p>

//      <button
//   className="
//     mt-auto flex h-[44px] w-[140px] items-center justify-center gap-2 rounded-full
//     bg-[#163F50] text-[15px] font-semibold text-white transition hover:bg-[#103442]

//     sm:h-[50px] sm:w-[160px] sm:text-[16px]

//     md:h-[46px] md:w-[145px] md:text-[15px]

//     lg:h-[58px] lg:w-[178px] lg:px-[22px] lg:py-[14px] lg:text-[18px]
//   "
// >
//         {card.button}
//         <span className="text-[18px] lg:text-[22px]">→</span>
//       </button>
//     </div>

//     <img
//       src={images[card.image]}
//       alt={card.tour}
//       className="
//         absolute bottom-0 right-[-15px] h-[205px] w-auto object-contain z-30
//         sm:right-[-20px] sm:h-[245px]
//         md:right-[-40px] md:h-[240px]
//         lg:right-[-40px] lg:h-[285px]
//       "
//     />
//   </div>
// );

// /* ================= Bali-type Card ================= */
// const BaliCard = ({ card }) => (
//   <div className="relative h-70 sm:h-72.5  lg:h-80 w-full overflow-hidden rounded-[22px] bg-[linear-gradient(90deg,#E88F00_0%,#F3A000_45%,#F7C65C_100%)]">
//     <div className="absolute left-[6%] top-[8%] sm:top-[9%] md:top-[%] lg:top-[10%] z-20">
//       <h2
//         style={{
//           fontFamily: "Sitka",
//           fontWeight: 700,
//           fontSize: "clamp(24px,3.2vw,34px)",
//           lineHeight: "1.05",
//           color: "#fff",
//         }}
//       >
//         {card.title1}
//       </h2>

//       <h2
//         style={{
//           fontFamily: "Sitka",
//           fontWeight: 700,
//           fontSize: "clamp(24px,3.2vw,34px)",
//           lineHeight: "1.05",
//           color: "#fff",
//         }}
//       >
//         {card.title2}
//       </h2>
//     </div>

//     <div className="absolute left-[6%] top-[40%] sm:top-[40%] md:top-[42%] lg:top-[44%] z-20 flex items-start">
//       <img
//         src={images[card.leftVector]}
//         alt=""
//         className="mt-2 h-[58px] sm:h-[72px] md:h-[72px] lg:h-[86px] w-auto shrink-0"
//       />

//       <div className="relative px-2 sm:px-3 md:px-4">
//         <div className="mb-1 flex items-center gap-2">
//           <span className="text-[13px] sm:text-[16px] md:text-[16px]  md:ml-[-8px] lg:text-[18px] font-semibold tracking-[0.3px] text-white">
//             {card.priceLabel}
//           </span>
//         </div>

//         <h3
//           className="font-serif font-bold leading-none text-[#FFF33A] md:ml-[-17px]"
//           style={{ fontSize: "clamp(22px,3vw,34px)" }}
//         >
//           {card.price}
//         </h3>

//         <p className="mt-2 sm:mt-3 text-[13px] sm:text-[16px] md:text-[16px] md:ml-[-20px] lg:text-[18px] font-semibold text-white">
//           {card.perPerson}
//         </p>
//       </div>

//       <img
//         src={images[card.rightVector]}
//         alt=""
//         className="mt-2 -ml-2 sm:-ml-2 md:-ml-3 lg:-ml-4 h-[58px] sm:h-[74px] md:h-[74px] lg:h-[88px] w-auto shrink-0"
//       />
//     </div>

//     <div
//       className="
// absolute
// left-[42%]
// sm:left-[40%]
// md:left-[45%]
// lg:left-[220px]
// top-[34%]
// sm:top-[35%]
// md:top-[35.5%]
// lg:top-[36%]
// z-30
// "
//     >
//       <div  className="relative w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] md:w-[60px] md:h-[72px] lg:w-[74px] lg:h-[74px]">
//         <svg
//           viewBox="0 0 100 100"
//           className="absolute inset-0 w-full h-full"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="#FFF000"
//             d="M50 6
//                C63 6 73 13 77 24
//                C82 26 98 38 94 47
//                C96 61 87 71 75 75
//                C72 84 59 93 50 94
//                C37 94 27 87 25 74
//                C13 71 4 61 6 47
//                C4 40 20 29 20 24
//                C27 13 37 6 50 6Z"
//           />
//         </svg>

//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-none font-serif">
//             {card.days}
//           </h3>

//           <p className="text-[10px] sm:text-[12px] lg:text-[13px] font-semibold leading-none mt-[2px]">
//             {card.daysLabel}
//           </p>
//         </div>
//       </div>
//     </div>

//     <div
//       className="
// absolute
// right-[-12%]
// top-[35%]
// w-[150px]
// h-[150px]
// sm:w-[185px]
// sm:h-[185px]
// md:right-[-10%]
// md:w-[210px]
// md:h-[210px]
// lg:right-[-8%]
// lg:w-[230px]
// lg:h-[230px]
// rounded-full
// border
// border-dashed
// border-white/40
// z-10
// "
//     />

//     <div
//       className="
// absolute
// right-[4%]
// top-[60%]
// w-[80px]
// h-[80px]
// sm:w-[95px]
// sm:h-[95px]
// md:w-[108px]
// md:h-[108px]
// md:right-[4.5%]
// lg:right-[5%]
// lg:w-[120px]
// lg:h-[120px]
// rounded-full
// border-l
// border-dashed
// border-white/40
// rotate-[18deg]
// z-10
// "
//     />

//     <img
//       src={images[card.coupleImage]}
//       alt=""
//       className="
// absolute
// bottom-[-18px]
// right-[-5px]
// z-20
// w-[190px]
// h-auto
// sm:w-[195px]
// md:w-[195px]
// md:h-[320px]
// md:-bottom-[30px]
// md:right-[-15px]
// lg:-bottom-[35px]
// lg:-right-[10px]
// lg:w-[233px]
// lg:h-[320px]
// object-contain
// "
//     />
//   </div>
// );

// /* ================= Travel-type Card ================= */
// const TravelCard = ({ card }) => (
//   <div className="relative w-full h-[260px] sm:h-[290px] lg:h-[320px] overflow-hidden rounded-[24px]">
//     <div
//       className="absolute inset-0"
//       style={{ backgroundColor: card.bgColor || "#FBC71D" }}
//     />

//     <div
//       className="absolute left-0 top-0 h-full w-[62%] sm:w-[64%] lg:w-[332px] overflow-hidden z-10"
//       style={{ clipPath: "polygon(0 0, 82% 0, 100% 100%, 0 100%)" }}
//     >
//       <img
//         src={images[card.backgroundImage]}
//         alt="Travel Around The World"
//         className="w-full h-full object-cover"
//       />
//     </div>

//     <img
//       src={images[card.coupleImage]}
//       alt="Couple"
//       className="
//         absolute left-[50%] sm:left-[52%] lg:left-[270px] bottom-[-4%]
//         w-[60%] sm:w-[44%] lg:w-[255px] max-w-[255px]
//         h-auto object-contain z-40
//       "
//     />

//     <div
//       className="
//         absolute left-[46%] sm:left-[47%] lg:left-[246px] top-[7%]
//         w-13 h-13 sm:w-15 sm:h-15 lg:w-17 lg:h-17
//         rounded-full border-2 border-white bg-[#14A8DB]
//         flex flex-col items-center justify-center
//         text-white shadow-lg -rotate-[4deg] z-50
//       "
//     >
//       <span className="text-sm sm:text-[17px] lg:text-[19px] font-bold leading-none">
//         {card.discount}
//       </span>

//       <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-semibold leading-none mt-0.5">
//         {card.discountLabel}
//       </span>
//     </div>
//   </div>
// );

// /* ================= Type -> Component map ================= */
// const cardComponents = {
//   family: FamilyCard,
//   bali: BaliCard,
//   travel: TravelCard,
// };

// const renderCard = (card) => {
//   const Component = cardComponents[card.type];
//   if (!Component) return null;
//   return <Component key={card.id} card={card} />;
// };

// /* ================= chunkArray helper ================= */
// const chunkArray = (arr, size) => {
//   const chunks = [];
//   for (let i = 0; i < arr.length; i += size) {
//     chunks.push(arr.slice(i, i + size));
//   }
//   return chunks;
// };


// /* ================= Reusable dots component ================= */
// const SliderDots = ({ slides, currentSlide, setCurrentSlide }) => {
//   if (slides.length <= 1) return null;
//   return (
//     <div className="mt-8 flex justify-center items-center gap-3">
//       {slides.map((_, i) => (
//         <button
//           key={i}
//           onClick={() => setCurrentSlide(i)}
//           aria-label={`Go to slide ${i + 1}`}
//           className={`h-2.5 rounded-full transition-all duration-300 ${
//             currentSlide === i
//               ? "w-8.5 bg-[#153E4D]"
//               : "w-2.5 bg-gray-300 hover:bg-gray-400"
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// /* ============================================================
//    MOBILE VIEW  (< 640px)  — 1 card per slide
//    Edit this block only to change mobile-specific behavior
//    (card count per slide, spacing, dot size, etc.)
// ============================================================ */
// const MobileView = ({ cards }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const cardsPerSlide = 1; // <-- change this number to adjust mobile only
//   const slides = chunkArray(cards, cardsPerSlide);

//   return (
//     <div className="block sm:hidden">
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slides.map((slideCards, i) => (
//             <div key={i} className="w-full flex-shrink-0 grid grid-cols-1 gap-5">
//               {slideCards.map(renderCard)}
//             </div>
//           ))}
//         </div>
//       </div>
//       <SliderDots
//         slides={slides}
//         currentSlide={currentSlide}
//         setCurrentSlide={setCurrentSlide}
//       />
//     </div>
//   );
// };

// /* ============================================================
//    TABLET VIEW  (640px – 1023px)  — 2 cards per slide
//    Edit this block only to change tablet-specific behavior
// ============================================================ */
// const TabletView = ({ cards }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const cardsPerSlide = 2; // <-- change this number to adjust tablet only
//   const slides = chunkArray(cards, cardsPerSlide);

//   return (
//     <div className="hidden sm:block lg:hidden">
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slides.map((slideCards, i) => (
//             <div key={i} className="w-full flex-shrink-0 grid grid-cols-2 gap-6">
//               {slideCards.map(renderCard)}
//             </div>
//           ))}
//         </div>
//       </div>
//       <SliderDots
//         slides={slides}
//         currentSlide={currentSlide}
//         setCurrentSlide={setCurrentSlide}
//       />
//     </div>
//   );
// };

// /* ============================================================
//    DESKTOP / LARGE SCREEN VIEW  (>= 1024px)  — 3 cards per slide
//    Edit this block only to change desktop-specific behavior
// ============================================================ */
// const DesktopView = ({ cards }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const cardsPerSlide = 3; // <-- change this number to adjust desktop only
//   const slides = chunkArray(cards, cardsPerSlide);

//   return (
//     <div className="hidden lg:block">
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slides.map((slideCards, i) => (
//             <div key={i} className="w-full flex-shrink-0 grid grid-cols-3 gap-[27px]">
//               {slideCards.map(renderCard)}
//             </div>
//           ))}
//         </div>
//       </div>
//       <SliderDots
//         slides={slides}
//         currentSlide={currentSlide}
//         setCurrentSlide={setCurrentSlide}
//       />
//     </div>
//   );
// };

// /* ============================================================
//    MAIN COMPONENT
// ============================================================ */
// const DiscountsOffers = () => {
//   const cards = data.cards;

//   return (
//     <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24">
//       <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
//         <h4
//           className="text-[#184B5D]"
//           style={{
//             fontFamily: "Playball",
//             fontSize: "clamp(26px,5vw,42px)",
//             fontWeight: 400,
//           }}
//         >
//           {data.heading.subTitle}
//         </h4>

//         <h2
//           className="mt-2 sm:mt-3 text-[#163F52]"
//           style={{
//             fontFamily: "Sitka",
//             fontSize: "clamp(34px,7vw,76px)",
//             fontWeight: 600,
//             lineHeight: "100%",
//           }}
//         >
//           {data.heading.title}
//         </h2>
//       </div>

//       <div className="max-w-[1548px] mx-auto px-4 sm:px-6">
//         <MobileView cards={cards} />
//         <TabletView cards={cards} />
//         <DesktopView cards={cards} />
//       </div>
//     </section>
//   );
// };

// export default DiscountsOffers;


// import { useRef, useState, useEffect } from "react";
// import data from "./../../../json/DiscountOffers.json";

// import family from "../../../assets/home/discountsOffers/family.png";
// import baliCouple from "../../../assets/home/discountsOffers/bali-couple.png";
// import travelWorld from "../../../assets/home/discountsOffers/travel-world.jpg";
// import Travel_couple from "../../../assets/home/discountsOffers/Travel_couple.png";
// import Vector1070 from "../../../assets/home/discountsOffers/Vector1070.svg";
// import Vector1071 from "../../../assets/home/discountsOffers/Vector1071.svg";

// const images = {
//   family,
//   baliCouple,
//   travelWorld,
//   Travel_couple,
//   Vector1070,
//   Vector1071,
// };

// /* ============================================================
//    AUTO-SLIDE INTERVAL (ms)
//    Change this single value to control how fast all sliders
//    (mobile/tablet/desktop) auto-advance.
// ============================================================ */
// const AUTO_SLIDE_INTERVAL = 4000;

// /* ============================================================
//    CARD COMPONENTS (shared across all screen sizes)
//    Edit these for content/design changes that should apply
//    everywhere. For size-specific tweaks, use the sm:/lg: prefixes
//    inside these, or override at the view-section level below.
// ============================================================ */

// /* ================= Family-type Card ================= */
// const FamilyCard = ({ card }) => (
//   <div
//     className={`relative w-full h-70 sm:h-72.5 lg:h-80 overflow-hidden rounded-[30px] bg-gradient-to-r ${
//       card.gradient || "from-[#6EC8DD] via-[#8BD9EB] to-[#46BADB]"
//     }`}
//   >
//     <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_32%,rgba(255,255,255,0.42),transparent_65%)]" />

//     <div
//       className="
//         absolute left-4 top-5 w-[68%] h-[80%] rounded-[18px] border border-white/60
//         sm:left-5 sm:top-6 sm:w-[70%] sm:h-[82%] md:left-5
//         lg:left-5.75 lg:top-[31px] lg:w-[302px] lg:h-[264px]
//       "
//     />

//     <div
//       className="
//         absolute left-4 top-9 w-[56%] h-[185px] flex flex-col items-center text-center gap-3 z-20
//         sm:left-5 sm:top-11 sm:w-[54%] md:w-[52%]
//         lg:left-[30px] lg:top-[61px] lg:w-[238px] lg:h-[210px] lg:gap-[18px]
//       "
//     >
//       <p
//         className="italic leading-none text-[#1C1C1C]"
//         style={{
//           fontFamily: "Sitka",
//           fontSize: "clamp(24px,5vw,34px)",
//           fontWeight: 600,
//         }}
//       >
//         {card.saveText}
//       </p>

//       <h2
//         className="leading-none text-[#1C1C1C]"
//         style={{
//           fontFamily: "Sitka",
//           fontSize: "clamp(30px,6vw,42px)",
//           fontWeight: 700,
//           WebkitTextStroke: "1.5px #ffffff",
//         }}
//       >
//         {card.discount}
//       </h2>

//       <p
//         className="leading-none text-[#202020]"
//         style={{
//           fontFamily: "Sitka",
//           fontSize: "clamp(16px,3.8vw,24px)",
//           fontWeight: 600,
//         }}
//       >
//         {card.tour}
//       </p>

//      <button
//   className="
//     mt-auto flex h-[44px] w-[140px] items-center justify-center gap-2 rounded-full
//     bg-[#163F50] text-[15px] font-semibold text-white transition hover:bg-[#103442]

//     sm:h-[50px] sm:w-[160px] sm:text-[16px]

//     md:h-[46px] md:w-[145px] md:text-[15px]

//     lg:h-[58px] lg:w-[178px] lg:px-[22px] lg:py-[14px] lg:text-[18px]
//   "
// >
//         {card.button}
//         <span className="text-[18px] lg:text-[22px]">→</span>
//       </button>
//     </div>

//     <img
//       src={images[card.image]}
//       alt={card.tour}
//       className="
//         absolute bottom-0 right-[-15px] h-[205px] w-auto object-contain z-30
//         sm:right-[-20px] sm:h-[245px]
//         md:right-[-40px] md:h-[240px]
//         lg:right-[-40px] lg:h-[285px]
//       "
//     />
//   </div>
// );

// /* ================= Bali-type Card ================= */
// const BaliCard = ({ card }) => (
//   <div className="relative h-70 sm:h-72.5  lg:h-80 w-full overflow-hidden rounded-[22px] bg-[linear-gradient(90deg,#E88F00_0%,#F3A000_45%,#F7C65C_100%)]">
//     <div className="absolute left-[6%] top-[8%] sm:top-[9%] md:top-[%] lg:top-[10%] z-20">
//       <h2
//         style={{
//           fontFamily: "Sitka",
//           fontWeight: 700,
//           fontSize: "clamp(24px,3.2vw,34px)",
//           lineHeight: "1.05",
//           color: "#fff",
//         }}
//       >
//         {card.title1}
//       </h2>

//       <h2
//         style={{
//           fontFamily: "Sitka",
//           fontWeight: 700,
//           fontSize: "clamp(24px,3.2vw,34px)",
//           lineHeight: "1.05",
//           color: "#fff",
//         }}
//       >
//         {card.title2}
//       </h2>
//     </div>

//     <div className="absolute left-[6%] top-[40%] sm:top-[40%] md:top-[42%] lg:top-[44%] z-20 flex items-start">
//       <img
//         src={images[card.leftVector]}
//         alt=""
//         className="mt-2 h-[58px] sm:h-[72px] md:h-[72px] lg:h-[86px] w-auto shrink-0"
//       />

//       <div className="relative px-2 sm:px-3 md:px-4">
//         <div className="mb-1 flex items-center gap-2">
//           <span className="text-[13px] sm:text-[16px] md:text-[16px]  md:ml-[-8px] lg:text-[18px] font-semibold tracking-[0.3px] text-white">
//             {card.priceLabel}
//           </span>
//         </div>

//         <h3
//           className="font-serif font-bold leading-none text-[#FFF33A] md:ml-[-17px]"
//           style={{ fontSize: "clamp(22px,3vw,34px)" }}
//         >
//           {card.price}
//         </h3>

//         <p className="mt-2 sm:mt-3 text-[13px] sm:text-[16px] md:text-[16px] md:ml-[-20px] lg:text-[18px] font-semibold text-white">
//           {card.perPerson}
//         </p>
//       </div>

//       <img
//         src={images[card.rightVector]}
//         alt=""
//         className="mt-2 -ml-2 sm:-ml-2 md:-ml-3 lg:-ml-4 h-[58px] sm:h-[74px] md:h-[74px] lg:h-[88px] w-auto shrink-0"
//       />
//     </div>

//     <div
//       className="
// absolute
// left-[42%]
// sm:left-[40%]
// md:left-[45%]
// lg:left-[220px]
// top-[34%]
// sm:top-[35%]
// md:top-[35.5%]
// lg:top-[36%]
// z-30
// "
//     >
//       <div  className="relative w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] md:w-[60px] md:h-[72px] lg:w-[74px] lg:h-[74px]">
//         <svg
//           viewBox="0 0 100 100"
//           className="absolute inset-0 w-full h-full"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="#FFF000"
//             d="M50 6
//                C63 6 73 13 77 24
//                C82 26 98 38 94 47
//                C96 61 87 71 75 75
//                C72 84 59 93 50 94
//                C37 94 27 87 25 74
//                C13 71 4 61 6 47
//                C4 40 20 29 20 24
//                C27 13 37 6 50 6Z"
//           />
//         </svg>

//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-none font-serif">
//             {card.days}
//           </h3>

//           <p className="text-[10px] sm:text-[12px] lg:text-[13px] font-semibold leading-none mt-[2px]">
//             {card.daysLabel}
//           </p>
//         </div>
//       </div>
//     </div>

//     <div
//       className="
// absolute
// right-[-12%]
// top-[35%]
// w-[150px]
// h-[150px]
// sm:w-[185px]
// sm:h-[185px]
// md:right-[-10%]
// md:w-[210px]
// md:h-[210px]
// lg:right-[-8%]
// lg:w-[230px]
// lg:h-[230px]
// rounded-full
// border
// border-dashed
// border-white/40
// z-10
// "
//     />

//     <div
//       className="
// absolute
// right-[4%]
// top-[60%]
// w-[80px]
// h-[80px]
// sm:w-[95px]
// sm:h-[95px]
// md:w-[108px]
// md:h-[108px]
// md:right-[4.5%]
// lg:right-[5%]
// lg:w-[120px]
// lg:h-[120px]
// rounded-full
// border-l
// border-dashed
// border-white/40
// rotate-[18deg]
// z-10
// "
//     />

//     <img
//       src={images[card.coupleImage]}
//       alt=""
//       className="
// absolute
// bottom-[-18px]
// right-[-5px]
// z-20
// w-[190px]
// h-auto
// sm:w-[195px]
// md:w-[195px]
// md:h-[320px]
// md:-bottom-[30px]
// md:right-[-15px]
// lg:-bottom-[35px]
// lg:-right-[10px]
// lg:w-[233px]
// lg:h-[320px]
// object-contain
// "
//     />
//   </div>
// );

// /* ================= Travel-type Card ================= */
// const TravelCard = ({ card }) => (
//   <div className="relative w-full h-[260px] sm:h-[290px] lg:h-[320px] overflow-hidden rounded-[24px]">
//     <div
//       className="absolute inset-0"
//       style={{ backgroundColor: card.bgColor || "#FBC71D" }}
//     />

//     <div
//       className="absolute left-0 top-0 h-full w-[62%] sm:w-[64%] lg:w-[332px] overflow-hidden z-10"
//       style={{ clipPath: "polygon(0 0, 82% 0, 100% 100%, 0 100%)" }}
//     >
//       <img
//         src={images[card.backgroundImage]}
//         alt="Travel Around The World"
//         className="w-full h-full object-cover"
//       />
//     </div>

//     <img
//       src={images[card.coupleImage]}
//       alt="Couple"
//       className="
//         absolute left-[50%] sm:left-[52%] lg:left-[270px] bottom-[-4%]
//         w-[60%] sm:w-[44%] lg:w-[255px] max-w-[255px]
//         h-auto object-contain z-40
//       "
//     />

//     <div
//       className="
//         absolute left-[46%] sm:left-[47%] lg:left-[246px] top-[7%]
//         w-13 h-13 sm:w-15 sm:h-15 lg:w-17 lg:h-17
//         rounded-full border-2 border-white bg-[#14A8DB]
//         flex flex-col items-center justify-center
//         text-white shadow-lg -rotate-[4deg] z-50
//       "
//     >
//       <span className="text-sm sm:text-[17px] lg:text-[19px] font-bold leading-none">
//         {card.discount}
//       </span>

//       <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-semibold leading-none mt-0.5">
//         {card.discountLabel}
//       </span>
//     </div>
//   </div>
// );

// /* ================= Type -> Component map ================= */
// const cardComponents = {
//   family: FamilyCard,
//   bali: BaliCard,
//   travel: TravelCard,
// };

// const renderCard = (card) => {
//   const Component = cardComponents[card.type];
//   if (!Component) return null;
//   return <Component key={card.id} card={card} />;
// };

// /* ================= chunkArray helper ================= */
// const chunkArray = (arr, size) => {
//   const chunks = [];
//   for (let i = 0; i < arr.length; i += size) {
//     chunks.push(arr.slice(i, i + size));
//   }
//   return chunks;
// };


// /* ================= Reusable dots component ================= */
// const SliderDots = ({ slides, currentSlide, setCurrentSlide }) => {
//   if (slides.length <= 1) return null;
//   return (
//     <div className="mt-8 flex justify-center items-center gap-3">
//       {slides.map((_, i) => (
//         <button
//           key={i}
//           onClick={() => setCurrentSlide(i)}
//           aria-label={`Go to slide ${i + 1}`}
//           className={`h-2.5 rounded-full transition-all duration-300 ${
//             currentSlide === i
//               ? "w-8.5 bg-[#153E4D]"
//               : "w-2.5 bg-gray-300 hover:bg-gray-400"
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// /* ================= Auto-slide hook =================
//    Automatically advances currentSlide every AUTO_SLIDE_INTERVAL
//    ms, looping back to the first slide after the last one.
//    Pauses whenever there is only one (or zero) slide.
// ================================================= */
// const useAutoSlide = (slidesLength, setCurrentSlide) => {
//   useEffect(() => {
//     if (slidesLength <= 1) return;

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slidesLength);
//     }, AUTO_SLIDE_INTERVAL);

//     return () => clearInterval(timer);
//   }, [slidesLength, setCurrentSlide]);
// };

// /* ============================================================
//    MOBILE VIEW  (< 640px)  — 1 card per slide
//    Edit this block only to change mobile-specific behavior
//    (card count per slide, spacing, dot size, etc.)
// ============================================================ */
// const MobileView = ({ cards }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const cardsPerSlide = 1; // <-- change this number to adjust mobile only
//   const slides = chunkArray(cards, cardsPerSlide);

//   useAutoSlide(slides.length, setCurrentSlide);

//   return (
//     <div className="block sm:hidden">
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slides.map((slideCards, i) => (
//             <div key={i} className="w-full flex-shrink-0 grid grid-cols-1 gap-5">
//               {slideCards.map(renderCard)}
//             </div>
//           ))}
//         </div>
//       </div>
//       <SliderDots
//         slides={slides}
//         currentSlide={currentSlide}
//         setCurrentSlide={setCurrentSlide}
//       />
//     </div>
//   );
// };

// /* ============================================================
//    TABLET VIEW  (640px – 1023px)  — 2 cards per slide
//    Edit this block only to change tablet-specific behavior
// ============================================================ */
// const TabletView = ({ cards }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const cardsPerSlide = 2; // <-- change this number to adjust tablet only
//   const slides = chunkArray(cards, cardsPerSlide);

//   useAutoSlide(slides.length, setCurrentSlide);

//   return (
//     <div className="hidden sm:block lg:hidden">
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slides.map((slideCards, i) => (
//             <div key={i} className="w-full flex-shrink-0 grid grid-cols-2 gap-6">
//               {slideCards.map(renderCard)}
//             </div>
//           ))}
//         </div>
//       </div>
//       <SliderDots
//         slides={slides}
//         currentSlide={currentSlide}
//         setCurrentSlide={setCurrentSlide}
//       />
//     </div>
//   );
// };

// /* ============================================================
//    DESKTOP / LARGE SCREEN VIEW  (>= 1024px)  — 3 cards per slide
//    Edit this block only to change desktop-specific behavior
// ============================================================ */
// const DesktopView = ({ cards }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const cardsPerSlide = 3; // <-- change this number to adjust desktop only
//   const slides = chunkArray(cards, cardsPerSlide);

//   useAutoSlide(slides.length, setCurrentSlide);

//   return (
//     <div className="hidden lg:block">
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slides.map((slideCards, i) => (
//             <div key={i} className="w-full flex-shrink-0 grid grid-cols-3 gap-[27px]">
//               {slideCards.map(renderCard)}
//             </div>
//           ))}
//         </div>
//       </div>
//       <SliderDots
//         slides={slides}
//         currentSlide={currentSlide}
//         setCurrentSlide={setCurrentSlide}
//       />
//     </div>
//   );
// };

// /* ============================================================
//    MAIN COMPONENT
// ============================================================ */
// const DiscountsOffers = () => {
//   const cards = data.cards;

//   return (
//     <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24">
//       <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
//         <h4
//           className="text-[#184B5D]"
//           style={{
//             fontFamily: "Playball",
//             fontSize: "clamp(26px,5vw,42px)",
//             fontWeight: 400,
//           }}
//         >
//           {data.heading.subTitle}
//         </h4>

//         <h2
//           className="mt-2 sm:mt-3 text-[#163F52]"
//           style={{
//             fontFamily: "Sitka",
//             fontSize: "clamp(34px,7vw,76px)",
//             fontWeight: 600,
//             lineHeight: "100%",
//           }}
//         >
//           {data.heading.title}
//         </h2>
//       </div>

//       <div className="max-w-[1548px] mx-auto px-4 sm:px-6">
//         <MobileView cards={cards} />
//         <TabletView cards={cards} />
//         <DesktopView cards={cards} />
//       </div>
//     </section>
//   );
// };

// export default DiscountsOffers;


import { useRef, useState, useEffect } from "react";
import data from "./../../../json/DiscountOffers.json";

import family from "../../../assets/home/discountsOffers/family.png";
import baliCouple from "../../../assets/home/discountsOffers/bali-couple.png";
import travelWorld from "../../../assets/home/discountsOffers/travel-world.jpg";
import Travel_couple from "../../../assets/home/discountsOffers/Travel_couple.png";
import Vector1070 from "../../../assets/home/discountsOffers/Vector1070.svg";
import Vector1071 from "../../../assets/home/discountsOffers/Vector1071.svg";

const images = {
  family,
  baliCouple,
  travelWorld,
  Travel_couple,
  Vector1070,
  Vector1071,
};

/* ============================================================
   AUTO-SLIDE INTERVAL (ms)
   Change this single value to control how fast all sliders
   (mobile/tablet/desktop) auto-advance.
============================================================ */
const AUTO_SLIDE_INTERVAL = 4000;

/* ============================================================
   CARD COMPONENTS (shared across all screen sizes)
   Edit these for content/design changes that should apply
   everywhere. For size-specific tweaks, use the sm:/lg: prefixes
   inside these, or override at the view-section level below.
============================================================ */

/* ================= Family-type Card ================= */
const FamilyCard = ({ card }) => (
  <div
    className={`relative w-full h-70 sm:h-72.5 lg:h-80 overflow-hidden rounded-[30px] bg-gradient-to-r ${
      card.gradient || "from-[#6EC8DD] via-[#8BD9EB] to-[#46BADB]"
    }`}
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_32%,rgba(255,255,255,0.42),transparent_65%)]" />

    <div
      className="
        absolute left-4 top-5 w-[68%] h-[80%] rounded-[18px] border border-white/60
        sm:left-5 sm:top-6 sm:w-[70%] sm:h-[82%] md:left-5
        lg:left-5.75 lg:top-[31px] lg:w-[302px] lg:h-[264px]
      "
    />

    <div
      className="
        absolute left-4 top-9 w-[56%] h-[185px] flex flex-col items-center text-center gap-3 z-20
        sm:left-5 sm:top-11 sm:w-[54%] md:w-[52%]
        lg:left-[30px] lg:top-[61px] lg:w-[238px] lg:h-[210px] lg:gap-[18px]
      "
    >
      <p
        className="italic leading-none text-[#1C1C1C]"
        style={{
          fontFamily: "Sitka",
          fontSize: "clamp(24px,5vw,34px)",
          fontWeight: 600,
        }}
      >
        {card.saveText}
      </p>

      <h2
        className="leading-none text-[#1C1C1C]"
        style={{
          fontFamily: "Sitka",
          fontSize: "clamp(30px,6vw,42px)",
          fontWeight: 700,
          WebkitTextStroke: "1.5px #ffffff",
        }}
      >
        {card.discount}
      </h2>

      <p
        className="leading-none text-[#202020]"
        style={{
          fontFamily: "Sitka",
          fontSize: "clamp(16px,3.8vw,24px)",
          fontWeight: 600,
        }}
      >
        {card.tour}
      </p>

     <button
  className="
    mt-auto flex h-[44px] w-[140px] items-center justify-center gap-2 rounded-full
    bg-[#163F50] text-[15px] font-semibold text-white transition hover:bg-[#103442]

    sm:h-[50px] sm:w-[160px] sm:text-[16px]

    md:h-[46px] md:w-[145px] md:text-[15px]

    lg:h-[58px] lg:w-[178px] lg:px-[22px] lg:py-[14px] lg:text-[18px]
  "
>
        {card.button}
        <span className="text-[18px] lg:text-[22px]">→</span>
      </button>
    </div>

    <img
      src={images[card.image]}
      alt={card.tour}
      className="
        absolute bottom-0 right-[-15px] h-[205px] w-auto object-contain z-30
        sm:right-[-20px] sm:h-[245px]
        md:right-[-40px] md:h-[240px]
        lg:right-[-40px] lg:h-[285px]
      "
    />
  </div>
);

/* ================= Bali-type Card ================= */
const BaliCard = ({ card }) => (
  <div className="relative h-70 sm:h-72.5  lg:h-80 w-full overflow-hidden rounded-[22px] bg-[linear-gradient(90deg,#E88F00_0%,#F3A000_45%,#F7C65C_100%)]">
    <div className="absolute left-[6%] top-[8%] sm:top-[9%] md:top-[%] lg:top-[10%] z-20">
      <h2
        style={{
          fontFamily: "Sitka",
          fontWeight: 700,
          fontSize: "clamp(24px,3.2vw,34px)",
          lineHeight: "1.05",
          color: "#fff",
        }}
      >
        {card.title1}
      </h2>

      <h2
        style={{
          fontFamily: "Sitka",
          fontWeight: 700,
          fontSize: "clamp(24px,3.2vw,34px)",
          lineHeight: "1.05",
          color: "#fff",
        }}
      >
        {card.title2}
      </h2>
    </div>

    <div className="absolute left-[6%] top-[40%] sm:top-[40%] md:top-[42%] lg:top-[44%] z-20 flex items-start">
      <img
        src={images[card.leftVector]}
        alt=""
        className="mt-2 h-[58px] sm:h-[72px] md:h-[72px] lg:h-[86px] w-auto shrink-0"
      />

      <div className="relative px-2 sm:px-3 md:px-4">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-[13px] sm:text-[16px] md:text-[16px]  md:ml-[-8px] lg:text-[18px] font-semibold tracking-[0.3px] text-white">
            {card.priceLabel}
          </span>
        </div>

        <h3
          className="font-serif font-bold leading-none text-[#FFF33A] md:ml-[-17px]"
          style={{ fontSize: "clamp(22px,3vw,34px)" }}
        >
          {card.price}
        </h3>

        <p className="mt-2 sm:mt-3 text-[13px] sm:text-[16px] md:text-[16px] md:ml-[-20px] lg:text-[18px] font-semibold text-white">
          {card.perPerson}
        </p>
      </div>

      <img
        src={images[card.rightVector]}
        alt=""
        className="mt-2 -ml-2 sm:-ml-2 md:-ml-3 lg:-ml-4 h-[58px] sm:h-[74px] md:h-[74px] lg:h-[88px] w-auto shrink-0"
      />
    </div>

    <div
      className="
absolute
left-[42%]
sm:left-[40%]
md:left-[45%]
lg:left-[220px]
top-[34%]
sm:top-[35%]
md:top-[35.5%]
lg:top-[36%]
z-30
"
    >
      <div  className="relative w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] md:w-[60px] md:h-[72px] lg:w-[74px] lg:h-[74px]">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFF000"
            d="M50 6
               C63 6 73 13 77 24
               C82 26 98 38 94 47
               C96 61 87 71 75 75
               C72 84 59 93 50 94
               C37 94 27 87 25 74
               C13 71 4 61 6 47
               C4 40 20 29 20 24
               C27 13 37 6 50 6Z"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-none font-serif">
            {card.days}
          </h3>

          <p className="text-[10px] sm:text-[12px] lg:text-[13px] font-semibold leading-none mt-[2px]">
            {card.daysLabel}
          </p>
        </div>
      </div>
    </div>

    <div
      className="
absolute
right-[-12%]
top-[35%]
w-[150px]
h-[150px]
sm:w-[185px]
sm:h-[185px]
md:right-[-10%]
md:w-[210px]
md:h-[210px]
lg:right-[-8%]
lg:w-[230px]
lg:h-[230px]
rounded-full
border
border-dashed
border-white/40
z-10
"
    />

    <div
      className="
absolute
right-[4%]
top-[60%]
w-[80px]
h-[80px]
sm:w-[95px]
sm:h-[95px]
md:w-[108px]
md:h-[108px]
md:right-[4.5%]
lg:right-[5%]
lg:w-[120px]
lg:h-[120px]
rounded-full
border-l
border-dashed
border-white/40
rotate-[18deg]
z-10
"
    />

    <img
      src={images[card.coupleImage]}
      alt=""
      className="
absolute
bottom-[-18px]
right-[-5px]
z-20
w-[190px]
h-auto
sm:w-[195px]
md:w-[195px]
md:h-[320px]
md:-bottom-[30px]
md:right-[-15px]
lg:-bottom-[35px]
lg:-right-[10px]
lg:w-[233px]
lg:h-[320px]
object-contain
"
    />
  </div>
);

/* ================= Travel-type Card ================= */
const TravelCard = ({ card }) => (
  <div className="relative w-full h-70 sm:h-72.5 lg:h-80 overflow-hidden rounded-[24px]">
    <div
      className="absolute inset-0"
      style={{ backgroundColor: card.bgColor || "#FBC71D" }}
    />

    <div
      className="absolute left-0 top-0 h-full w-[62%] sm:w-[64%] lg:w-[332px] overflow-hidden z-10"
      style={{ clipPath: "polygon(0 0, 82% 0, 100% 100%, 0 100%)" }}
    >
      <img
        src={images[card.backgroundImage]}
        alt="Travel Around The World"
        className="w-full h-full object-cover"
      />
    </div>

    <img
      src={images[card.coupleImage]}
      alt="Couple"
      className="
        absolute left-[50%] sm:left-[52%] lg:left-[270px] bottom-[-4%]
        w-[60%] sm:w-[44%] lg:w-[255px] max-w-[255px]
        h-auto object-contain z-40
      "
    />

    <div
      className="
        absolute left-[46%] sm:left-[47%] lg:left-[246px] top-[7%]
        w-13 h-13 sm:w-15 sm:h-15 lg:w-17 lg:h-17
        rounded-full border-2 border-white bg-[#14A8DB]
        flex flex-col items-center justify-center
        text-white shadow-lg -rotate-[4deg] z-50
      "
    >
      <span className="text-sm sm:text-[17px] lg:text-[19px] font-bold leading-none">
        {card.discount}
      </span>

      <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-semibold leading-none mt-0.5">
        {card.discountLabel}
      </span>
    </div>
  </div>
);

/* ================= Type -> Component map ================= */
const cardComponents = {
  family: FamilyCard,
  bali: BaliCard,
  travel: TravelCard,
};

const renderCard = (card) => {
  const Component = cardComponents[card.type];
  if (!Component) return null;
  return <Component key={card.id} card={card} />;
};

/* ================= chunkArray helper ================= */
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};


/* ================= Reusable dots component ================= */
const SliderDots = ({ slides, currentSlide, goToSlide }) => {
  if (slides.length <= 1) return null;
  return (
    <div className="mt-8 flex justify-center items-center gap-3">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => goToSlide(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            currentSlide === i
              ? "w-8.5 bg-[#153E4D]"
              : "w-2.5 bg-gray-300 hover:bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

/* ================= Native scroll slider hook =================
   Drives the slider using the browser's own horizontal scrolling
   (scroll-snap) instead of a CSS transform. This means the user
   can move between slides by:
     - scrolling/swiping with a finger (touch devices)
     - scrolling with a trackpad or mouse wheel (desktop)
     - pressing the Left/Right arrow keys
     - clicking a dot
     - waiting for auto-slide
   all of which stay in sync with each other, no dot-click needed.

   Returns:
     containerRef  - attach to the scrollable flex wrapper
     currentSlide  - index of the currently visible slide
     goToSlide(i)  - smoothly scrolls to slide i
================================================= */
const useScrollSlider = (slidesLength) => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    const el = containerRef.current;
    if (!el || slidesLength === 0) return;
    const target = ((index % slidesLength) + slidesLength) % slidesLength;
    el.scrollTo({ left: target * el.clientWidth, behavior: "smooth" });
  };

  // Keep currentSlide in sync whenever the user scrolls the
  // container themselves (finger swipe, trackpad, mouse wheel).
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

  // Auto-slide: advances every AUTO_SLIDE_INTERVAL ms, loops back
  // to the start, and restarts its countdown whenever the slide
  // changes (including manual scroll/keyboard/dot navigation).
  useEffect(() => {
    if (slidesLength <= 1) return;
    const timer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slidesLength, currentSlide]);

  // Keyboard navigation with the Left/Right arrow keys.
  useEffect(() => {
    if (slidesLength <= 1) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") goToSlide(currentSlide + 1);
      else if (e.key === "ArrowLeft") goToSlide(currentSlide - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slidesLength, currentSlide]);

  return { containerRef, currentSlide, goToSlide };
};

/* ============================================================
   MOBILE VIEW  (< 640px)  — 1 card per slide
   Edit this block only to change mobile-specific behavior
   (card count per slide, spacing, dot size, etc.)
============================================================ */
const MobileView = ({ cards }) => {
  const cardsPerSlide = 1; // <-- change this number to adjust mobile only
  const slides = chunkArray(cards, cardsPerSlide);
  const { containerRef, currentSlide, goToSlide } = useScrollSlider(slides.length);

  return (
    <div className="block sm:hidden">
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slideCards, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 snap-start grid grid-cols-1 gap-5 px-2"
          >
            {slideCards.map(renderCard)}
          </div>
        ))}
      </div>
      <SliderDots slides={slides} currentSlide={currentSlide} goToSlide={goToSlide} />
    </div>
  );
};

/* ============================================================
   TABLET VIEW  (640px – 1023px)  — 2 cards per slide
   Edit this block only to change tablet-specific behavior
============================================================ */
const TabletView = ({ cards }) => {
  const cardsPerSlide = 2; // <-- change this number to adjust tablet only
  const slides = chunkArray(cards, cardsPerSlide);
  const { containerRef, currentSlide, goToSlide } = useScrollSlider(slides.length);

  return (
    <div className="hidden sm:block lg:hidden">
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slideCards, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 snap-start grid grid-cols-2 gap-6 px-3"
          >
            {slideCards.map(renderCard)}
          </div>
        ))}
      </div>
      <SliderDots slides={slides} currentSlide={currentSlide} goToSlide={goToSlide} />
    </div>
  );
};

/* ============================================================
   DESKTOP / LARGE SCREEN VIEW  (>= 1024px)  — 3 cards per slide
   Edit this block only to change desktop-specific behavior
============================================================ */
const DesktopView = ({ cards }) => {
  const cardsPerSlide = 3; // <-- change this number to adjust desktop only
  const slides = chunkArray(cards, cardsPerSlide);
  const { containerRef, currentSlide, goToSlide } = useScrollSlider(slides.length);

  return (
    <div className="hidden lg:block">
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slideCards, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 snap-start grid grid-cols-3 gap-[27px] px-3"
          >
            {slideCards.map(renderCard)}
          </div>
        ))}
      </div>
      <SliderDots slides={slides} currentSlide={currentSlide} goToSlide={goToSlide} />
    </div>
  );
};

/* ============================================================
   MAIN COMPONENT
============================================================ */
const DiscountsOffers = () => {
  const cards = data.cards;

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
        <h4
          className="text-[#184B5D]"
          style={{
            fontFamily: "Playball",
            fontSize: "clamp(26px,5vw,42px)",
            fontWeight: 400,
          }}
        >
          {data.heading.subTitle}
        </h4>

        <h2
          className="mt-2 sm:mt-3 text-[#163F52]"
          style={{
            fontFamily: "Sitka",
            fontSize: "clamp(34px,7vw,76px)",
            fontWeight: 600,
            lineHeight: "100%",
          }}
        >
          {data.heading.title}
        </h2>
      </div>

      <div className="max-w-[1548px] mx-auto px-4 sm:px-6">
        <MobileView cards={cards} />
        <TabletView cards={cards} />
        <DesktopView cards={cards} />
      </div>
    </section>
  );
};

export default DiscountsOffers;