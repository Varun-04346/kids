import React from 'react';
import { assets } from '../../data/content';
import { Camera, Users, Video, Bird } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={assets.logo} alt="Little Tech Wizard Logo" className="h-12 w-auto object-contain mix-blend-multiply" />
              <div className="flex items-center text-2xl font-rounded font-black tracking-tight pt-1">
                <span className="text-[#f46299]">Little</span>
                <span className="text-[#1ab2c0] ml-1.5">Tech</span>
                <span className="text-[#7a5ac9] ml-1.5">Wizard</span>
              </div>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed max-w-sm">
              Sparking imagination and nurturing young minds through the magic of storytelling. 
              Join our community of little dreamers today.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Camera, label: 'Instagram' },
                { Icon: Users, label: 'Facebook' },
                { Icon: Video, label: 'Youtube' },
                { Icon: Bird, label: 'Twitter' }
              ].map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-navy hover:gradient-purple hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-navy mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Stories', 'Categories', 'Age Groups', 'New Arrivals'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-500 font-medium hover:text-primary-light transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-navy mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Contact', 'Privacy Policy', 'Terms of Use'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-500 font-medium hover:text-primary-light transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6">Help</h4>
            <ul className="space-y-4">
              {['Support Center', 'FAQ', 'Guidelines', 'Safety'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-500 font-medium hover:text-primary-light transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-medium">
          <p>© 2026 Little Tech Wizard. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-light transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-light transition-colors">Terms</a>
          </div>
          <p>Made with ❤️ for young dreamers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
