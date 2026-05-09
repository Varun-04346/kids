import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ageGroups } from '../../data/content';
import { motion } from 'framer-motion';

const AgeGroups = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-navy mb-12 flex items-center gap-3">
          Stories for every age
          <span className="text-primary-light">✨</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ageGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-4xl ${group.color} soft-shadow hover-lift cursor-pointer overflow-hidden`}
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-4 transform transition-transform group-hover:scale-110 duration-500">
                  <img src={group.icon} alt={group.label} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-3xl font-bold text-navy mb-0.5">{group.label}</h3>
                <p className="text-sm font-bold text-gray-400 mb-6">{group.sublabel}</p>
                
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-navy shadow-sm transition-transform group-hover:translate-x-1">
                  <ChevronRight size={20} />
                </div>
              </div>

              {/* Decorative background circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroups;
