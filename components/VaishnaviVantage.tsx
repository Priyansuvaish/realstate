'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VaishnaviVantage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-500 mb-2">03</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vaishnavi Vantage
          </h2>
          <p className="text-gray-600 text-lg mb-8">SPECIFICATIONS | WALK THROUGH MASTERPLAN | FLOOR PLANS | GALLERY</p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-900 font-semibold hover:underline"
          >
            Click to Expand
          </button>
        </motion.div>
      </div>

      {/* Right Side Panel */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Sliding Panel from Right */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="fixed top-0 right-0 h-full w-full md:w-2/3 lg:w-1/2 bg-white z-50 overflow-y-auto shadow-2xl"
            >
              <div className="p-8">
                {/* Close Button */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-6 right-6 text-3xl text-gray-600 hover:text-gray-900"
                >
                  ×
                </button>

                <h3 className="text-3xl font-bold text-gray-900 mb-8">Vaishnavi Vantage</h3>

                {/* Specifications */}
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h4>
                  <div className="space-y-6 text-gray-700">
                    <div className="border-b border-gray-200 pb-4">
                      <p className="font-semibold text-gray-900 mb-2">Project Type</p>
                      <p>Residential Apartments</p>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                      <p className="font-semibold text-gray-900 mb-2">Configuration</p>
                      <p>Spacious 3 & 4 BHK Apartments</p>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                      <p className="font-semibold text-gray-900 mb-2">Total Area</p>
                      <p>4.95 Acres</p>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                      <p className="font-semibold text-gray-900 mb-2">Tower Height</p>
                      <p>G+32 (Tallest Towers in Banashankari)</p>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                      <p className="font-semibold text-gray-900 mb-2">Ceiling Height</p>
                      <p>10 Ft. Clear-Ceiling</p>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                      <p className="font-semibold text-gray-900 mb-2">Clubhouse</p>
                      <p>25,745 Sq. ft.</p>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                      <p className="font-semibold text-gray-900 mb-2">Green Spaces</p>
                      <p>1+ acre Forested Garden</p>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                      <p className="font-semibold text-gray-900 mb-2">Construction</p>
                      <p>Advanced Aluminium Formwork</p>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                      <p className="font-semibold text-gray-900 mb-2">Compliance</p>
                      <p>100% Vaastu Compliant</p>
                    </div>
                    <div className="pb-4">
                      <p className="font-semibold text-gray-900 mb-2">RERA Number</p>
                      <p className="text-sm">PRM/KA/RERA/1251/310/PR/081025/008140</p>
                    </div>
                  </div>
                </div>

                {/* Masterplan & Floor Plans */}
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Masterplan & Floor Plans</h4>
                  <p className="text-gray-600 mb-4">
                    Detailed masterplan and floor plan information available on request.
                  </p>
                  <p className="text-gray-600">
                    Contact our sales team for comprehensive layout details and unit plans.
                  </p>
                </div>

                {/* Gallery */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h4>
                  <div className="grid grid-cols-1 gap-4">
                    <img
                      src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Green_environs_1_90c6c2aa19.png"
                      alt="Green Environs"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <img
                      src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/DSCF_0225_3_f1ee31aabc.png"
                      alt="Construction"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <img
                      src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Home_interior_2_0d534240b6.png"
                      alt="Home Interior"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VaishnaviVantage;
