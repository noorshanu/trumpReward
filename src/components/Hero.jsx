import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div 
      className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 min-h-[600px]"
      id="community"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      
      {/* Left Side */}
      <motion.div 
        variants={leftVariants} 
        className="lg:w-1/2 w-full h-full gap-3.5 flex items-center justify-center"
      >
        <div className="p-10 rounded-3xl  w-full h-full  flex flex-col justify-center">
          <motion.h1 className="text-6xl sm:text-5xl font-black mb-6 leading-tight font-bangers">
         TRUMP REWARD
          </motion.h1>
          <motion.p className="text-xl mb-8 text-gray-700">
            THE FIRST TRUMP REWARD TOKEN. HOLD TRRR. EARN TRUMP.
          </motion.p>
          <motion.p className="text-lg mb-6 text-gray-600">
            Experience the power of automatic Trump rewards every 5 minutes. No staking, no claiming - just pure passive income for true patriots.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md"
            >
              Buy Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              href="https://t.me/trumptrrr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md"
            >
              Join Community
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div 
        variants={rightVariants}
        className="lg:w-1/2 w-full h-full flex items-center justify-center m-3"
      >
        <Tilt glareEnable={true} glareMaxOpacity={0.45} scale={1.02} tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <img
            src="/images/hero.png"
            alt="Trump Printer"
            className="rounded-3xl shadow-2xl object-cover w-full h-full max-h-[500px]"
          />
        </Tilt>
      </motion.div>

    </motion.div>
  );
};

export default Hero;