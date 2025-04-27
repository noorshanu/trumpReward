import { useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-orange-50/80 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
                <img src="images/logo.jpeg" alt="logo" className="w-14 h-14 rounded-full" />
           
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-black hover:text-orange-600">Home</a>
              <a href="#" className="text-black hover:text-orange-600">About</a>
              <a href="#" className="text-black hover:text-orange-600">Tokenomics</a>
              <a href="#" className="text-black hover:text-orange-600">Community</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-orange-600"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-orange-50">
            <a href="#" className="block px-3 py-2 text-black hover:text-orange-600">Home</a>
            <a href="#" className="block px-3 py-2 text-black hover:text-orange-600">About</a>
            <a href="#" className="block px-3 py-2 text-black hover:text-orange-600">Tokenomics</a>
            <a href="#" className="block px-3 py-2 text-black hover:text-orange-600">Community</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;