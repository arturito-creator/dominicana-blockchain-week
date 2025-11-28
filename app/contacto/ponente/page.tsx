'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function ContactoPonentePage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    topic: '',
    bio: '',
    previousSpeaking: '',
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
    if (formData.name && formData.email && formData.topic && formData.message) {
      setSubmitted(true);
      console.log('Speaker application:', formData);
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
            {t.speakers.applyToSpeak}
          </h1>
          <p className="text-lg text-dbw-gray-light mb-4">
            {t.contact.speakerDescription}
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
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-dbw-gray-light mb-2"
                >
                  {t.contact.companyOrganization}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-dbw-gray-light focus:outline-none focus:border-dbw-red transition-colors"
                  placeholder={t.contact.companyOrganizationPlaceholder}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="topic"
                className="block text-sm font-medium text-dbw-gray-light mb-2"
              >
                {t.contact.talkTopic} *
              </label>
              <input
                type="text"
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-dbw-gray-light focus:outline-none focus:border-dbw-red transition-colors"
                placeholder={t.contact.talkTopicPlaceholder}
              />
            </div>

            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-dbw-gray-light mb-2"
              >
                {t.contact.bio}
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-dbw-gray-light focus:outline-none focus:border-dbw-red transition-colors resize-none"
                placeholder={t.contact.bioPlaceholder}
              />
            </div>

            <div>
              <label
                htmlFor="previousSpeaking"
                className="block text-sm font-medium text-dbw-gray-light mb-2"
              >
                {t.contact.previousSpeaking}
              </label>
              <textarea
                id="previousSpeaking"
                name="previousSpeaking"
                value={formData.previousSpeaking}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-dbw-gray-light focus:outline-none focus:border-dbw-red transition-colors resize-none"
                placeholder={t.contact.previousSpeakingPlaceholder}
              />
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
                placeholder={t.contact.speakerMessagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-dbw-red text-white font-semibold rounded-lg hover:bg-dbw-red-dark transition-colors"
            >
              {t.contact.sendSpeakerApplication}
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
              {t.contact.speakerApplicationReceived}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

