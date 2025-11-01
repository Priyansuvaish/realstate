'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const standoutFeatures = [
  {
    text: "A Verdant Wonderland",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_11_cf61308290.svg"
  },
  {
    text: "1+ Acre of Forested Garden",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_1092_83a8d22ab6.svg"
  },
  {
    text: "Tallest Towers in Banashankari",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_12_2da4a96f0c.svg"
  }
];

const amenities = [
  {
    title: "25,745 Sq. Ft. Clubhouse",
    image: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_3_35989683b4.png"
  },
  {
    title: "Badminton Courts",
    image: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_4_e172a19f10.png"
  },
  {
    title: "Event Lawn",
    image: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_5_173b15a57e.png"
  },
  {
    title: "Mini-Theatre",
    image: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_6_71ea72403b.png"
  },
  {
    title: "Outdoor Fitness Zone",
    image: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_7_ce223d9bb4.png"
  },
  {
    title: "Infinity Swimming Pool",
    image: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_8_756df8dd19.png"
  },
  {
    title: "Leisure Zone",
    image: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_9_f8b609281b.png"
  },
  {
    title: "Lounge",
    image: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_10_ed62f9a5d6.png"
  },
  {
    title: "Pickleball & Padel Courts",
    image: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_11_7641b5c91d.png"
  },
  {
    title: "Canopy Court",
    image: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_12_cff8937152.png"
  },
  {
    title: "Conservatory",
    image: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_13_fbbca20fe5.png"
  }
];

const VaishnaviExperience = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-500 mb-2">02</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vaishnavi Experience
          </h2>
          <p className="text-gray-600 text-lg mb-8">KEY FEATURES | AMENITIES | CLUBHOUSE</p>

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

                <h3 className="text-3xl font-bold text-gray-900 mb-8">Vaishnavi Experience</h3>

                {/* Standout Features */}
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Standout Features</h4>
                  <div className="space-y-4">
                    {standoutFeatures.map((feature, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4">
                        <img
                          src={feature.icon}
                          alt={feature.text}
                          className="w-12 h-12 flex-shrink-0"
                        />
                        <p className="text-lg font-semibold text-gray-900">{feature.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Purposeful Amenities */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Purposeful Amenities</h4>
                  <div className="grid grid-cols-1 gap-6">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src={amenity.image}
                          alt={amenity.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <p className="text-gray-900 font-semibold">{amenity.title}</p>
                        </div>
                      </div>
                    ))}
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

export default VaishnaviExperience;
