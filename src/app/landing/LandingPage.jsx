// src/app/landing/LandingPage.jsx

import Navbar from "@components/layout/Navbar";

import Hero from "./Hero";
import Features from "./Features";
import CTA from "./CTA";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;