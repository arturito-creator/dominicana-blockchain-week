'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function ContactoSponsorPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sponsorshipLevel: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      console.log('Sponsor application:', formData);
    }
  };

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.sponsors.becomeSponsor}
          </h1>
          <p className="text-lg text-dbw-gray-light mb-4">
            {t.sponsors.interest}
          </p>
          <Link
            href="/contacto"
            className="text-dbw-red hover:text-dbw-red-dark transition-colors"
          >
            ← {t.nav.contact}
          </Link>
        </motion.div>

        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dbw-gray-light mb-2"
                >
                  {t.contact.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-dbw-gray-light focus:outline-none focus:border-dbw-red transition-colors"
                  placeholder={t.contact.name}
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-dbw-gray-light mb-2"
                >
                  {t.contact.company} *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-dbw-gray-light focus:outline-none focus:border-dbw-red transition-colors"
                  placeholder={t.contact.companyPlaceholder}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dbw-gray-light mb-2"
                >
                  {t.contact.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-dbw-gray-light focus:outline-none focus:border-dbw-red transition-colors"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-dbw-gray-light mb-2"
                >
                  {t.contact.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-dbw-gray-light focus:outline-none focus:border-dbw-red transition-colors"
                  placeholder={t.contact.phonePlaceholder}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="sponsorshipLevel"
                className="block text-sm font-medium text-dbw-gray-light mb-2"
              >
                {t.contact.sponsorshipLevel}
              </label>
              <select
                id="sponsorshipLevel"
                name="sponsorshipLevel"
                value={formData.sponsorshipLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-dbw-red transition-colors"
              >
                <option value="" className="bg-dbw-blue-dark">
                  {t.contact.selectLevel}
                </option>
                <option value="gold" className="bg-dbw-blue-dark">
                  Gold
                </option>
                <option value="silver" className="bg-dbw-blue-dark">
                  Silver
                </option>
                <option value="bronze" className="bg-dbw-blue-dark">
                  Bronze
                </option>
                <option value="other" className="bg-dbw-blue-dark">
                  {t.contact.other}
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-dbw-gray-light mb-2"
              >
                {t.contact.message} *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-dbw-gray-light focus:outline-none focus:border-dbw-red transition-colors resize-none"
                placeholder={t.contact.sponsorMessagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-dbw-red text-white font-semibold rounded-lg hover:bg-dbw-red-dark transition-colors"
            >
              {t.contact.sendSponsorApplication}
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 text-center"
          >
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {t.contact.thankYou}
            </h3>
            <p className="text-dbw-gray-light">
              {t.contact.sponsorApplicationReceived}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

