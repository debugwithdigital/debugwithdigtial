import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Clients from './components/Clients';
import About from './components/About';
import Contact from './components/Contact';
import Internships from './components/Internships';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Clients />
        <About />
        <Contact />
        <Internships />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Debug with Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;