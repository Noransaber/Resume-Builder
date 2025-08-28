import { motion } from 'framer-motion';

export default function TableOfContents({ sections }) {
  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Table of Contents</h3>
      <ul className="space-y-2">
        {sections.map((section, index) => (
          <li key={index}>
            <motion.a
              whileHover={{ x: 5 }}
              href={`#${section.toLowerCase().replace(/ /g, '-')}`}
              className="text-primary hover:underline"
            >
              {section}
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
}