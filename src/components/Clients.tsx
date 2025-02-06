import React from 'react';
import { Store, TrendingUp, Flower, ShoppingBag } from 'lucide-react';

const clients = [
  { 
    name: 'Fosh.tv', 
    Icon: Store,
    description: 'Digital Entertainment Platform'
  },
  { 
    name: 'Brands & Stocks', 
    Icon: TrendingUp,
    description: 'Financial Services'
  },
  { 
    name: 'Ashokvatika Nursery', 
    Icon: Flower,
    description: 'Plant Nursery'
  },
  { 
    name: 'Hpurse', 
    Icon: ShoppingBag,
    description: 'E-commerce Platform'
  },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center scroll-fade-in">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Clients</h2>
          <p className="mt-4 text-xl text-purple-200">
            Trusted by innovative companies across industries
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 scroll-scale-in">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group hover-3d"
            >
              <div className="flex flex-col items-center p-8 bg-gradient-to-br from-slate-800 to-purple-800 rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:scale-105 hover:-rotate-2">
                <client.Icon className="h-12 w-12 text-purple-400 group-hover:text-purple-300 group-hover:animate-float transition-colors duration-300" />
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">{client.name}</h3>
                <p className="mt-2 text-sm text-purple-200 text-center group-hover:text-white transition-colors">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;