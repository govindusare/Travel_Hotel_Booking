
import { useState } from "react";

import faqData from "../../../json/faq.json";

import bgImage from "../../../assets/packages_and_faq_img/faq-bg.jpg";
import faqImage from "../../../assets/packages_and_faq_img/faq-image.jpg";
import faqCard from "../../../assets/packages_and_faq_img/faq-card.png";

function FAQSection() {
  const [activeId, setActiveId] = useState(2);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section
      className="w-full py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1548px] mx-auto px-5 lg:px-8">
        {/* Heading */}

        <div className="text-center">
          <p
            className="text-[#143F4A]"
            style={{
              fontFamily: "Playball",
              fontSize: "42px",
              fontWeight: "400",
            }}
          >
            Our Faq
          </p>

          <h2
            className="text-[#143F4A] leading-[100%] mt-4"
            style={{
              fontFamily: "Sitka",
              fontWeight: "600",
              fontSize: "clamp(42px,5vw,76px)",
            }}
          >
            Have more question
            <br />
            We've answers?
          </h2>
        </div>

        {/* Main */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center mt-20">
          {/* Left */}

          <div className="space-y-7">
            {faqData.map((faq) => {
              const isOpen = activeId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm"
                >
                  {/* Header */}

                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between px-6 py-5"
                  >
                    <h3
                      className="text-[#143F4A] text-left"
                      style={{
                        fontFamily: "Sitka",
                        fontWeight: "600",
                        fontSize: "28px",
                      }}
                    >
                      {faq.question}
                    </h3>

                    <div className="w-[54px] h-[54px] rounded-full bg-[#143F4A] text-white flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                      {isOpen ? "−" : "+"}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 animate-fadeIn">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Small Image */}

                        <img
                          src={faqCard}
                          alt="Travel"
                          className="w-full md:w-[210px] h-[120px] rounded-2xl object-cover flex-shrink-0"
                        />

                        {/* Content */}

                        <div className="flex flex-col justify-between">
                          <p
                            className="text-[#8A8A8A] leading-7"
                            style={{
                              fontFamily: "Sitka",
                              fontSize: "18px",
                            }}
                          >
                            {faq.answer}
                          </p>

                          <button
                            className="mt-5 flex items-center gap-3 text-[#143F4A] font-semibold hover:gap-4 transition-all"
                            style={{
                              fontFamily: "Sitka",
                              fontSize: "26px",
                            }}
                          >
                            Get In Touch
                            <span className="text-xl">→</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Image */}

          <div className="flex justify-center xl:justify-end">
            <img
              src={faqImage}
              alt="FAQ"
              className="w-full max-w-[586px] h-[626px] object-cover rounded-3xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;