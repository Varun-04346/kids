import React from 'react';
import { Bookmark, Clock, Users, ChevronRight } from 'lucide-react';
import { stories } from '../../data/content';
import { motion } from 'framer-motion';

const StoryCards = () => {
  return (
    <section className="py-20 bg-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-navy">Featured Stories</h2>
          </div>
          <a href="#" className="flex items-center gap-1 text-sm font-bold text-gray-500 hover:text-primary-light transition-colors group">
            View all
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-4xl overflow-hidden soft-shadow hover-lift cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-navy hover:text-primary-light transition-colors shadow-sm">
                  <Bookmark size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-primary-light transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2 font-medium">
                  {story.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 bg-rose-50 text-rose-500 rounded-lg">
                    <Users size={14} />
                    {story.age}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 bg-sky-50 text-sky-500 rounded-lg">
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
