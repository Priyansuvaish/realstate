'use client';

import { motion } from 'framer-motion';
import { useContactForm } from './FloatingCTA';

const features = [
  {
    text: "Spacious 3 & 4",
    subtext: "BHK Apartments",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_207_20d8cc14d5.svg"
  },
  {
    text: "25,745 Sq. ft. Clubhouse",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_208_a5a3f2e5f7.svg"
  },
  {
    text: "Banashankari,",
    subtext: "South Bengaluru",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Vector_2_a097507a29.svg"
  },
  {
    text: "4.95 Acres",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_213_f33cd8b903.svg"
  },
  {
    text: "Vaastu Compliant",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_214_69b9e25376.svg"
  },
  {
    text: "Premium Specifications",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_217_6c8bbee364.svg"
  },
  {
    text: "1+ acre Forested garden",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_1092_83a8d22ab6.svg"
  },
  {
    text: "Advanced Aluminium",
    subtext: "Formwork Construction",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_221_5d8abc2790.svg"
  },
  {
    text: "RERA:",
    subtext: "PRM/KA/RERA/1251/310/PR/081025/008140",
    icon: "https://vaishnavigroup-342sdf3.s3.ap-south-1.amazonaws.com/Group_220_2978673cbd.svg",
    isRera: true
  }
];

const KeyFeatures = () => {
  const { openForm } = useContactForm();

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-center text-base md:text-lg mb-12 max-w-4xl mx-auto"
        >
          A rare courtyard-centric haven, rising in Banashankari. Rooted in heritage, reimagined for the future of South Bengaluru.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`bg-[#0A1F38] border border-[#1a3a5c] rounded-lg p-6 flex items-center gap-6 ${
                feature.isRera ? 'md:col-span-1' : ''
              }`}
            >
              <div className="flex-shrink-0">
                <img
                  src={feature.icon}
                  alt={feature.text}
                  className="w-12 h-12"
                />
              </div>
              <div>
                <p className="text-cyan-400 text-base md:text-lg">
                  {feature.text}
                </p>
                {feature.subtext && (
                  <p className={`text-cyan-400 ${feature.isRera ? 'text-xs md:text-sm' : 'text-base md:text-lg'}`}>
                    {feature.subtext}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-cyan-400 text-3xl md:text-4xl font-bold text-center mb-8 tracking-wider"
        >
          KRISHNA BRINDAVAN
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={openForm}
            className="inline-flex items-center gap-3 text-cyan-400 text-lg font-medium hover:text-cyan-300 transition-colors group"
          >
            GET IN TOUCH
            <svg
              className="w-8 h-8 transform group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;
