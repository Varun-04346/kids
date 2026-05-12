import React from 'react';
import { Bookmark, Clock, Users, ChevronRight } from 'lucide-react';
import { stories } from '../../data/content';
import { motion } from 'framer-motion';

const StoryCards = () => {
  return (
    <section className="py-16 md:py-24 bg-cream/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-light/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy flex items-center gap-2">
              Featured Stories
              <span className="text-2xl">📚</span>
            </h2>
            <p className="text-gray-500 font-medium mt-2">Discover our most popular adventures</p>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-bold text-primary-light hover:text-primary-dark transition-all group bg-white px-5 py-2.5 rounded-full soft-shadow">
            View all
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] overflow-hidden soft-shadow border border-transparent hover:border-accent-purple/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="relative aspect-[16/11] overflow-hidden m-3 rounded-[1.5rem]">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-navy hover:text-accent-pink hover:scale-110 transition-all shadow-sm">
                  <Bookmark size={20} className="transition-transform group-active:scale-90" />
                </button>
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-black uppercase tracking-wider text-navy shadow-sm">
                  {story.category}
                </div>
              </div>
              
              <div className="p-6 pt-2 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-accent-purple transition-colors leading-tight">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2 font-medium">
                  {story.description}
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-2 bg-pastel-pink text-accent-pink rounded-xl">
                    <Users size={14} />
                    {story.age}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-2 bg-pastel-mint text-primary-dark rounded-xl">
                    <Clock size={14} />
                    {story.duration}
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

export default StoryCards;
