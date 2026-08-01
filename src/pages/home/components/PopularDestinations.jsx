import destinationsData from '../../../json/destinations.json';
import planeImg from '../../../assets/destination/plane.png';
import destinationImg from '../../../assets/destination/destination.png';
import egyptImg from '../../../assets/destination/egypt.jpg';
import greeceImg from '../../../assets/destination/greece.jpg';
import ukImg from '../../../assets/destination/uk.jpg';
import franceImg from '../../../assets/destination/france.jpg';
import rectangleImg from '../../../assets/destination/rectangle.png';
import discountImg from '../../../assets/destination/discount.png';
import arrowIcon from '../../../assets/destination/arrow-right.svg.svg';

const localImages = {
  egypt: egyptImg,
  greece: greeceImg,
  uk: ukImg,
  france: franceImg,
};

/* ── Reusable Destination Card Component ────────────────────────────── */
const DestinationCard = ({ destination = {}, imgName, className = '' }) => (
  <div
    className={`relative rounded-[16px] sm:rounded-[24px] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
  >
    <img
      src={localImages[imgName] || destination.image}
      onError={(e) => {
        e.target.src = destination.image;
      }}
      alt={destination.title || 'Destination'}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

    {/* Card Text Overlay */}
    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 text-white z-10">
      <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-[34px] font-bold tracking-wide leading-tight">
        {destination.title}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-200/95 mt-1 font-medium">
        {destination.travelers || '174,688 Travelers'}
      </p>
    </div>
  </div>
);

/* ── Reusable Adventure Promo Card Component ──────────────────────── */
const AdventureCard = ({ className = '' }) => (
  <div
    className={`relative flex flex-col items-center justify-center rounded-[16px] sm:rounded-[24px] overflow-hidden
      shadow-lg hover:shadow-2xl transition-all duration-300 text-white group cursor-pointer ${className}`}
  >
    <img
      src={rectangleImg}
      alt="Adventure Tour Background"
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
    />

    <div className="absolute inset-0 bg-black/15" />

    <img
      src={discountImg}
      alt="All Kinds Of Adventure Tour - 40% Discount"
      className="relative z-10 w-full h-full object-contain p-2 sm:p-4 md:p-6 group-hover:scale-105 transition-transform duration-500 ease-out"
    />
  </div>
);

/* ── Main Section Component ─────────────────────────────────────────── */
const PopularDestinations = () => {
  const egypt = destinationsData.find((d) => d.id === 'egypt') || {};
  const greece = destinationsData.find((d) => d.id === 'greece') || {};
  const uk = destinationsData.find((d) => d.id === 'uk') || {};
  const france = destinationsData.find((d) => d.id === 'france') || {};

  return (
    <section className="py-8 sm:py-16 md:py-20 layout bg-white">
      {/* Header Block */}
      <div className="flex items-end justify-between mb-6 sm:mb-10 md:mb-12">
        <div className="relative">
          <span className="italic text-lg sm:text-2xl md:text-[26px] block mb-1.5 text-[var(--color-footer1)]">
            Unique Destinations
          </span>

          <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-[46px] font-bold leading-[1.15] text-[var(--color-footer1)]">
            <span className="relative inline-block">
              Unlock Your
              <img
                src={planeImg}
                alt=""
                aria-hidden="true"
                className="absolute left-full top-0 ml-2 sm:ml-4 w-5 h-5 sm:w-8 sm:h-8 md:w-11 md:h-11 opacity-20 rotate-[15deg] pointer-events-none"
              />
            </span>
            <br />
            Next Adventure
          </h2>
        </div>

        <button
          type="button"
          aria-label="View more destinations"
          className="font-medium px-4 sm:px-6 md:px-8 py-1.5 sm:py-2.5 md:py-3 rounded-full text-[10px] sm:text-xs md:text-sm
            transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex-shrink-0 ml-3 flex items-center gap-1.5 cursor-pointer
            bg-[var(--color-footer1)] text-[var(--color-white)]"
        >
          <span>View More</span>
          <img src={arrowIcon} alt="" aria-hidden="true" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Grid Section Container */}
      <div className="relative">
        {/* Decorative Map Icon */}
        <img
          src={destinationImg}
          alt=""
          aria-hidden="true"
          className="absolute z-20 opacity-20 pointer-events-none -top-4 right-[38%] w-6 h-6 rotate-[-161deg]
            md:-top-8 md:right-[20%] md:w-[50px] md:h-[50px] lg:-top-10 lg:right-[22%] lg:w-[60px] lg:h-[60px]"
        />

        {/* Mobile / Tablet Grid (< md) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:hidden grid-rows-[150px_150px_170px]">
          <DestinationCard
            destination={egypt}
            imgName="egypt"
            className="col-start-1 row-start-1 row-span-2"
          />
          <DestinationCard
            destination={greece}
            imgName="greece"
            className="col-start-2 row-start-1"
          />
          <AdventureCard className="col-start-2 row-start-2" />
          <DestinationCard
            destination={uk}
            imgName="uk"
            className="col-start-1 row-start-3"
          />
          <DestinationCard
            destination={france}
            imgName="france"
            className="col-start-2 row-start-3"
          />
        </div>

        {/* Desktop Grid (md+) */}
        <div className="hidden md:grid gap-4 lg:gap-6 w-full aspect-[1548/1186] grid-rows-[512fr_224fr_386fr] grid-cols-[501fr_501fr_498fr]">
          <DestinationCard
            destination={egypt}
            imgName="egypt"
            className="col-start-1 row-start-1 w-full h-full"
          />
          <DestinationCard
            destination={greece}
            imgName="greece"
            className="col-start-2 row-start-1 w-full h-full"
          />
          <AdventureCard className="col-start-3 row-start-1 row-span-2 w-full h-full" />

          <DestinationCard
            destination={uk}
            imgName="uk"
            className="col-start-1 col-span-2 row-start-2 row-span-2 w-full h-full"
          />
          <DestinationCard
            destination={france}
            imgName="france"
            className="col-start-3 row-start-3 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;