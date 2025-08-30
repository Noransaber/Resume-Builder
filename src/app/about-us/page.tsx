'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Resume Builder</title>
        <meta
          name="description"
          content="Learn more about our website, mission, values, and team."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative  min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 text-white text-center px-6 pt-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white"
          >
            About <span className="text-primary">Resume Builder</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl leading-relaxed mb-8"
          >
            We help people stand out with powerful resumes and cover letters,
            guiding them toward career success.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
          >
            Sign In <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              To empower job seekers worldwide by giving them the tools and
              confidence to pursue their dream careers with professional,
              compelling resumes.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mission"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Our Core Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Integrity',
                desc: 'We believe in transparency, honesty, and accountability in everything we do.',
              },
              {
                title: 'Innovation',
                desc: 'We constantly improve our tools to provide cutting-edge solutions for job seekers.',
              },
              {
                title: 'Excellence',
                desc: 'We aim to deliver top-quality services and experiences to our users.',
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">
            Our Journey
          </h2>
          <div className="space-y-12">
            {[
              {
                year: '2021',
                text: 'Launched Resume Builder with the goal of simplifying resume creation.',
              },
              {
                year: '2022',
                text: 'Reached 100k users worldwide, helping them land their dream jobs.',
              },
              {
                year: '2024',
                text: 'Introduced AI-powered resume suggestions and real-time improvements.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-6"
              >
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  {item.year}
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  {item.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
      Meet Our Team
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {[
        {
          name: "Alice",
          role: "Frontend Developer",
          image:
            "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Bob",
          role: "Backend Developer",
          image:
            "https://images.unsplash.com/photo-1625181796571-7f0d4571ab12?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Charlie",
          role: "UI/UX Designer",
          image:
            "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ].map((member, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <Image
            src={member.image}
            alt={member.name}
            width={150}
            height={150}
            className="rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {member.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 text-white text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:bg-gradient-to-br dark:from-zinc-900 dark:via-zinc-800 dark:to-black">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Build Your Future?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg mb-8 max-w-2xl mx-auto"
        >
          Join thousands of professionals who already trust Resume Builder to
          advance their careers with confidence.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Sign In Now
        </motion.button>
      </section>
    </>
  );
}
