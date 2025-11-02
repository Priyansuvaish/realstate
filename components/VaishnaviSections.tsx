'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: 1,
    number: '',
    title: 'COURTYARD DESIGN',
    subtitle: 'Vaishnavi Value',
    description: 'LOCATION | DESIGN',
    subtabs: []
  },
  {
    id: 2,
    number: '',
    title: 'CLUBHOUSE',
    subtitle: 'Vaishnavi Experience',
    description: 'KEY FEATURES | AMENITIES | CLUBHOUSE',
    subtabs: []
  },
  {
    id: 3,
    number: '',
    title: 'CRAFTSMANSHIP',
    subtitle: 'Vaishnavi Vantage',
    description: '',
    subtabs: ['SPECIFICATIONS', 'WALK THROUGH MASTERPLAN', 'FLOOR PLANS', 'GALLERY']
  }
];

const standoutFeatures = [
  {
    text: "A Verdant Wonderland",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_11_cf61308290.svg"
  },
  {
    text: "1+ Acre of Forested Garden",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_1092_1_140329aeb0.svg"
  },
  {
    text: "Tallest Towers in Banashankari",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_12_131b1c9c2c.svg"
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
  },
  {
    title: "Indoor Games Room",
    image: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_3_35989683b4.png"
  }
];

const VaishnaviSections = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeSubtab, setActiveSubtab] = useState('LOCATION');

  const currentTab = tabs.find(tab => tab.id === activeTab);

  const renderContent = () => {
    // Section 01 - Vaishnavi Value (Show all content at once)
    if (activeTab === 1) {
      return (
        <div className="space-y-8 md:space-y-16">
          {/* Location Section */}
          <div className="space-y-4 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-8">Future-Ready Location</h2>

            {/* Map */}
            <div className="w-full h-48 md:h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden mb-4 md:mb-8">
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
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <img
                  src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_1099_cf911f3ab2.svg"
                  alt="Location amenities"
                  className="w-10 h-10 flex-shrink-0"
                />
                <p className="text-gray-800 text-sm md:text-base lg:text-lg">Top schools, hospitals & malls within minutes</p>
              </div>
              <div className="flex items-start space-x-4">
                <img
                  src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_5_186541dfbd.svg"
                  alt="Quick access"
                  className="w-10 h-10 flex-shrink-0"
                />
                <p className="text-gray-800 text-sm md:text-base lg:text-lg">Quick access to JP Nagar, Jayanagar & Central Bengaluru</p>
              </div>
              <div className="flex items-start space-x-4">
                <img
                  src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/500m_5b6320b663.svg"
                  alt="Metro Station"
                  className="w-10 h-10 flex-shrink-0"
                />
                <p className="text-gray-800 text-sm md:text-base lg:text-lg">JP Nagar Metro Station</p>
              </div>
            </div>
          </div>

          {/* Design Section */}
          <div className="space-y-6 md:space-y-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-8">The Design Revolution</h2>

            {/* Construction Section */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/DSCF_0225_3_f1ee31aabc.png"
                alt="Advanced Aluminium Formwork Construction"
                className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg mb-4 md:mb-6"
              />
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Advanced Aluminium Formwork Construction</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_762_cbbd1b6019.svg"
                    alt="Project timelines"
                    className="w-8 h-8 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-800 text-lg">Accelerated project timelines</span>
                </div>
                <div className="flex items-start space-x-4">
                  <img
                    src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_7_3864cb27b7.svg"
                    alt="Structural integrity"
                    className="w-8 h-8 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-800 text-lg">Exceptional structural integrity</span>
                </div>
                <div className="flex items-start space-x-4">
                  <img
                    src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_768_a25f17c43b.svg"
                    alt="Finish quality"
                    className="w-8 h-8 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-800 text-lg">Superior finish and longevity</span>
                </div>
                <div className="flex items-start space-x-4">
                  <img
                    src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_8_03eeee9ba8.svg"
                    alt="Seismic resilience"
                    className="w-8 h-8 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-800 text-lg">Enhanced seismic resilience</span>
                </div>
              </div>
            </div>

            {/* Interior Design Section */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Home_interior_2_0d534240b6.png"
                alt="Design Excellence"
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Excellence</h3>
              <p className="text-gray-700 text-lg mb-6">Designed to maximise privacy, openness and light</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_9_d58d098b2b.svg"
                    alt="G+32 Structures"
                    className="w-8 h-8 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-800 text-lg">Towering G+32 Structures; Tallest Towers in Banashankari</span>
                </div>
                <div className="flex items-start space-x-4">
                  <img
                    src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_1098_778e3993cb.svg"
                    alt="Ceiling height"
                    className="w-8 h-8 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-800 text-lg">10 Ft. Clear-Ceiling Height</span>
                </div>
                <div className="flex items-start space-x-4">
                  <img
                    src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_1097_489b1f8972.svg"
                    alt="Courtyard design"
                    className="w-8 h-8 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-800 text-lg">Courtyard-centric Design</span>
                </div>
                <div className="flex items-start space-x-4">
                  <img
                    src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Layer_1_10_a9c1bee1d9.svg"
                    alt="Independent Entrances"
                    className="w-8 h-8 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-800 text-lg">Independent Entrances for Enhanced Privacy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Section 02 - Vaishnavi Experience (Show all content at once)
    if (activeTab === 2) {
      return (
        <div className="space-y-8 md:space-y-16">
          {/* Standout Features */}
          <div className="space-y-4 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-8">Standout Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {standoutFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-4 md:p-6 rounded-lg flex flex-col items-center text-center">
                  <img
                    src={feature.icon}
                    alt={feature.text}
                    className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4"
                  />
                  <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Purposeful Amenities */}
          <div className="space-y-4 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Purposeful Amenities</h2>

            {/* Amenities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden h-40 md:h-56 lg:h-64 group cursor-pointer"
                >
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>

                  {/* Title overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-base md:text-lg lg:text-xl font-semibold text-center px-4">
                      {amenity.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Section 03 - Vaishnavi Vantage
    if (activeTab === 3 && activeSubtab === 'SPECIFICATIONS') {
      return (
        <div className="space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-8">Specifications</h2>

          {/* Large Image */}
          <div className="w-full h-48 md:h-80 lg:h-96 rounded-lg overflow-hidden mb-4 md:mb-8">
            <img
              src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Home_interior_2_0d534240b6.png"
              alt="Interior Design"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-b border-gray-300 pb-4">
              <p className="font-semibold text-gray-900 mb-2">Project Type</p>
              <p className="text-gray-700">Residential Apartments</p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <p className="font-semibold text-gray-900 mb-2">Configuration</p>
              <p className="text-gray-700">Spacious 3 & 4 BHK Apartments</p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <p className="font-semibold text-gray-900 mb-2">Total Area</p>
              <p className="text-gray-700">4.95 Acres</p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <p className="font-semibold text-gray-900 mb-2">Tower Height</p>
              <p className="text-gray-700">G+32 (Tallest Towers in Banashankari)</p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <p className="font-semibold text-gray-900 mb-2">Ceiling Height</p>
              <p className="text-gray-700">10 Ft. Clear-Ceiling</p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <p className="font-semibold text-gray-900 mb-2">Clubhouse</p>
              <p className="text-gray-700">25,745 Sq. ft.</p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <p className="font-semibold text-gray-900 mb-2">Green Spaces</p>
              <p className="text-gray-700">1+ acre Forested Garden</p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <p className="font-semibold text-gray-900 mb-2">Construction</p>
              <p className="text-gray-700">Advanced Aluminium Formwork</p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <p className="font-semibold text-gray-900 mb-2">Compliance</p>
              <p className="text-gray-700">100% Vaastu Compliant</p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <p className="font-semibold text-gray-900 mb-2">RERA Number</p>
              <p className="text-gray-700 text-sm">PRM/KA/RERA/1251/310/PR/081025/008140</p>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 3 && activeSubtab === 'WALK THROUGH MASTERPLAN') {
      return (
        <div className="space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-8">Walk Through Masterplan</h2>
          <div className="bg-gray-50 p-4 md:p-8 rounded-lg text-center">
            <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-4">
              Detailed masterplan walkthrough available on request.
            </p>
            <p className="text-gray-600">
              Contact our sales team for comprehensive layout details and virtual tours.
            </p>
          </div>
        </div>
      );
    }

    if (activeTab === 3 && activeSubtab === 'FLOOR PLANS') {
      return (
        <div className="space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-8">Floor Plans</h2>
          <div className="bg-gray-50 p-4 md:p-8 rounded-lg text-center">
            <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-4">
              Detailed floor plans for 3 & 4 BHK apartments available on request.
            </p>
            <p className="text-gray-600">
              Contact our sales team for unit-specific floor plans and configurations.
            </p>
          </div>
        </div>
      );
    }

    if (activeTab === 3 && activeSubtab === 'GALLERY') {
      return (
        <div className="space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <img
              src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Green_environs_1_90c6c2aa19.png"
              alt="Green Environs"
              className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg hover:scale-105 transition-transform"
            />
            <img
              src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/DSCF_0225_3_f1ee31aabc.png"
              alt="Construction"
              className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg hover:scale-105 transition-transform"
            />
            <img
              src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Home_interior_2_0d534240b6.png"
              alt="Home Interior"
              className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg hover:scale-105 transition-transform"
            />
            <img
              src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_3_35989683b4.png"
              alt="Clubhouse"
              className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg hover:scale-105 transition-transform"
            />
            <img
              src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_8_756df8dd19.png"
              alt="Swimming Pool"
              className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg hover:scale-105 transition-transform"
            />
            <img
              src="https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Mask_group_9_f8b609281b.png"
              alt="Leisure Zone"
              className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  textOrientation: 'mixed'
                }}>{currentTab?.subtitle}</h2>
        <p className="text-gray-600">Content for {activeSubtab} coming soon...</p>
      </div>
    );
  };

  return (
    <section className="bg-gray-100 min-h-screen py-6 md:py-12">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto shadow-2xl rounded-lg overflow-hidden">
        {/* Vertical Tab Navigation */}
        <div className="w-full md:w-24 flex-shrink-0 bg-gradient-to-r md:bg-gradient-to-b from-cyan-100 via-cyan-200 to-cyan-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setActiveSubtab(tab.subtabs[0]);
              }}
              className={`w-full md:h-64 h-16 flex flex-row md:flex-col items-center justify-center border-b md:border-b border-r md:border-r-0 last:border-r-0 border-cyan-400 transition-all ${
                activeTab === tab.id
                  ? 'bg-cyan-400 text-gray-900'
                  : 'bg-transparent text-gray-600 hover:bg-cyan-300'
              }`}
            >
              <span className="text-3xl font-bold md:mb-4 mr-2 md:mr-0">{tab.number}</span>
              <span className="text-xs md:text-xs font-medium tracking-widest whitespace-nowrap md:[writing-mode:vertical-rl] md:[transform:rotate(180deg)] [text-orientation:mixed]">
                {tab.title}
              </span>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white">
          {/* Header with Subtitle and Subtabs */}
          <div className="bg-gray-50 border-b border-gray-200 px-4 md:px-8 py-4 md:py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
              <h3 className="text-xl md:text-2xl font-bold text-cyan-600">{currentTab?.subtitle}</h3>

              {/* Subtab Navigation or Description */}
              {currentTab?.subtabs && currentTab.subtabs.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 uppercase tracking-wide">
                  {currentTab.subtabs.map((subtab, index) => (
                    <React.Fragment key={subtab}>
                      <button
                        onClick={() => setActiveSubtab(subtab)}
                        className={`hover:text-cyan-600 transition ${
                          activeSubtab === subtab ? 'text-cyan-600 font-semibold' : ''
                        }`}
                      >
                        {subtab}
                      </button>
                      {index < currentTab.subtabs.length - 1 && <span className="text-gray-400">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500 uppercase tracking-wide">{currentTab?.description}</p>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="px-4 md:px-8 py-6 md:py-12 max-h-[400px] md:max-h-[600px] lg:max-h-[800px] overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${activeSubtab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaishnaviSections;
