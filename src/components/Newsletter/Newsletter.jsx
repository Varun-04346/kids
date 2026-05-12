import React from 'react';
import { assets } from '../../data/content';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pastel-purple rounded-5xl p-8 lg:p-12 border border-purple-100 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          <div className="flex items-center gap-8 relative z-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-24 lg:w-32 hidden sm:block"
            >
              <img src={assets.newsletter} alt="Newsletter" className="w-full h-auto drop-shadow-lg" />
            </motion.div>
            
            <div className="text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-2">Stay in the loop!</h2>
              <p className="text-gray-500 font-medium">Get the best stories and fun updates delivered to your inbox.</p>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3 relative z-10">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-2xl bg-white border border-purple-100 focus:outline-none focus:ring-2 focus:ring-accent-purple min-w-[300px] font-medium"
            />
            <button className="px-8 py-4 gradient-pink text-white rounded-2xl font-bold hover:shadow-lg transition-all shadow-md shadow-pink-500/20">
              Subscribe
            </button>
          </div>

          {/* Decorative stars */}
          <div className="absolute top-6 right-10 text-accent-pink opacity-50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <div className="absolute bottom-10 left-10 text-accent-pink opacity-50 scale-150">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
