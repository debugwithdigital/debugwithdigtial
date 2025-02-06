import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center scroll-fade-in">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-xl text-purple-200">
            Get in touch with us for any inquiries or collaboration opportunities
          </p>
        </div>

        <div className="mt-20 max-w-lg mx-auto scroll-scale-in">
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-4 group hover-3d">
              <div className="bg-gradient-to-br from-slate-800 to-purple-800 p-4 rounded-lg shadow-glow group-hover:shadow-glow-lg transition-all duration-500">
                <Mail className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Email</h3>
                <p className="mt-1 text-purple-200">
                  <a href="mailto:hello.debugwithdigital@gmail.com" className="hover:text-purple-300 transition-colors">
                    hello.debugwithdigital@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group hover-3d">
              <div className="bg-gradient-to-br from-slate-800 to-purple-800 p-4 rounded-lg shadow-glow group-hover:shadow-glow-lg transition-all duration-500">
                <Phone className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Phone</h3>
                <p className="mt-1 text-purple-200">
                  <a href="tel:+919137553482" className="hover:text-purple-300 transition-colors">
                    +91-9137553482
                  </a>
                </p>
              </div>
            </div>
          </div>

          <form className="mt-12 grid grid-cols-1 gap-y-6">
            <div className="group hover-3d">
              <label htmlFor="name" className="block text-sm font-medium text-purple-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md bg-slate-800 border-purple-700 text-white shadow-glow focus:shadow-glow-lg focus:border-purple-500 focus:ring focus:ring-purple-500/50 transition-all duration-300"
              />
            </div>

            <div className="group hover-3d">
              <label htmlFor="email" className="block text-sm font-medium text-purple-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-slate-800 border-purple-700 text-white shadow-glow focus:shadow-glow-lg focus:border-purple-500 focus:ring focus:ring-purple-500/50 transition-all duration-300"
              />
            </div>

            <div className="group hover-3d">
              <label htmlFor="message" className="block text-sm font-medium text-purple-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-slate-800 border-purple-700 text-white shadow-glow focus:shadow-glow-lg focus:border-purple-500 focus:ring focus:ring-purple-500/50 transition-all duration-300"
              />
            </div>

            <div className="group hover-3d">
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-glow hover:shadow-glow-lg transform transition-all duration-500 hover:scale-105"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 animate-pulse" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;