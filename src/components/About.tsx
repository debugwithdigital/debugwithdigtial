import React from 'react';
import { Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center transform hover:scale-105 transition-all duration-500">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">About Us</h2>
          <p className="mt-4 max-w-2xl text-xl text-purple-200 lg:mx-auto">
            Debug with Digital is a leading technology solutions provider committed to delivering innovative and scalable solutions for businesses worldwide.
          </p>
        </div>

        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="transform hover:-translate-y-2 hover:rotate-2 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-purple-400 animate-spin-slow" />
                  <h3 className="ml-3 text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-purple-800 p-8 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
                  <p className="text-lg text-purple-100">
                    Empowering businesses through innovative technology solutions. We strive to transform ideas into reality, helping our clients achieve their digital transformation goals through cutting-edge technology and expert consultation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 transform hover:scale-105 hover:rotate-2 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                alt="Digital Technology"
                className="rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transform transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;