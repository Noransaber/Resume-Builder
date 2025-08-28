import { motion } from 'framer-motion';
import Head from 'next/head';
import HeroSection from '@/components/home/AboutHero';
import ValueCard from '@/components/home/ValueCard';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Your Company</title>
        <meta name="description" content="Learn more about our company, mission, and values." />
      </Head>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <HeroSection
          title="Our Story, Our Vision"
          subtitle="Building a better future together."
        />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mission & Vision</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </p>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Integrity', 'Innovation', 'Excellence'].map((value, index) => (
              <ValueCard key={index} value={value} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            ))}
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Journey</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </p>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Team</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </p>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to get started?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Join Our Community
          </motion.button>
        </section>
      </div>
    </>
  );
}