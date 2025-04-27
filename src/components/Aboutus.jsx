import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className=" py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Image/Video */}
        <motion.div 
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:w-1/2 w-full"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="images/logo.jpeg" alt="aboutus" className="w-full h-full object-cover  border-4 border-dashed border-white rounded-3xl" />
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div 
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:w-1/2 w-full bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-center border-4 border-dashed border-orange-400"
        >
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900 font-bangers">
            About <span className="text-orange-400">TRUMP REWARDS</span>
          </h2>
          <p className="text-sm text-gray-500 mb-4 italic">
            The revolutionary token that prints Trump rewards every 5 minutes
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Discover the story behind the <strong>first Trump rewards token</strong> in the blockchain universe.
            Hold $TRRR and passively earn Sol rewards automatically.
          </p>
          <ul className="text-md text-gray-700 space-y-2 mb-6">
            <li>🚫 No staking, no claiming.</li>
            <li>✅ Instant passive rewards — just hold $TRRR.</li>
            <li>🔥 Built for degen patriots, powered by Solana.</li>
          </ul>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all"
          >
            Buy $TRRR →
          </motion.a>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutUs;