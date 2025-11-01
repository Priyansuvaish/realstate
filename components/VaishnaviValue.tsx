'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VaishnaviValue = () => {
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
          <p className="text-sm text-gray-500 mb-2">01</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vaishnavi Value
          </h2>
          <p className="text-gray-600 text-lg mb-8">Location | design</p>

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

                <h3 className="text-3xl font-bold text-gray-900 mb-8">Vaishnavi Value</h3>

                {/* Future-Ready Location */}
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Future-Ready Location</h4>

                  {/* Map */}
                  <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden mb-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8534283826697!2d77.6408796!3d12.9165757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzU5LjciTiA3N8KwMzgnMjcuMiJF!5e0!3m2!1sen!2sin!4v1234567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location Map"
                    />
                  </div>

                  {/* Location Features */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <img
                        src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_5_186541dfbd.svg"
                        alt="Location amenities"
                        className="w-8 h-8 flex-shrink-0"
                      />
                      <p className="text-gray-800">Top schools, hospitals & malls within minutes</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <img
                        src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_5_186541dfbd.svg"
                        alt="Quick access"
                        className="w-8 h-8 flex-shrink-0"
                      />
                      <p className="text-gray-800">Quick access to JP Nagar, Jayanagar & Central Bengaluru</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <img
                        src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_5_186541dfbd.svg"
                        alt="Metro Station"
                        className="w-8 h-8 flex-shrink-0"
                      />
                      <p className="text-gray-800">JP Nagar Metro Station</p>
                    </div>
                  </div>
                </div>

                {/* The Design Revolution */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">The Design Revolution</h4>

                  {/* Construction Image */}
                  <div className="mb-6">
                    <img
                      src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/DSCF_0225_3_f1ee31aabc.png"
                      alt="Advanced Aluminium Formwork Construction"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <h5 className="text-lg font-bold text-gray-900 mt-4 mb-3">Advanced Aluminium Formwork Construction</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <img
                          src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_762_a75edc6313.svg"
                          alt="Project timelines"
                          className="w-6 h-6 flex-shrink-0 mt-0.5"
                        />
                        <span>Accelerated project timelines</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <img
                          src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_7_3864cb27b7.svg"
                          alt="Structural integrity"
                          className="w-6 h-6 flex-shrink-0 mt-0.5"
                        />
                        <span>Exceptional structural integrity</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <img
                          src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_768_f7fb9bb1d9.svg"
                          alt="Finish quality"
                          className="w-6 h-6 flex-shrink-0 mt-0.5"
                        />
                        <span>Superior finish and longevity</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <img
                          src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_8_03eeee9ba8.svg"
                          alt="Seismic resilience"
                          className="w-6 h-6 flex-shrink-0 mt-0.5"
                        />
                        <span>Enhanced seismic resilience</span>
                      </li>
                    </ul>
                  </div>

                  {/* Interior Design Image */}
                  <div className="mb-6">
                    <img
                      src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Home_interior_2_0d534240b6.png"
                      alt="Design Excellence"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <h5 className="text-lg font-bold text-gray-900 mt-4 mb-3">Design Excellence</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <img
                          src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_9_d58d098b2b.svg"
                          alt="G+32 Structures"
                          className="w-6 h-6 flex-shrink-0 mt-0.5"
                        />
                        <span>Towering G+32 Structures; Tallest Towers in Banashankari</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <img
                          src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_1098_3ba1a82c93.svg"
                          alt="Ceiling height"
                          className="w-6 h-6 flex-shrink-0 mt-0.5"
                        />
                        <span>10 Ft. Clear-Ceiling Height</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <img
                          src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_1097_e8a2f0e09a.svg"
                          alt="Courtyard design"
                          className="w-6 h-6 flex-shrink-0 mt-0.5"
                        />
                        <span>Courtyard-centric Design</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <img
                          src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_10_a9c1bee1d9.svg"
                          alt="Independent Entrances"
                          className="w-6 h-6 flex-shrink-0 mt-0.5"
                        />
                        <span>Independent Entrances for Enhanced Privacy</span>
                      </li>
                    </ul>
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

export default VaishnaviValue;
