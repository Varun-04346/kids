import React, { useState } from 'react';
import { Search, Menu, X, User } from 'lucide-react';
import { navigation, assets } from '../../data/content';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={assets.logo} alt="TaleTree Logo" className="w-12 h-12 object-contain" />
            <div>
              <span className="text-2xl font-rounded font-bold text-navy tracking-tight">TaleTree</span>
              <p className="text-[10px] text-gray-500 font-medium leading-none">Grow minds. One story at a time.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative py-2 text-sm font-semibold transition-colors ${
                  item.active ? 'text-primary-light' : 'text-navy hover:text-primary-light'
                }`}
              >
                {item.name}
                {item.active && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-light rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-navy hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 gradient-teal text-white rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 transition-all">
              <User size={18} />
              Login
            </button>
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
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-3 text-base font-semibold rounded-xl ${
                    item.active ? 'bg-pastel-mint text-primary-light' : 'text-navy hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 gradient-teal text-white rounded-xl font-bold text-sm">
                  <User size={18} />
                  Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
