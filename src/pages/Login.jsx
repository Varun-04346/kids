import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, User as Github, Globe as Google } from 'lucide-react';
import { Link } from 'react-router-dom';
import { assets } from '../data/content';

const Login = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 flex items-center justify-center bg-cream/30 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100"
      >
        {/* Left Side - Illustration & Branding */}
        <div className="flex-1 bg-pastel-mint p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-3 mb-12">
              <img src={assets.logo} alt="Logo" className="h-14 w-auto object-contain mix-blend-multiply" />
              <div className="flex items-center text-3xl font-rounded font-black tracking-tight pt-1">
                <span className="text-[#f46299]">Little</span>
                <span className="text-[#1ab2c0] ml-2">Tech</span>
                <span className="text-[#7a5ac9] ml-2">Wizard</span>
              </div>
            </Link>
            
            <h2 className="text-4xl font-black text-navy leading-tight mb-6">
              Welcome back to <br />
              <span className="text-accent-purple italic">Your Magical World!</span>
            </h2>
            <p className="text-navy/60 font-bold text-lg max-w-xs">
              Sign in to access your favorite stories and track your progress.
            </p>
          </div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 mt-8"
          >
            <img src={assets.hero} alt="Login Illustration" className="w-full h-auto drop-shadow-2xl rounded-3xl" />
          </motion.div>

          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-3xl font-black text-navy mb-2">Sign In</h1>
            <p className="text-gray-400 font-bold">Don't have an account? <Link to="/signup" className="text-accent-pink hover:underline">Sign up for free</Link></p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-black text-navy ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent-purple transition-colors">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-accent-purple/20 focus:bg-white focus:outline-none font-bold text-navy transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-black text-navy">Password</label>
                <button className="text-xs font-bold text-accent-pink hover:underline">Forgot password?</button>
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent-purple transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-accent-purple/20 focus:bg-white focus:outline-none font-bold text-navy transition-all"
                />
              </div>
            </div>

            <button className="w-full py-4 gradient-purple text-white rounded-2xl font-black text-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20">
              Sign In
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-8">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="px-4 text-xs font-black text-gray-300 uppercase tracking-widest bg-white">Or continue with</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3.5 rounded-2xl border-2 border-gray-50 hover:bg-gray-50 transition-all font-black text-navy">
                <Google size={20} className="text-rose-500" />
                Google
              </button>
              <button className="flex items-center justify-center gap-3 py-3.5 rounded-2xl border-2 border-gray-50 hover:bg-gray-50 transition-all font-black text-navy">
                <Github size={20} />
                Github
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
