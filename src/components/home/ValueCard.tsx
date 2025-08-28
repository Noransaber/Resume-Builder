import { motion } from 'framer-motion';

export default function ValueCard({ value, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}