import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Confetti from 'react-confetti';
import { toast, Toaster } from 'react-hot-toast';

const Tokenomics = () => {
  const [confetti, setConfetti] = useState(false);

  const copyContract = () => {
    const text = "Gom5MqTo1QmoUYvt139DJ938gaRvYS2gCoN5hCbjyTdQ";
    navigator.clipboard.writeText(text).then(() => {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 2000);
      toast.success('Contract address copied!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <div className="relative  py-10 px-5 min-h-screen overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      {confetti && <Confetti numberOfPieces={150} recycle={false} />}

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0}
        variants={fadeInUp}
        className="text-6xl font-bold text-center mb-2 font-bangers"
      >
        Tokenomics
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={1}
        variants={fadeInUp}
        className="text-center text-lg mb-10"
      >
        Transparent and fair distribution
      </motion.p>

      <div className="max-w-6xl mx-auto  items-center flex flex-col md:flex-row gap-8">

        {/* Token Details */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
          variants={fadeInUp}
          className="bg-white rounded-2xl shadow-xl p-6 w-full md:w-1/2 border-4 border-orange-400"
        >
          <h3 className="text-2xl font-bold mb-4 border-b-2 border-dotted border-orange-400 pb-2">
            Token Details
          </h3>
          <table className="w-full text-left">
            <tbody className="text-gray-700">
              <tr className="border-b border-dotted">
                <td className="py-2 font-semibold">Token Name</td>
                <td className="py-2">TRUMP PRINTER</td>
              </tr>
              <tr className="border-b border-dotted">
                <td className="py-2 font-semibold">Symbol</td>
                <td className="py-2">TRRR</td>
              </tr>
              <tr className="border-b border-dotted">
                <td className="py-2 font-semibold">Total Supply</td>
                <td className="py-2">1,000,000,000 (1B)</td>
              </tr>
              <tr className="border-b border-dotted">
                <td className="py-2 font-semibold">Min hold</td>
                <td className="py-2">100K</td>
              </tr>
              <tr className="border-b border-dotted">
                <td className="py-2 font-semibold">Distribute Interval</td>
                <td className="py-2">5 Min</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Contract</td>
                <td className="py-2 flex items-center gap-2">
                  <span className="truncate max-w-[160px]">Gom5MqTo1QmoUYvt139DJ938gaRvYS2gCoN5hCbjyTdQ</span>
                  <button
                    onClick={copyContract}
                    className="bg-orange-400 hover:bg-orange-500 text-white p-1 px-2 rounded-md text-sm neon-glow"
                  >
                    Copy
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Images Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={3}
          variants={fadeInUp}
          className="grid grid-cols-2 gap-4 w-full md:w-1/2 h-full"
        >
          {["/images/logo.jpeg", "/images/trump.png"].map((src, index) => (
            <Tilt key={index} glareEnable={true} glareMaxOpacity={0.45} scale={1.05} transitionSpeed={250}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300"
                />
              </motion.div>
            </Tilt>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Tokenomics;