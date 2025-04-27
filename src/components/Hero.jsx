const Hero = () => {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="bg-orange-50 p-8 rounded-3xl shadow-lg">
            <h1 className="text-4xl sm:text-5xl font-black mb-6">TRUMP PRINTER</h1>
            <p className="text-xl mb-8">THE FIRST TRUMP REWARS TOKEN. HOLD TRRR. EARN TRUMP.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-bold transition-colors">
                Buy Now
              </button>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-bold transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="images/hero.png"
            alt="Trump Printer"
            className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    );
  };
  
  export default Hero;