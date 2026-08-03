import React from "react";

import logo from "../../assets/Footer_icons/logo.svg";
import instagram from "../../assets/Footer_icons/instagram.png";
import facebook from "../../assets/Footer_icons/facebook.png";
import twitter from "../../assets/Footer_icons/garden_twitter-stroke-12.png";
import linkedin from "../../assets/Footer_icons/linkedin.png";
import call from "../../assets/Footer_icons/call.png";
import mail from "../../assets/Footer_icons/mail.png";
import location from "../../assets/Footer_icons/location.png";
import subscribeCursor from "../../assets/Footer_icons/Suscribe_cursor.png";

import footerData from "../../json/footer.json";

import gallery1 from "../../assets/Footer_images/Gallery-1.jpg";
import gallery2 from "../../assets/Footer_images/Gallery-2.jpg";
import gallery3 from "../../assets/Footer_images/Gallery-3.jpg";
import gallery4 from "../../assets/Footer_images/Gallery-4.jpg";
import gallery5 from "../../assets/Footer_images/Gallery-5.jpg";
import gallery6 from "../../assets/Footer_images/Gallery-6.jpg";

const galleryImages = {
  "Gallery-1.jpg": gallery1,
  "Gallery-2.jpg": gallery2,
  "Gallery-3.jpg": gallery3,
  "Gallery-4.jpg": gallery4,
  "Gallery-5.jpg": gallery5,
  "Gallery-6.jpg": gallery6,
};


const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-footer1)] mt-23">
      <div className="layout flex flex-col lg:flex-row">

        <div className="w-full lg:w-[340px] h-full pt-[35px] pb-[100px] pl-[30px] pr-[30px]  bg-white/8 flex flex-col">

          <div className="flex flex-col">

            <img src={logo} alt="Wanderly" className="w-[210px] h-[80px] object-contain" />

            <p className="mt-2 text-[12px] text-[var(--color-white)]">
              Discover handpicked destinations, expertly <br /> crafted itineraries,
              and unforgettable travel <br /> experiences around the world.
            </p>

          </div>

          <div className="flex items-center gap-3 mt-5">
            <button className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#859ca7] transition-colors duration-500">
              <img src={instagram} alt="Instagram" className="w-5 h-5 object-contain" />
            </button>

            <button className="w-9 h-9 rounded-full  bg-white/20 flex items-center justify-center hover:bg-[#859ca7] transition-colors duration-500">
              <img src={linkedin} alt="Linkedin" className="w-5 h-5 object-contain" />
            </button>

            <button className="w-9 h-9 rounded-full  bg-white/20 flex items-center justify-center hover:bg-[#859ca7] transition-colors duration-500">
              <img src={twitter} alt="Twitter" className="w-5 h-5 object-contain" />
            </button>

            <button className="w-9 h-9 rounded-full  bg-white/20 flex items-center justify-center hover:bg-[#859ca7] transition-colors duration-500">
              <img src={facebook} alt="Facebook" className="w-5 h-5 object-contain" />
            </button>

          </div>

          <div className="mt-10">
            <h3 className="text-white text-[22px] font-bold">
              Get In Touch
            </h3>
          </div>

          <div className="mt-6 flex flex-col gap-6 ">

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full  bg-white/20 flex items-center justify-center">
                <img src={call} alt="Phone" className="w-5 h-5 object-contain  " />
              </div>

              <span className="text-[var(--color-white)] text-[15px] ">
                +91 98765 43210 <br />
                +91 91234 56789
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full  bg-white/20 flex items-center justify-center">
                <img src={mail} alt="Email" className="w-5 h-5 object-contain" />
              </div>

              <span className="text-[var(--color-white)] text-[15px] ">
                wanderly@gmail.com <br />
                support.wanderly@gmail.com
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full  bg-white/20 flex items-center justify-center">
                <img src={location} alt="Location" className="w-5 h-5 object-contain mt-1" />
              </div>

              <span className="text-[var(--color-white)] text-[15px] ">
                Wanderly Tours & Travels Pvt. <br /> Ltd. Skyview Business Park, <br />Pune - 411045.
              </span>
            </div>
          </div>

        </div>

        <div className="flex flex-col flex-1">

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-0 px-0 lg:ml-8 mt-12 ">

            <div>
              <h2 className="text-white text-[22px] font-semibold">
                Get Updated The <br /> Latest Newsletter
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">      {/* ---------------???????????????/ gap */}

              <input
                type="email"
                placeholder="Enter Email"
                className="w-full sm:flex-1 lg:w-[420px] py-6 pl-10 text-white border border-white rounded-full"
              />


              <div className="sm:pl-0">
                <button className="w-full sm:w-auto py-6 px-5 bg-[#1CA8CB] flex items-center justify-center hover:bg-[#43c8e9] transition rounded-full">
                  <h2 className="text-white pr-3 font-semibold text-[18px]">
                    Subscribe Now
                  </h2>
                  <img src={subscribeCursor} alt="Suscribe" className="w-7 h-7" />
                </button>
              </div>

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-12">  {/* ----------------------------------gap */}

            <div className="lg:ml-10">

              <h3 className="text-white text-[25px] font-semibold mb-5">
                Useful Link
              </h3>

              <ul className="flex flex-col gap-4 text-white text-[18px] font-medium">

                <li className="hover:text-gray-300 cursor-pointer transition">
                  &gt; Home
                </li>

                <li className="hover:text-gray-300 cursor-pointer transition">
                  &gt; About Us
                </li>

                <li className="hover:text-gray-300 cursor-pointer transition">
                  &gt; Blog
                </li>

                <li className="hover:text-gray-300 cursor-pointer transition">
                  &gt; Contact Us
                </li>

                <li className="hover:text-gray-300 cursor-pointer transition">
                  &gt; Our Services
                </li>

              </ul>


            </div>

            <div className="hidden md:block">

              <h3 className="text-white text-[25px] font-semibold mb-6">
                Services
              </h3>

              <ul className="flex flex-col gap-4 text-white text-[18px] font-medium">

                <li>&gt; Wanderlust Adventures</li>
                <li>&gt; Globe Trotters Travel</li>
                <li>&gt; Odyssey Travel Services</li>
                <li>&gt; Jet Set Journeys</li>
                <li>&gt; Dream Destinations Travel</li>

              </ul>

            </div>

            <div className="lg:ml-10">

              <h3 className="text-white text-[25px] font-semibold mb-6">
                Gallery
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {footerData.gallery.map((item) => (
                  <div key={item.id} className="overflow-hidden rounded-xl">
                    <img src={galleryImages[item.image]} alt={item.alt} className="w-[94px] h-[94px] object-cover hover:scale-110 transition duration-300" />
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Bottom Footer */}

          <div className="border-t border-white/40 mt-0 lg:ml-10 ml-0 lg:ml-10 pt-8 pb-8 flex flex-col lg:flex-row items-center justify-between gap-5">

            <p className="text-sm font-semibold text-gray-400">
              © 2026 Wanderly. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-gray-400 text-sm font-semibold">

              <button className="hover:text-white transition">
                Faq
              </button>

              <button className="hover:text-white transition">
                Careers
              </button>

              <button className="hover:text-white transition">
                Contact
              </button>

            </div>

          </div>

        </div>


      </div>
    </footer>
  );
};

export default Footer;