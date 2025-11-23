'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side validation
    if (email && email.includes('@')) {
      setSubmitted(true);
      // TODO: Connect to API route later
      console.log('Newsletter signup:', email);
    }
  };

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.newsletter.title}{' '}
            <span className="text-dbw-red">{t.newsletter.titleHighlight}</span>
          </h2>
          <p className="text-dbw-gray-light mb-8 max-w-2xl mx-auto">
            {t.newsletter.description}
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.newsletter.emailPlaceholder}
                  required
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-dbw-gray-light focus:outline-none focus:border-dbw-red transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-dbw-red text-white font-semibold rounded-lg hover:bg-dbw-red-dark transition-colors"
                >
                  {t.newsletter.subscribe}
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">✓</div>
              <p className="text-dbw-red font-semibold">
                {t.newsletter.thankYou}
              </p>
              <p className="text-dbw-gray-light text-sm mt-2">
                {t.newsletter.checkEmail}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
