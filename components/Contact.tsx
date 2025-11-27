'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: t.contact.topics.general,
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
    // Client-side validation
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // TODO: Connect to API route later
      console.log('Contact form submission:', formData);
    }
  };

  const topics = [
    t.contact.topics.general,
    t.contact.topics.sponsorship,
    t.contact.topics.speaking,
    t.contact.topics.media,
    t.contact.topics.partnership,
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contact.title}{' '}
            <span className="text-dbw-red">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-lg text-dbw-gray-light mb-4">
            {t.contact.description}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm text-dbw-gray-light">
            <a href="mailto:info@dominicanablockchainweek.com" className="hover:text-dbw-red transition-colors">
              info@dominicanablockchainweek.com
            </a>
            <span className="hidden md:inline">•</span>
            <a href="mailto:sponsor@dominicanablockchainweek.com" className="hover:text-dbw-red transition-colors">
              sponsor@dominicanablockchainweek.com
            </a>
          </div>
        </motion.div>

        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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

            <div>
              <label
                htmlFor="topic"
                className="block text-sm font-medium text-dbw-gray-light mb-2"
              >
                {t.contact.topic}
              </label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-dbw-red transition-colors"
              >
                {topics.map((topic) => (
                  <option key={topic} value={topic} className="bg-dbw-blue-dark">
                    {topic}
                  </option>
                ))}
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
                placeholder={t.contact.message}
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-dbw-red text-white font-semibold rounded-lg hover:bg-dbw-red-dark transition-colors"
            >
              {t.contact.sendMessage}
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
              {t.contact.weWillReply}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
