import React from 'react';

const technologies = [
  { name: 'React JS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'Express JS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
  { name: 'MongoDB', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
  { name: 'Flutter', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
  { name: 'Dart', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg' },
  { name: 'Node JS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'Framer', logo: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
  { name: 'Webflow', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/webflow/webflow-original.svg' },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center scroll-fade-in">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Tech Stack</h2>
          <p className="mt-4 text-xl text-purple-200">
            We use cutting-edge technologies to deliver exceptional solutions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 scroll-scale-in">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group hover-3d"
            >
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-slate-800 to-purple-800 rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:scale-105 hover:-rotate-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-all duration-500"></div>
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="h-16 w-16 object-contain relative z-10 group-hover:animate-float"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white group-hover:text-purple-300 transition-colors">{tech.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;