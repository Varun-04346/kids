import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { assets } from '../../data/content';

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-navy leading-[1.1] mb-6">
              Stories Today,<br />
              <span className="text-accent-purple italic">Smiles Tomorrow</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 font-medium">
              Heartwarming stories, exciting adventures and important life lessons for young hearts.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 gradient-teal text-white rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 group">
                Explore Stories
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </button>
              <button className="px-8 py-4 bg-white text-navy border-2 border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center gap-3 soft-shadow">
                Watch Video
                <div className="w-8 h-8 rounded-full gradient-pink flex items-center justify-center text-white shadow-md shadow-pink-500/30">
                  <Play size={14} fill="white" />
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Side Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10">
              <img
                src={assets.hero}
                alt="Cozy storytelling illustration"
                className="w-full h-auto drop-shadow-2xl rounded-5xl"
              />
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 w-24 h-24 text-accent-purple/20"
            >
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0C60 20 80 40 100 50C80 60 60 80 50 100C40 80 20 60 0 50C20 40 40 20 50 0Z" />
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -right-10 w-20 h-20 text-pastel-purple"
            >
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="40" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
