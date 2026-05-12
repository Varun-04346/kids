import React, { useState } from 'react';
import { Search, Menu, X, User } from 'lucide-react';
import { navigation, assets } from '../../data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <img 
              src={assets.logo} 
              alt="Little Tech Wizard Logo" 
              className="h-16 md:h-20 w-auto object-contain mix-blend-multiply" 
            />
            <div className="hidden sm:flex items-center text-3xl font-rounded font-black tracking-tight pt-1">
              <span className="text-[#f46299]">Little</span>
              <span className="text-[#1ab2c0] ml-2">Tech</span>
              <span className="text-[#7a5ac9] ml-2">Wizard</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => 
                  `relative py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'text-primary-light' : 'text-navy hover:text-primary-light'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-light rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-navy hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <Link to="/login" className="flex items-center gap-2 px-6 py-2.5 gradient-purple text-white rounded-full font-bold text-sm hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all">
              <User size={18} />
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="p-2 text-navy">
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-navy hover:bg-gray-100 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-3 text-base font-semibold rounded-xl ${
                      isActive ? 'bg-pastel-mint text-primary-light' : 'text-navy hover:bg-gray-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-4 px-3">
                <Link to="/login" onClick={() => setIsOpen(false)} className="w-full flex items-center justify-center gap-2 px-6 py-3 gradient-purple text-white rounded-xl font-bold text-sm shadow-lg shadow-purple-500/20">
                  <User size={18} />
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
