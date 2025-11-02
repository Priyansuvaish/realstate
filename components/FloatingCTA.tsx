'use client';

import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

// Create context for contact form
const ContactFormContext = createContext<{
  openForm: () => void;
} | null>(null);

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within ContactFormProvider');
  }
  return context;
};

export const ContactFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: '',
  });

  const openForm = () => setIsFormOpen(true);

  // Validation functions
  const validateName = (name: string): string => {
    if (!name.trim()) {
      return 'Name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return 'Name can only contain letters and spaces';
    }
    return '';
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) {
      return 'Phone number is required';
    }
    if (!/^\d+$/.test(phone)) {
      return 'Phone number can only contain digits';
    }
    if (phone.length < 10) {
      return 'Phone number must be at least 10 digits';
    }
    if (phone.length > 15) {
      return 'Phone number cannot exceed 15 digits';
    }
    return '';
  };

  const validateMessage = (message: string): string => {
    if (message.trim() && message.trim().length < 10) {
      return 'Message must be at least 10 characters if provided';
    }
    return '';
  };

  const validateConsent = (consent: boolean): string => {
    if (!consent) {
      return 'You must agree to be contacted';
    }
    return '';
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message),
      consent: validateConsent(formData.consent),
    };

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    try {
      // Show loading state
      const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      // Send email via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your interest! Our team will contact you shortly.');
        setIsFormOpen(false);
        setFormData({
          name: '',
          email: '',
          countryCode: '+91',
          phone: '',
          message: '',
          consent: false,
        });
        setErrors({
          name: '',
          email: '',
          phone: '',
          message: '',
          consent: '',
        });
      } else {
        const error = await response.json();
        alert(`Failed to send message: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while sending your message. Please try again.');
    } finally {
      // Reset button state
      const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Send';
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Validate field on blur
    let error = '';
    switch (name) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
      case 'message':
        error = validateMessage(value);
        break;
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  return (
    <ContactFormContext.Provider value={{ openForm }}>
      {children}

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-[#1a3a52] rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto mx-4"
            >
              <div className="p-4 md:p-8 relative">
                {/* Close button */}
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-all"
                >
                  <FaTimes className="text-sm" />
                </button>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-0 py-3 bg-transparent border-b-2 ${errors.name ? 'border-red-400' : 'border-cyan-400'} text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-300`}
                      placeholder="Name*"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-0 py-3 bg-transparent border-b-2 ${errors.email ? 'border-red-400' : 'border-cyan-400'} text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-300`}
                      placeholder="Email ID*"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone Number with Country Code */}
                  <div>
                    <div className="flex gap-3 md:gap-4">
                      <div className="w-20 md:w-24">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="w-full px-1 md:px-2 py-3 bg-transparent border-b-2 border-cyan-400 text-white focus:outline-none focus:border-cyan-300 text-sm md:text-base"
                        >
                          <option value="+91" className="bg-[#1a3a52]">🇮🇳 +91</option>
                          <option value="+1" className="bg-[#1a3a52]">🇺🇸 +1</option>
                          <option value="+44" className="bg-[#1a3a52]">🇬🇧 +44</option>
                          <option value="+971" className="bg-[#1a3a52]">🇦🇪 +971</option>
                        </select>
                      </div>
                      <div className="flex-1">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-0 py-3 bg-transparent border-b-2 ${errors.phone ? 'border-red-400' : 'border-cyan-400'} text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-300`}
                          placeholder="Phone Number*"
                        />
                      </div>
                    </div>
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={3}
                      className={`w-full px-0 py-3 bg-transparent border-b-2 ${errors.message ? 'border-red-400' : 'border-cyan-400'} text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-300 resize-none`}
                      placeholder="Message (Optional)"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className={`mt-1 w-4 h-4 text-cyan-500 ${errors.consent ? 'border-red-400' : 'border-gray-300'} rounded focus:ring-cyan-500`}
                      />
                      <label htmlFor="consent" className="text-white text-xs sm:text-sm leading-relaxed">
                        I agree and authorize the promoter company and group, including authorised and appointed third parties to contact me and/or send relevant data over Email, SMS & WhatsApp. This will override the registry with DNC / NDNC.
                      </label>
                    </div>
                    {errors.consent && <p className="text-red-400 text-xs mt-1">{errors.consent}</p>}
                  </div>

                  {/* reCAPTCHA Notice */}
                  <div className="text-white text-xs">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300">
                      Terms of Service
                    </a>{' '}
                    apply.
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-auto px-8 md:px-12 py-2.5 md:py-3 bg-cyan-500 text-navy rounded-md hover:bg-cyan-400 transition-all font-semibold uppercase tracking-wide text-sm md:text-base"
                  >
                    Send
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ContactFormContext.Provider>
  );
};

const FloatingCTA = () => {
  const { openForm } = useContactForm();

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      onClick={openForm}
      className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-cyan-500 text-navy px-4 md:px-6 py-2 md:py-3 rounded-md shadow-lg hover:bg-cyan-400 transition-all z-40 flex items-center space-x-2 font-semibold uppercase tracking-wide text-xs md:text-sm"
    >
      <span>Get in Touch</span>
    </motion.button>
  );
};

export default FloatingCTA;
