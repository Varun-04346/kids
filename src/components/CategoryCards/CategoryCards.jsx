import React from 'react';
import * as Icons from 'lucide-react';
import { categories } from '../../data/content';
import { motion } from 'framer-motion';

const CategoryCards = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = Icons[category.icon];
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center p-6 rounded-4xl bg-white border border-gray-50 soft-shadow hover-lift cursor-pointer"
              >
                <div className={`w-20 h-20 rounded-full ${category.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                  <Icon size={32} className="text-navy/70 group-hover:text-primary-light transition-colors" />
                </div>
                <h3 className="font-bold text-lg text-navy mb-1">{category.name}</h3>
                <p className="text-xs text-gray-500 font-medium">{category.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
