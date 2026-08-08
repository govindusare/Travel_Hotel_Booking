

// import React from "react";
// import { ArrowRight } from "lucide-react";
// import categoryData from "../../../json/TourCategories.json";
// // Images
// import cruise from "../../../assets/home/tourCategories/cruise.jpg";
// import hiking from "../../../assets/home/tourCategories/hiking.jpg";
// import bird from "../../../assets/home/tourCategories/bird.jpg";
// import wildlife from "../../../assets/home/tourCategories/wildlife.jpg";
// import walking from "../../../assets/home/tourCategories/walking.jpg";// SVG
// import TravelIcon from "../../../assets/home/tourCategories/Travel.svg";
// import NotebookIcon from "../../../assets/home/tourCategories/Notebook.svg";
// import Vector1052 from "../../../assets/home/tourCategories/Vector1052.svg";


// const imageMap = {
//     cruise,
//     hiking,
//     bird,
//     wildlife,
//     walking,
// };

// const categories = categoryData.map((item) => ({
//     ...item,
//     image: imageMap[item.image],
// }));



// const TourCategories = () => {
//     return (
//         <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">

//             {/* Background Vector */}

//             <img
//                 src={Vector1052}
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-80"
//             />

//             {/* Decorative Icons */}

//             <img
//                 src={NotebookIcon}
//                 alt=""
//                 className="hidden lg:block absolute w-16 top-24 right-[18%] xl:w-20 xl:top-36 xl:right-[25%] 2xl:w-28 2xl:top-42 2xl:right-[28%] pointer-events-none select-none"
//             />

//             <img
//                 src={TravelIcon}
//                 alt=""
//                 className="hidden md:block absolute w-24 bottom-8 left-4 md:w-24 md:bottom-10 md:left-8 lg:w-20 lg:bottom-36 lg:left-20 pointer-events-none select-none"
//             />

//             {/* Heading */}

//             <div className="relative z-10 text-center px-4 sm:px-6">

//                 <h4
//                     className="font-['Playball'] text-3xl sm:text-4xl md:text-5xl lg:text-[42px] text-[#173F52]"
//                 >
//                     Wonderful Place For You
//                 </h4>

//                 <h2
//                     className="mt-2 text-[#173F52] font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-tight"
//                     style={{
//                         fontFamily: "Sitka",
//                     }}
//                 >
//                     Tour Categories
//                 </h2>

//             </div>

//             {/* Cards */}

//             <div className="relative z-10 mt-10 sm:mt-14 md:mt-16 lg:mt-20 w-full overflow-hidden pb-12 sm:pb-16 lg:pb-20">
//                 {/* Desktop Layout - Semi Circle */}
//                 <div className="relative mx-auto hidden h-[420px] max-w-[1700px] lg:block lg:h-[480px] 2xl:h-[560px]">
//                     <div
//                         className="absolute inset-0 origin-top scale-[0.62] sm:scale-[0.62] lg:scale-[0.72] xl:scale-[0.88] 2xl:scale-100 transition-transform duration-300"
//                     >
//                         {categories.map((item, index) => {
//                             const total = categories.length;

//                             // Spread cards from -40° to +40°
//                             const angle = -40 + (80 / (total - 1)) * index;

//                             const radius = 650;

//                             const horizontalSpacing = 1.4; // Increase to 1.4, 1.5, etc.

//                             const x =
//                                 Math.sin((angle * Math.PI) / 180) *
//                                 radius *
//                                 horizontalSpacing;
//                             const y = Math.cos((angle * Math.PI) / 180) * radius;

//                             return (
//                                 <div
//                                     key={index}
//                                     className="group absolute left-1/2 top-0 transition-all duration-500 ease-out hover:-translate-y-4"
//                                     style={{
//                                         transform: `
//                       translateX(${x - 130}px)
//                       translateY(${radius - y}px)
//                       rotate(${angle * 0.18}deg)
//                     `,
//                                     }}
//                                 >
//                                     <div className="flex w-65.5 flex-col items-center">
//                                         {/* Image */}
//                                         <div className="w-full overflow-hidden rounded-3xl transition-all duration-300 group-hover:shadow-xl">
//                                             <img
//                                                 src={item.image}
//                                                 alt={item.title}
//                                                 className="h-65.5 w-full rounded-[20px] object-cover transition duration-500 group-hover:scale-105"
//                                             />
//                                         </div>

//                                         {/* Title */}
//                                         <h3
//                                             className="mt-5 text-center text-[26px] font-bold leading-tight text-[#143F4A]"
//                                             style={{
//                                                 fontFamily: "Sitka, serif",
//                                             }}
//                                         >
//                                             {item.title}
//                                         </h3>

//                                         {/* Button */}
//                                         <button className="mt-4 flex h-11.5 w-42.5 items-center justify-center gap-2 rounded-full border border-gray-400 bg-white text-[20px] font-medium text-[#143F4A]  transition-all duration-300 hover:border-[#143F4A] hover:bg-[#143F4A] hover:text-white">
//                                             Read More
//                                             <ArrowRight
//                                                 size={16}
//                                                 className="transition-transform group-hover:translate-x-1"
//                                             />
//                                         </button>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* Tablet */}
//                 <div className="hidden gap-4 overflow-x-auto px-4 sm:gap-6 sm:px-6 md:flex lg:hidden snap-x snap-mandatory scrollbar-hide">
//                     {categories.map((item, index) => (
//                         <div
//                             key={index}
//                             className="group w-[220px] flex-none snap-start sm:w-[260px]"
//                         >
//                             <div className="aspect-square w-full overflow-hidden rounded-[24px] p-2 shadow-md">
//                                 <img
//                                     src={item.image}
//                                     alt={item.title}
//                                     className="h-full w-full rounded-[20px] object-cover transition duration-500 group-hover:scale-105"
//                                 />
//                             </div>

//                             <h3
//                                 className="mt-4 text-center text-xl font-bold text-[#143F4A] sm:text-[24px]"
//                                 style={{
//                                     fontFamily: "Sitka, serif",
//                                 }}
//                             >
//                                 {item.title}
//                             </h3>

//                             <button className="mx-auto mt-4 flex h-[44px] w-[160px]  items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-[#143F4A] transition hover:bg-[#143F4A] hover:text-white sm:h-[46px] sm:w-[170px]">
//                                 Read More
//                                 <ArrowRight
//                                     size={16}
//                                     className="transition-transform group-hover:translate-x-1"
//                                 />
//                             </button>
//                         </div>
//                     ))}
//                 </div>


//                 {/* Mobile */}
//                 <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 gap-4">
//                     {categories.map((item, index) => (
//                         <div
//                             key={index}
//                             className="group flex-none w-full snap-center"
//                         >
//                             <div className="mx-auto max-w-[320px]">
//                                 <div className="overflow-hidden rounded-[24px] p-2">
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         className="h-[240px] w-full rounded-[20px] object-cover transition duration-500 group-hover:scale-105"
//                                     />
//                                 </div>

//                                 <h3
//                                     className="mt-4 text-center text-xl font-bold text-[#143F4A]"
//                                     style={{ fontFamily: "Sitka, serif" }}
//                                 >
//                                     {item.title}
//                                 </h3>

//                                 <button className="mx-auto mt-4 flex h-[44px] w-[160px] items-center justify-center gap-2 rounded-full border text-[#143F4A] transition hover:bg-[#143F4A] hover:text-white">
//                                     Read More
//                                     <ArrowRight
//                                         size={16}
//                                         className="transition-transform group-hover:translate-x-1"
//                                     />
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TourCategories;

import React from "react";
import { ArrowRight } from "lucide-react";
import categoryData from "../../../json/TourCategories.json";
// Images
import cruise from "../../../assets/home/tourCategories/cruise.jpg";
import hiking from "../../../assets/home/tourCategories/hiking.jpg";
import bird from "../../../assets/home/tourCategories/bird.jpg";
import wildlife from "../../../assets/home/tourCategories/wildlife.jpg";
import walking from "../../../assets/home/tourCategories/walking.jpg";// SVG
import TravelIcon from "../../../assets/home/tourCategories/Travel.svg";
import NotebookIcon from "../../../assets/home/tourCategories/Notebook.svg";
import Vector1052 from "../../../assets/home/tourCategories/Vector1052.svg";


const imageMap = {
    cruise,
    hiking,
    bird,
    wildlife,
    walking,
};

const categories = categoryData.map((item) => ({
    ...item,
    image: imageMap[item.image],
}));



const TourCategories = () => {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">

            {/* Background Vector */}

            <img
                src={Vector1052}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-80"
            />

            {/* Decorative Icons */}

            <img
                src={NotebookIcon}
                alt=""
                className="hidden lg:block absolute w-16 top-24 right-[18%] xl:w-20 xl:top-36 xl:right-[25%] 2xl:w-28 2xl:top-42 2xl:right-[28%] pointer-events-none select-none"
            />

            <img
                src={TravelIcon}
                alt=""
                className="hidden md:block absolute w-24 bottom-8 left-4 md:w-24 md:bottom-10 md:left-8 lg:w-20 lg:bottom-36 lg:left-20 pointer-events-none select-none"
            />

            {/* Heading */}

            <div className="relative z-10 text-center px-4 sm:px-6">

                <h4
                    className="font-['Playball'] text-3xl sm:text-4xl md:text-5xl lg:text-[42px] text-[#173F52]"
                >
                    Wonderful Place For You
                </h4>

                <h2
                    className="mt-2 text-[#173F52] font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-tight"
                    style={{
                        fontFamily: "Sitka",
                    }}
                >
                    Tour Categories
                </h2>

            </div>

            {/* Cards */}

            <div className="relative z-10 mt-10 sm:mt-14 md:mt-16 lg:mt-20 w-full overflow-hidden pb-12 sm:pb-16 lg:pb-20">
                {/* Desktop Layout - Semi Circle */}
                <div className="relative mx-auto hidden h-[420px] max-w-[1700px] lg:block lg:h-[480px] 2xl:h-[560px]">
                    <div
                        className="absolute inset-0 origin-top scale-[0.62] sm:scale-[0.62] lg:scale-[0.72] xl:scale-[0.88] 2xl:scale-100 transition-transform duration-300"
                    >
                        {categories.map((item, index) => {
                            const total = categories.length;

                            // Spread cards from -40° to +40°
                            const angle = -40 + (80 / (total - 1)) * index;

                            const radius = 650;

                            const horizontalSpacing = 1.4; // Increase to 1.4, 1.5, etc.

                            const x =
                                Math.sin((angle * Math.PI) / 180) *
                                radius *
                                horizontalSpacing;
                            const y = Math.cos((angle * Math.PI) / 180) * radius;

                            return (
                                <div
                                    key={index}
                                    className="group absolute left-1/2 top-0 will-change-transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-4"
                                    style={{
                                        transform: `
                      translateX(${x - 130}px)
                      translateY(${radius - y}px)
                      rotate(${angle * 0.18}deg)
                    `,
                                    }}
                                >
                                    <div className="flex w-65.5 flex-col items-center">
                                        {/* Image */}
                                        <div className="w-full overflow-hidden rounded-3xl transition-all duration-500 ease-out group-hover:shadow-xl">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-65.5 w-full rounded-[20px] object-cover transition-transform duration-600 ease-out will-change-transform group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="mt-5 text-center text-[26px] font-bold leading-tight text-[#143F4A]"
                                            style={{
                                                fontFamily: "Sitka, serif",
                                            }}
                                        >
                                            {item.title}
                                        </h3>

                                        {/* Button */}
                                        <button className="mt-4 flex h-11.5 w-42.5 items-center justify-center gap-2 rounded-full border border-gray-400 bg-white text-[20px] font-medium text-[#143F4A] transition-all duration-300 ease-in-out hover:border-[#143F4A] hover:bg-[#143F4A] hover:text-white">
                                            Read More
                                            <ArrowRight
                                                size={16}
                                                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                                            />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tablet */}
                <div className="hidden gap-4 overflow-x-auto px-4 sm:gap-6 sm:px-6 md:flex lg:hidden snap-x snap-mandatory scrollbar-hide">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="group w-[220px] flex-none snap-start sm:w-[260px]"
                        >
                            <div className="aspect-square w-full overflow-hidden rounded-[24px] p-2 shadow-md transition-shadow duration-300 ease-out group-hover:shadow-xl">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full rounded-[20px] object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
                                />
                            </div>

                            <h3
                                className="mt-4 text-center text-xl font-bold text-[#143F4A] sm:text-[24px]"
                                style={{
                                    fontFamily: "Sitka, serif",
                                }}
                            >
                                {item.title}
                            </h3>

                            <button className="mx-auto mt-4 flex h-[44px] w-[160px] items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-[#143F4A] transition-all duration-300 ease-in-out hover:bg-[#143F4A] hover:text-white sm:h-[46px] sm:w-[170px]">
                                Read More
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                                />
                            </button>
                        </div>
                    ))}
                </div>


                {/* Mobile */}
                <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 gap-4">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="group flex-none w-full snap-center"
                        >
                            <div className="mx-auto max-w-[320px]">
                                <div className="overflow-hidden rounded-[24px] p-2 transition-shadow duration-300 ease-out group-hover:shadow-xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-[240px] w-full rounded-[20px] object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
                                    />
                                </div>

                                <h3
                                    className="mt-4 text-center text-xl font-bold text-[#143F4A]"
                                    style={{ fontFamily: "Sitka, serif" }}
                                >
                                    {item.title}
                                </h3>

                                <button className="mx-auto mt-4 flex h-[44px] w-[160px] items-center justify-center gap-2 rounded-full border text-[#143F4A] transition-all duration-300 ease-in-out hover:bg-[#143F4A] hover:text-white">
                                    Read More
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
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