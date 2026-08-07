// src/pages/home/components/OurPackages.jsx

import packages from "../../../json/packages.json";

import Button from "../../../components/ui/Button";
import PackageCard from "./PackageCard";

// Images
import airplane from "../../../assets/packages_and_faq_img/airplane.png";
import bgImage from "../../../assets/packages_and_faq_img/packages-bg.jpg";

function OurPackages() {
  return (
    <section
      className="w-full py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <p
                className="italic text-[#143F4A]"
                style={{
                  fontFamily: "Sitka",
                  fontSize: "24px",
                  fontWeight: 500,
                }}
              >
                Our Packages
              </p>

              <img
                src={airplane}
                alt="airplane"
                className="w-10 h-10 object-contain"
              />
            </div>

            <h2
              className="text-[#143F4A] leading-[100%] font-semibold"
              style={{
                fontFamily: "Sitka",
                fontSize: "clamp(42px,5vw,76px)",
              }}
            >
              Our Most
              <br />
              Popular Tours
            </h2>
          </div>

          {/* Right */}
          <div className="lg:self-start">
            <Button className="bg-[#143F4A] hover:bg-[#0f343d] rounded-full px-8 py-4 text-white flex items-center gap-3 shadow-md">
              View All Packages
              <span className="text-lg">→</span>
            </Button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {packages.map((item) => (
            <PackageCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPackages;