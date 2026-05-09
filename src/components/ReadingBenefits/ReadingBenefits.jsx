import React from 'react';
import * as Icons from 'lucide-react';
import { benefits, assets } from '../../data/content';
import { motion } from 'framer-motion';

const ReadingBenefits = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-5xl p-8 lg:p-16 soft-shadow border border-gray-50 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
          
          {/* Left Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <img src={assets.benefits} alt="Benefits of reading" className="w-full h-auto drop-shadow-xl" />
          </motion.div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Why Reading<br />
              <span className="text-primary-light italic">Matters</span>
            </h2>
            <p className="text-lg text-gray-500 mb-12 font-medium">
              Stories help kids build imagination, kindness and confidence.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = Icons[benefit.icon];
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-pastel-mint flex items-center justify-center text-primary-light">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-navy mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-400 font-medium leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button className="mt-12 px-8 py-3.5 gradient-teal text-white rounded-full font-bold text-sm hover:shadow-lg transition-all">
              Learn More
            </button>
          </div>

          {/* Decorative floating shapes */}
          <div className="absolute top-10 right-10 w-24 h-24 bg-pastel-pink/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-pastel-sky/30 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default ReadingBenefits;
