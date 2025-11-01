'use client';

import React, { useState, useEffect } from 'react';
import { useContactForm } from './FloatingCTA';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { openForm } = useContactForm();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/logo_7a30d9d59b_06420f9f3b.png"
              alt="Vaishnavi Group"
              className="h-8 lg:h-10 w-auto"
            />
          </a>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button onClick={openForm} className={`hidden md:block transition cursor-pointer ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </button>
            <button onClick={openForm} className="bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-gray-800 transition">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
