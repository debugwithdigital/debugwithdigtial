import React from 'react';
import { Cloud, Shield, Globe, Smartphone, Cpu, Brain, Building2 } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'AWS Management',
    description: 'Expert management of your AWS infrastructure for scalability, security, and cost optimization.'
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'Protect your business from cyber threats with our robust security solutions.'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Crafting responsive, user-friendly websites using cutting-edge technologies.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Building intuitive, engaging mobile apps for Android and iOS.'
  },
  {
    icon: Cpu,
    title: 'IOT',
    description: 'Harnessing the power of Internet of Things (IOT) for smart, connected solutions.'
  },
  {
    icon: Brain,
    title: 'AI Tools',
    description: 'Developing innovative AI-powered tools for business automation and optimization.'
  },
  {
    icon: Building2,
    title: 'CRM Hotel Billing Software',
    description: 'Streamlining hotel operations with our custom-built CRM and billing software.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center scroll-fade-in">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-purple-200">
            Comprehensive solutions for your digital transformation journey
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 scroll-scale-in">
          {services.map((service, index) => (
            <div
              key={index}
              className="group hover-3d"
            >
              <div className="relative bg-gradient-to-br from-slate-800 to-purple-800 p-6 rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <span className="rounded-lg inline-flex p-3 bg-purple-800/50 text-purple-300 ring-4 ring-purple-900/50 group-hover:animate-float">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-purple-200 group-hover:text-white transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;