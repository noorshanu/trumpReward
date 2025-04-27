import { Twitter, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-50 border-t border-orange-200 pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Side - Logo + Name */}
        <div className="flex items-center space-x-3">
          <img src="/images/logo.jpeg" alt="logo" className="w-12 h-12 rounded-full object-cover" />
          <span className="text-xl font-bold text-orange-500 tracking-wider">TRRRR</span>
        </div>

        {/* Center - Links */}
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#home" className="text-black hover:text-orange-500 font-medium transition">Home</a>
          <a href="#about" className="text-black hover:text-orange-500 font-medium transition">About</a>
          <a href="#tokenomics" className="text-black hover:text-orange-500 font-medium transition">Tokenomics</a>
          <a href="#community" className="text-black hover:text-orange-500 font-medium transition">Community</a>
        </div>

        {/* Right Side - Socials */}
        <div className="flex space-x-4">
          <a href="https://x.com/rewards_trump" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-500 transition">
            <Twitter size={24} />
          </a>
          <a href="https://t.me/trumptrrr" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-500 transition">
            <Send size={24} />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} TRRRR. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;