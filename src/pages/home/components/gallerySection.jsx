import React from "react";
import mapSvg from "../../../assets/gallery_image/Map.svg";
import airplaneSvg from "../../../assets/gallery_image/Airplane.svg";
import travelSvg from "../../../assets/gallery_image/Travel.svg";
import vectorLine from "../../../assets/gallery_image/Vector 1053.svg";
import gallery from "../../../json/gallery.json";
import image1 from "../../../assets/gallery_image/image 1.jpg";
import image2 from "../../../assets/gallery_image/image 2.jpg";
import image3 from "../../../assets/gallery_image/image 3.jpg";
import image4 from "../../../assets/gallery_image/image 4.jpg";
import image5 from "../../../assets/gallery_image/image 5.jpg";
import image6 from "../../../assets/gallery_image/image 6.jpg";

const images = { image1, image2, image3, image4, image5, image6 };

// Group gallery items by their Figma column
const columns = [1, 2, 3, 4].map((col) => gallery.filter((g) => g.column === col));

const GalleryItem = ({ item }) => (
  <img
    src={images[item.image]}
    alt={item.alt}
    className={`rounded-[24px] object-cover shadow-sm w-[${item.width}] h-[${item.height}] mt-[${item.topOffset}]`}
  />
);

const GallerySection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFB] py-20 lg:py-28">
      {/* ===== Background dashed/wavy vector (Figma: Vector 1053 — 1728x938, opacity 1) ===== */}
      <img
        src={vectorLine}
        alt=""
        className="absolute top-0 left-0 z-0 hidden lg:block w-full h-auto pointer-events-none select-none opacity-100"
      />

      {/* ===== Decorative floating icons (from Figma) ===== */}
      <img
        src={mapSvg}
        alt=""
        className="absolute hidden lg:block z-0 pointer-events-none select-none opacity-20 w-[78px] h-[78px] right-[102px] top-[54px]"
      />
      <img
        src={travelSvg}
        alt=""
        className="absolute hidden lg:block z-0 pointer-events-none select-none opacity-20 w-[74px] h-[74px] left-[102px] bottom-[150px]"
      />
      <img
        src={airplaneSvg}
        alt=""
        className="absolute hidden lg:block z-0 pointer-events-none select-none opacity-20 w-[84px] h-[84px] right-[120px] bottom-[70px]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        {/* ===== Heading ===== */}
        <div className="mb-16 flex flex-col items-center gap-3 text-center lg:mb-20">
          <p className="font-['Playball'] text-3xl md:text-4xl lg:text-[42px] text-[#143f4a]">
            Best Memorable Places
          </p>
          <h2 className="font-['Sitka'] text-4xl md:text-6xl lg:text-[76px] font-semibold text-[#143f4a] leading-none">
            Recent Gallery
          </h2>
        </div>

        {/* ===== Mobile / Tablet ===== */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {gallery.map((item) => (
            <img
              key={item.id}
              src={images[item.image]}
              alt={item.alt}
              className="h-72 w-full rounded-[24px] object-cover"
            />
          ))}
        </div>

        {/* ===== Desktop — exact Figma layout ===== */}
        <div className="hidden lg:flex justify-center items-start gap-[24px]">
          {columns.map((col, i) => (
            <div key={i} className="flex flex-col gap-[24px]">
              {col.map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </div>
          ))}
        </div>

        {/* ===== Button ===== */}
        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            className="
              flex items-center gap-[12px]
              rounded-[50px] bg-[#143f4a]
              px-[38px] py-[18px]
              font-['Sitka'] font-semibold text-white text-[20px] lg:text-[28px]
              shadow-md transition-all duration-300
              hover:bg-[#0D2F39] hover:scale-[1.02]
            "
          >
            View All Gallery
            <span className="inline-block">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
