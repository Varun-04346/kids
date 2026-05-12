import React from 'react';
import { Search, Filter, Sparkles, Star, BookOpen } from 'lucide-react';
import StoryCards from '../components/StoryCards/StoryCards';
import CategoryCards from '../components/CategoryCards/CategoryCards';
import { motion } from 'framer-motion';
import { assets } from '../data/content';

const Stories = () => {
  return (
    <div className="pt-20 min-h-screen bg-cream/30">
      {/* Stories Hero */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Animated background shapes */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-light/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-pastel-mint text-primary-dark rounded-full text-xs font-black uppercase tracking-widest mb-6"
              >
                <Sparkles size={14} className="text-accent-yellow" />
                Explore Our Library
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-black text-navy mb-6 leading-tight"
              >
                Magical Stories for <br />
                <span className="text-primary-light italic relative">Every Imagination</span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-xl mx-auto lg:mx-0 relative group"
              >
                <input 
                  type="text" 
                  placeholder="Search for adventures..."
                  className="w-full px-8 py-5 rounded-[2rem] bg-cream border-2 border-transparent focus:border-primary-light/20 focus:outline-none font-bold text-navy placeholder:text-gray-300 soft-shadow transition-all group-hover:shadow-xl"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-light rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Search size={20} />
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 relative hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={assets.newsletter} alt="Library" className="w-full h-auto drop-shadow-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <StoryCards />
      <div className="py-10" />
    </div>
  );
};

export default Stories;
