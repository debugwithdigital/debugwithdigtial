import React from 'react';
import { GraduationCap, BookOpen, Send } from 'lucide-react';

const Internships = () => {
  return (
    <section id="internships" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center scroll-fade-in">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Internships & Training</h2>
          <p className="mt-4 text-xl text-purple-200">
            Launch your career in technology with our comprehensive programs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 scroll-scale-in">
          <div className="group hover-3d">
            <div className="bg-gradient-to-br from-slate-800 to-purple-800 rounded-lg shadow-glow hover:shadow-glow-lg p-8 transition-all duration-500 transform hover:scale-105 hover:-rotate-2">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <h3 className="ml-3 text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">Internship Program</h3>
              </div>
              <p className="text-purple-200 mb-6 group-hover:text-white transition-colors">
                Gain hands-on experience working on real-world projects alongside our expert team. Our internship program offers:
              </p>
              <ul className="space-y-4 text-purple-200">
                <li className="flex items-start group-hover:text-white transition-colors">
                  <span className="flex-shrink-0 h-6 w-6 text-purple-400">•</span>
                  <span className="ml-3">Practical experience with modern technologies</span>
                </li>
                <li className="flex items-start group-hover:text-white transition-colors">
                  <span className="flex-shrink-0 h-6 w-6 text-purple-400">•</span>
                  <span className="ml-3">Mentorship from industry professionals</span>
                </li>
                <li className="flex items-start group-hover:text-white transition-colors">
                  <span className="flex-shrink-0 h-6 w-6 text-purple-400">•</span>
                  <span className="ml-3">Exposure to real client projects</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="group hover-3d">
            <div className="bg-gradient-to-br from-slate-800 to-purple-800 rounded-lg shadow-glow hover:shadow-glow-lg p-8 transition-all duration-500 transform hover:scale-105 hover:rotate-2">
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <h3 className="ml-3 text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">Training Programs</h3>
              </div>
              <p className="text-purple-200 mb-6 group-hover:text-white transition-colors">
                Enhance your skills with our specialized training programs designed for both beginners and professionals:
              </p>
              <ul className="space-y-4 text-purple-200">
                <li className="flex items-start group-hover:text-white transition-colors">
                  <span className="flex-shrink-0 h-6 w-6 text-purple-400">•</span>
                  <span className="ml-3">Web Development Fundamentals</span>
                </li>
                <li className="flex items-start group-hover:text-white transition-colors">
                  <span className="flex-shrink-0 h-6 w-6 text-purple-400">•</span>
                  <span className="ml-3">Mobile App Development</span>
                </li>
                <li className="flex items-start group-hover:text-white transition-colors">
                  <span className="flex-shrink-0 h-6 w-6 text-purple-400">•</span>
                  <span className="ml-3">Cloud Computing & DevOps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center scroll-fade-in">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-glow hover:shadow-glow-lg transform transition-all duration-500 hover:scale-105 hover-3d"
          >
            Apply Now
            <Send className="ml-2 h-4 w-4 animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Internships;