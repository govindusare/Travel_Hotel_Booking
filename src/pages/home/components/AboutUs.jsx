import backgroundImage from "../../../assets/aboutusimages/background.png";
import aboutData from "../../../json/aboutus.json";
import about1 from "../../../assets/aboutusimages/about1.jpg";
import about2 from "../../../assets/aboutusimages/about2.jpg";
import about3 from "../../../assets/aboutusimages/about3.jpg";
import about4 from "../../../assets/aboutusimages/about4.jpg";
import arrow from "../../../assets/aboutusimages/arrow.png";
import icon1 from "../../../assets/aboutusimages/icon1.png";
import icon2 from "../../../assets/aboutusimages/icon2.png";
const imageMap = { about1, about2, about3, about4, };
const imageStyles = ["row-span-2 rounded-tl-[500px] rounded-tr-[500px] rounded-bl-[700px] overflow-hidden aspect-[286/668]", "rounded-tl-[500px] rounded-tr-[500px] rounded-br-[500px] overflow-hidden aspect-[284/334]", "rounded-tl-[500px] rounded-tr-[500px] rounded-br-[500px] rotate-180 overflow-hidden aspect-[284/312]", "col-span-2 rounded-full overflow-hidden aspect-[596/204]",];
export default function AboutUs() {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className=" mx-15 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 grid grid-cols-1 lg:grid-cols-2 gap-y-10 sm:gap-y-12 md:gap-y-14 lg:gap-y-0 lg:gap-x-16 xl:gap-x-20 2xl:gap-x-28 [grid-template-areas:'subtitle'_'images'_'content'] lg:[grid-template-areas:'images_subtitle'_'images_content'] lg:grid-rows-[auto_1fr]">
                {/* About Us subtitle */}
                <p className="[grid-area:subtitle] text-[#143f4a] text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-[42px] mb-5 ">
                    About Us
                </p>
                {/* Images */}
                <div className="[grid-area:images] w-full max-w-280px sm:max-w-380px md:max-w-480px lg:max-w-420px min-1024px:max-1279px:max-w-480px xl:max-w-500px min-1440px:max-1535px:max-w-540px 2xl:max-w-560px mx-auto min-[1024px]:max-[1279px]:self-center min-[1440px]:max-[1535px]:self-center">
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-3 min-[1024px]:max-[1279px]:gap-4 xl:gap-4 min-[1440px]:max-[1535px]:gap-5 2xl:gap-6">
                        {
                            aboutData.images.map((item, index) => (
                                <div key={item.id} className={imageStyles[index]}>
                                    <img src={imageMap[item.image]} alt={item.alt} className="w-full h-full object-cover" />
                                </div>
                            ))}
                    </div>
                </div>
                {/* Content */}
                <div
                    className="[grid-area:content] flex flex-col items-center text-center lg:items-start lg:text-left gap-12 sm:gap-9 md:gap-11 lg:gap-15 xl:gap-14 2xl:gap-16">
                    {/* Title + description */}
                    <div className="flex flex-col items-center lg:items-start gap-3 max-w-xl lg:max-w-3xl">
                        <h2 className="font-semibold text-[#143f4a] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[60] 2xl:text-[60px] leading-tight">
                            Your Gateway to amazing experience
                        </h2>
                        <p className="text-[#7e7e7e] text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
                            A travel agency is a gateway to unforgettable journeys, offering expert guidance, personalized itineraries hassle.
                        </p>
                    </div>
                    {/* Features */}
                    <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 w-full">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-85px sm:gap-4 md:gap-5 text-center sm:text-left">
                            <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14">
                                <img src={icon1} alt="" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col gap-1 sm:gap-2 max-w-xl">
                                <p className="font-semibold text-[#143f4a] text-lg sm:text-xl md:text-2xl">
                                    Trusted travel Guided
                                </p>
                                <p className="text-[#7e7e7e] text-sm sm:text-base md:text-lg lg:text-xl">
                                    A travel agency is a gateway to unforgettable journeys, offering expert guidance, personalized itineraries hassle.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-5 text-center sm:text-left">
                            <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14">
                                <img src={icon2} alt="" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col gap-1 sm:gap-2 max-w-xl">
                                <p className="font-semibold text-[#143f4a] text-lg sm:text-xl md:text-2xl">
                                    Mission & Vision
                                </p>
                                <p className="text-[#7e7e7e] text-sm sm:text-base md:text-lg lg:text-xl">
                                    A travel agency is a gateway to unforgettable journeys, offering expert guidance, personalized itineraries hassle.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Stats */}
                    <div className="flex flex-wrap justify-center lg: gap-5 sm:gap-10 md:gap-14 lg:gap-5  xl:gap-5">
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <p className=" font-semibold text-[#143f4a] text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-[64px]">
                                15k+
                            </p>
                            <p className=" font-semibold text-[#143f4a] text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
                                Destinations covered
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <p className=" font-semibold text-[#143f4a] text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-[64px]">
                                7k+
                            </p>
                            <p className=" font-semibold text-[#143f4a] text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
                                Happy Travelers
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <p className=" font-semibold text-[#143f4a] text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-[64px]">
                                95%
                            </p>
                            <p className=" font-semibold text-[#143f4a] text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
                                Satisfaction Rate
                            </p>
                        </div>
                    </div>
                    {/* Button */}
                    <button type="button" className="mt-10 flex items-center gap-3 bg-[#143f4a] text-white rounded-full px-7 py-4 sm:px-8 sm:py-4 md:px-9 md:py-5 hover:opacity-90 transition-opacity">
                        <span className="flex items-center gap-2">
                            <span className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
                                Discover More
                            </span>
                            <img src={arrow} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}