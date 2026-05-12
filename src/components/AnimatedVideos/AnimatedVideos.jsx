import React from 'react';
import { Play, Clock, Users, ChevronRight } from 'lucide-react';
import { videos } from '../../data/content';
import { motion } from 'framer-motion';

const AnimatedVideos = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pastel-mint/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy flex items-center gap-2">
              Animated Learning Videos
              <span className="text-2xl">🎬</span>
            </h2>
            <p className="text-gray-500 font-medium mt-2">Fun and educational videos for growing minds</p>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-bold text-primary-light hover:text-primary-dark transition-all group bg-cream px-5 py-2.5 rounded-full soft-shadow">
            View all
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-accent-purple/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="relative aspect-[16/11] overflow-hidden m-3 rounded-[1.5rem]">
                <img 
                  src={video.image} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary-light group-hover:scale-110 transition-transform shadow-lg">
                    <Play size={24} className="ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-black uppercase tracking-wider text-navy shadow-sm">
                  {video.category}
                </div>
              </div>
              
              <div className="p-6 pt-2 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-accent-purple transition-colors leading-tight">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2 font-medium">
                  {video.description}
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-2 bg-pastel-sky text-blue-600 rounded-xl">
                    <Users size={14} />
                    {video.age}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-2 bg-pastel-lavender text-purple-600 rounded-xl">
                    <Clock size={14} />
                    {video.duration}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedVideos;
