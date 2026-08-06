import { useState } from "react";
import bellIcon from "../../assets/heroicon/notification-01.png";
import menuIcon from "../../assets/heroicon/menu.png";
import closeIcon from "../../assets/heroicon/wrong.png";
import downArrow from "../../assets/heroicon/arrow-lang.png";
import profileImg from "../../assets/heroimg/profilee.png";
import wanderlyLogo from "../../assets/heroimg/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <nav className="layout absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1506px] h-[100px] mx-auto px-8 lg:px-0 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer group">
          <img
            src={wanderlyLogo}
            alt="Wanderly"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-white font-semibold text-[18px] tracking-wide">
          {navItems.map((item) => (
            <li key={item.label} className="relative group py-1">
              <a href={item.href} className="hover:text-cyan-300 transition-colors duration-300">
                {item.label}
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right Menu (Actions) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <button className="flex items-center gap-2 bg-[#0d3b52] hover:bg-[#144f6d] rounded-full pl-1 pr-4 py-1 border border-white/10 transition-all duration-300 cursor-pointer">
            <span className="bg-white text-[#0d3b52] font-bold text-sm rounded-full px-4 py-1.5">
              EN
            </span>
            <img
    src={downArrow}
    alt="Arrow"
    className="w-3 h-3"
/>
          </button>

          {/* Notifications */}
          <button className="relative bg-[#143f4a] hover:bg-[#1b5261] p-3 rounded-full text-white border border-white/10 transition-all duration-300 cursor-pointer">
            <img
               src={bellIcon}
               alt="Notification"
               className="w-5 h-5"
                />
          </button>

          {/* Profile */}
          <div className="relative group cursor-pointer">
            <img
              src={profileImg}
              alt="User Profile"
              className="w-11 h-11 rounded-full object-cover border-2 border-white/80 hover:border-cyan-400 transition-all duration-300 shadow-md"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* Notifications on Mobile */}
          <button
           onClick={() => setIsOpen(!isOpen)}
            className="text-white bg-white/10 p-2.5 rounded-full border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
          >
          <img
           src={menuIcon}
           alt="Menu"
           className="w-5 h-5"
          />
          </button>
         </div>    
        </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex justify-end bg-black/50 backdrop-blur-xs transition-all duration-300">
          <div className="bg-[#0d3b52] w-3/4 max-w-sm h-full p-8 shadow-2xl flex flex-col gap-8 text-white relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <img
                src={wanderlyLogo}
                alt="Wanderly"
                className="h-7 w-auto object-contain"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-1 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                <img src={closeIcon} alt="Close" className="w-5 h-5"       />
              </button>
            </div>

            <ul className="flex flex-col gap-6 text-lg font-medium">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-cyan-300 transition-colors py-2 border-b border-white/5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-4">
                <img
                  src={profileImg}
                  alt="User Profile"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/50"
                />
              </div>

              <div className="flex gap-3 mt-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-xl py-3 border border-white/10 transition-colors text-sm font-medium cursor-pointer">
                
                  <span>English (EN)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;