import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ageGroups } from '../../data/content';
import { motion } from 'framer-motion';

const AgeGroups = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy flex items-center justify-center md:justify-start gap-3">
            Stories for every age
            <span className="text-accent-pink animate-pulse">✨</span>
          </h2>
          <p className="text-gray-500 font-medium mt-2">Perfectly tailored for every stage of growing up</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {ageGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-6 md:p-8 rounded-[2.5rem] ${group.color} soft-shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden border-2 border-transparent hover:border-white/50`}
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500">
                  <img src={group.icon} alt={group.label} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-black text-navy leading-none">{group.label}</h3>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-navy/40 mt-1">{group.sublabel}</p>
                </div>
                
                <div className="mt-6 w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-navy shadow-sm transition-all group-hover:bg-accent-purple group-hover:text-white group-hover:rotate-90">
                  <ChevronRight size={20} />
                </div>
              </div>

              {/* Decorative background circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroups;
