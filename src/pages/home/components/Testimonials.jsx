import { useState } from 'react';
import reviewsData from '../../../json/testimonials.json';
import mapImg from '../../../assets/destination/map.png';
import plane2Img from '../../../assets/testinomials/plane2.png';
import bagImg from '../../../assets/testinomials/bag.png';
import avatar1 from '../../../assets/testinomials/avatar_1.png';
import avatar2 from '../../../assets/testinomials/avatar_2.png';
import avatar3 from '../../../assets/testinomials/avatar_3.png';
import avatar4 from '../../../assets/testinomials/avatar_4.png';
import avatar5 from '../../../assets/testinomials/avatar_5.png';

const localAvatars = {
  'rev-1': avatar5,
  'rev-2': avatar2,
  'rev-3': avatar3,
  'rev-4': avatar4,
  'rev-5': avatar1,
};

const StarIcon = ({ className = '' }) => (
  <svg
    className={`w-3.5 h-3.5 ${className}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonials = () => {
  const [activeReviewId, setActiveReviewId] = useState('rev-1');
  const [mapImgFailed, setMapImgFailed] = useState(false);

  const activeReview = reviewsData.find(r => r.id === activeReviewId) || reviewsData[0];

  /* ── Reusable Tooltip Popover (Desktop) ─────────────────────── */
  const TooltipCard = () => {
    if (!activeReview) return null;
    const isTopHalf = activeReview.mapY < 45;

    return (
      <div
        style={{
          left: `${activeReview.mapX}%`,
          top: `${activeReview.mapY}%`,
        }}
        className={`hidden sm:block absolute z-30 w-[320px] md:w-[360px] lg:w-[380px] bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-gray-100/80 transition-all duration-300 ease-out pointer-events-none -translate-x-1/2 ${
          isTopHalf ? 'translate-y-[28px]' : '-translate-y-[calc(100%+28px)]'
        }`}
      >
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={i < activeReview.rating ? 'text-yellow-400 w-4 h-4' : 'text-gray-200 w-4 h-4'}
            />
          ))}
        </div>

        {/* Quote Content */}
        <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-4 font-normal">
          &ldquo;{activeReview.content}&rdquo;
        </p>

        {/* Reviewer Meta Details */}
        <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
          <img
            src={localAvatars[activeReview.id] || activeReview.avatar}
            alt={activeReview.name}
            className="w-11 h-11 rounded-full object-cover border border-[rgba(20,63,74,0.2)]"
          />
          <div>
            <h4 className="font-bold text-gray-900 text-base leading-tight">
              {activeReview.name}
            </h4>
            <p className="text-xs sm:text-sm font-semibold mt-0.5 text-[var(--color-card6)]">
              {activeReview.role}
            </p>
          </div>
        </div>

        {/* Arrow Tip */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-gray-100 shadow-md ${
            isTopHalf
              ? 'top-[-8px] border-t border-l'
              : 'bottom-[-8px] border-r border-b'
          }`}
        />
      </div>
    );
  };

  /* ── Reusable Map Pins/Avatars ───────────────────────────────── */
  const MapPins = () => (
    <>
      {reviewsData.map((review) => {
        const isActive = review.id === activeReviewId;
        return (
          <button
            key={review.id}
            onClick={() => setActiveReviewId(review.id)}
            onMouseEnter={() => setActiveReviewId(review.id)}
            style={{
              left: `${review.mapX}%`,
              top: `${review.mapY}%`,
            }}
            className="absolute z-20 group focus:outline-none transition-transform duration-300 hover:scale-110 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              {isActive && (
                <span className="absolute -inset-1.5 sm:-inset-2 rounded-full animate-ping bg-[rgba(20,63,74,0.2)]" />
              )}
              
              <img
                src={localAvatars[review.id] || review.avatar}
                alt={review.name}
                className={`w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover border-2 shadow-md transition-all duration-300 ${
                  isActive ? 'scale-110 border-[var(--color-footer1)]' : 'border-white'
                }`}
              />
            </div>
          </button>
        );
      })}
    </>
  );

  return (
    <section className="py-10 sm:py-16 md:py-20 layout bg-white overflow-hidden">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-20">
          <span className="italic text-lg sm:text-2xl block mb-1 text-[var(--color-footer1)]">
            Testimonials
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-[var(--color-footer1)]">
            Loved by Travelers Worldwide
          </h2>
        </div>

        {/* Map Container */}
        <div className="relative w-full mx-auto select-none rounded-3xl p-2 sm:p-4 flex flex-col items-center justify-center">
          {!mapImgFailed ? (
            <div className="relative w-full aspect-[1354/612] overflow-visible">
              <img
                src={plane2Img}
                alt=""
                aria-hidden="true"
                className="absolute -top-6 left-4 sm:-top-10 sm:left-12 md:-top-14 md:left-20 lg:-top-16 lg:left-28
                  w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[84px] lg:h-[84px]
                  opacity-20 pointer-events-none z-10 scale-x-[-1]"
              />

              <img
                src={mapImg}
                alt="World Map"
                onError={() => setMapImgFailed(true)}
                className="w-full h-full object-contain opacity-80 pointer-events-none"
              />

              <img
                src={bagImg}
                alt=""
                aria-hidden="true"
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 w-8 h-8 sm:w-12 sm:h-12 opacity-20 pointer-events-none z-10 -rotate-[8deg]"
              />

              {/* Tooltip Card & Pins */}
              <TooltipCard />
              <MapPins />
            </div>
          ) : (
            <div className="relative w-full aspect-[2/1] overflow-visible">
              <svg viewBox="0 0 1000 500" className="w-full h-full text-teal-600/10 opacity-70">
                <defs>
                  <pattern id="dottedPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="6" cy="6" r="1.5" className="fill-teal-700/25" />
                  </pattern>
                </defs>
                <path d="M100,120 C140,80 200,60 290,70 C310,110 270,170 240,190 C210,180 190,210 170,230 C130,210 110,150 100,120 Z" fill="url(#dottedPattern)" />
                <path d="M230,220 C250,220 280,250 270,290 C260,330 240,390 220,420 C200,430 190,390 200,340 C210,290 210,240 230,220 Z" fill="url(#dottedPattern)" />
                <path d="M300,50 C320,40 350,50 340,70 C320,90 290,90 290,70 Z" fill="url(#dottedPattern)" opacity="0.8" />
                <path d="M460,210 C510,190 560,210 580,250 C560,290 550,330 530,370 C500,390 460,350 450,310 C440,270 440,230 460,210 Z" fill="url(#dottedPattern)" />
                <path d="M430,110 C460,80 530,60 630,70 C730,80 830,70 880,110 C900,140 860,210 780,230 C730,210 680,230 630,220 C580,210 530,230 480,230 C440,210 420,150 430,110 Z" fill="url(#dottedPattern)" />
                <path d="M760,310 C800,310 840,330 830,370 C800,400 760,400 740,370 C730,340 740,320 760,310 Z" fill="url(#dottedPattern)" />
              </svg>

              <TooltipCard />
              <MapPins />
            </div>
          )}
        </div>

        {/* Mobile Testimonial Display Card (< 640px) */}
        {activeReview && (
          <div
            key={activeReview.id}
            className="block sm:hidden mt-6 max-w-md mx-auto bg-white rounded-2xl p-6 shadow-lg border border-gray-100/90 transition-all duration-300 ease-out opacity-100 translate-y-0"
          >
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={i < activeReview.rating ? 'text-yellow-400 w-4 h-4' : 'text-gray-200 w-4 h-4'}
                />
              ))}
            </div>

            <p className="text-gray-700 text-base leading-relaxed mb-4 font-normal">
              &ldquo;{activeReview.content}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
              <img
                src={localAvatars[activeReview.id] || activeReview.avatar}
                alt={activeReview.name}
                className="w-10 h-10 rounded-full object-cover border border-[rgba(20,63,74,0.2)]"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-base leading-tight">
                  {activeReview.name}
                </h4>
                <p className="text-xs sm:text-sm font-semibold mt-0.5 text-[var(--color-card6)]">
                  {activeReview.role}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;