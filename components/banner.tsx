import Navigation from './navigation';


const Banner = () => {
  return (
    <div className="flex flex-col w-full">
      <Navigation/>
      <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold md:px-10 sm:pl-4 md:py-2 sm:mb-0 md:mb-10">
        <div>
          <h1 className="md:text-6xl sm:text-[1.775rem] sm:mt-[1.5vh] text-inherit font-Megrim" aria-details='GMRseat shorthand phrase'>
            [GMR] <span className="text-[#992715de]">·</span> everything <span className="text-[#992715de]">·</span> anything 
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;