import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/90 to-slate-900/90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative">
        <div className="text-center scroll-fade-in">
          <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl animate-float">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Welcome to
            </span>
            <span className="block text-white mt-2">Debug with Digital</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base text-purple-200 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
            Transforming Businesses through Innovative Technology Solutions
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
            <div className="rounded-md shadow hover-3d">
              <a
                href="#services"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transform transition-all duration-500 hover:scale-105 glow"
              >
                Explore Our Services
                <ArrowRight className="ml-2 animate-pulse" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;