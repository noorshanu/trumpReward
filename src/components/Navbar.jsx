import { useState, useEffect } from 'react';
import { Menu, X, Twitter, Send } from 'lucide-react';
import { Link } from 'react-scroll'; // Important for smooth scroll!

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-orange-100/90 shadow-md backdrop-blur-md' : 'bg-orange-50/80'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo + TRRRR Text */}
          <div className="flex items-center space-x-3">
            <img src="/images/logo.jpeg" alt="logo" className="w-12 h-12 rounded-full object-cover" />
            <span className="text-2xl font-extrabold text-orange-500 tracking-wide font-bangers">TRRRR</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer text-black hover:text-orange-600 font-medium transition">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer text-black hover:text-orange-600 font-medium transition">
              About
            </Link>
            <Link to="tokenomics" smooth={true} duration={500} className="cursor-pointer text-black hover:text-orange-600 font-medium transition">
              Tokenomics
            </Link>
            <Link to="community" smooth={true} duration={500} className="cursor-pointer text-black hover:text-orange-600 font-medium transition">
              Community
            </Link>
          </div>

          {/* Social Icons + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-600 transition">
              <Twitter size={22} />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-600 transition">
              <Send size={22} />
            </a>
            <a href="#" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-orange-600 transition"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-orange-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40 md:hidden`}>
        <div className="flex flex-col p-6 space-y-6">
          <button onClick={() => setIsMenuOpen(false)} className="self-end">
            <X size={28} className="text-black hover:text-orange-600" />
          </button>
          <Link onClick={() => setIsMenuOpen(false)} to="home" smooth={true} duration={500} className="cursor-pointer text-black hover:text-orange-600 text-lg font-semibold">
            Home
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} to="about" smooth={true} duration={500} className="cursor-pointer text-black hover:text-orange-600 text-lg font-semibold">
            About
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} to="tokenomics" smooth={true} duration={500} className="cursor-pointer text-black hover:text-orange-600 text-lg font-semibold">
            Tokenomics
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} to="community" smooth={true} duration={500} className="cursor-pointer text-black hover:text-orange-600 text-lg font-semibold">
            Community
          </Link>
          <div className="flex gap-4 pt-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-600">
              <Twitter size={24} />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-600">
              <Send size={24} />
            </a>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;