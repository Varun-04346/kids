import React from 'react';
import * as Icons from 'lucide-react';
import { categories } from '../../data/content';
import { motion } from 'framer-motion';

const CategoryCards = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {categories.map((category, index) => {
            const Icon = Icons[category.icon];
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center p-6 md:p-8 rounded-[2.5rem] bg-white border border-gray-50/50 soft-shadow hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl ${category.color} flex items-center justify-center mb-4 transition-all group-hover:rotate-12 group-hover:scale-110 duration-500`}>
                  <Icon size={32} className="text-navy/70 group-hover:text-accent-purple transition-colors" />
                </div>
                <h3 className="font-black text-base md:text-lg text-navy mb-1">{category.name}</h3>
                <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">{category.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
