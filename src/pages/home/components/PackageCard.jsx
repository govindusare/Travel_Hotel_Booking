// src/pages/home/components/PackageCard.jsx

import Button from "../../../components/ui/Button";

// Images
import patagonia from "../../../assets/packages_and_faq_img/patagonia.png";
import dubai from "../../../assets/packages_and_faq_img/dubai.jpg";
import tokyo from "../../../assets/packages_and_faq_img/tokyo.jpg";

const images = {
  patagonia,
  dubai,
  tokyo,
};

function PackageCard({ item }) {
  return (
    <div className="bg-white rounded-3xl border border-[#E4EEF1] shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="p-3 pb-0">
        <img
          src={images[item.image]}
          alt={item.title}
          className="w-full h-60 rounded-2xl object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-5 py-5 flex flex-col gap-5">
        {/* Title + Rating */}
        <div className="flex justify-between items-start">
          <h3
            className="text-[#143F4A] font-semibold leading-tight"
            style={{
              fontFamily: "Sitka",
              fontSize: "34px",
            }}
          >
            {item.title}
          </h3>

          <div className="flex items-center gap-1 mt-2">
            <span className="text-[#F8A401] text-lg">⭐</span>
            <span className="text-[#143F4A] text-lg font-medium">
              {item.rating}
            </span>
          </div>
        </div>

        {/* Price */}
        <div>
          <span
            className="text-[#1E1E1E] font-semibold"
            style={{
              fontFamily: "Sitka",
              fontSize: "32px",
            }}
          >
            ${item.price.toLocaleString()}.00
          </span>

          <span
            className="text-gray-500 ml-1"
            style={{
              fontFamily: "Sitka",
              fontSize: "22px",
            }}
          >
            /Person
          </span>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 text-[#143F4A]">
            <span className="text-sm">🕒</span>

            <span
              style={{
                fontFamily: "Sitka",
                fontSize: "18px",
              }}
            >
              {item.days} Days
            </span>
          </div>

          <Button className="bg-[#143F4A] hover:bg-[#0f343d] rounded-full px-6 py-3 text-white flex items-center gap-2">
            Book A Trip
            <span>→</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;