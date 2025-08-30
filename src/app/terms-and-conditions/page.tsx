import { motion } from 'framer-motion';
import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Your Company</title>
        <meta name="description" content="Read our terms and conditions." />
      </Head>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Effective Date: January 1, 2023</p>
          <div className="mt-8">
            {['Introduction', 'Definitions', 'User Responsibilities', 'Intellectual Property Rights', 'Disclaimers', 'Limitation of Liability', 'Governing Law', 'Changes to These Terms', 'Contact Information'].map((section, index) => (
              <div key={index} id={section.toLowerCase().replace(/ /g, '-')}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{section}</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}