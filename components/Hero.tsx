'use client';

import React, { useState, useEffect } from 'react';
import { useContactForm } from './FloatingCTA';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { openForm } = useContactForm();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: isMobile
            ? "url('https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/vakb_mobile_banner_4b324aed4e.png')"
            : "url('https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Green_environs_1_90c6c2aa19.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-white">
        <div className="max-w-4xl">
          <p className="text-lg mb-4">New Launch</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Vaishnavi AT-One<br />Krishna Brindavan
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed">
            A rare courtyard-centric haven, rising in Banashankari. Rooted in heritage, reimagined for the future of South Bengaluru.
          </p>
          <button onClick={openForm} className="bg-white text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition inline-flex items-center space-x-2">
            <span>Get in touch</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
