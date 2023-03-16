import Navigation from './navigation';


const Banner = () => {
  return (
    <div className="flex flex-col " >
      <Navigation/>
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-4 mb-10">
      <div>
       <h1 className="text-6xl text-inherit font-Megrim" aria-details='Website phrase'>
          [GMR] <span className="text-[#992715de]">·</span> everything <span className="text-[#992715de]">·</span> anything 
        </h1>
      </div>

    </div>
    </div>
  );
};

export default Banner;