import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MobileSidebar from '../components/MobileSidebar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Team from '../components/Team';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="page-wrapper">
      <Navbar onMenuClick={openSidebar} sidebarOpen={sidebarOpen} />
      <MobileSidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      <main className="main-content">
        <Hero />
        <About />
        <Features />
        <Benefits />
        <Team />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
