import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const Experience = () => {
  const experiences = portfolioData.experience;
  const [selectedExp, setSelectedExp] = useState<typeof experiences[0] | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Experience
        </motion.h1>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                >
                  <div
                    onClick={() => setSelectedExp(exp)}
                    className="glass dark:glass-dark rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-2 md:mt-0">
                        {exp.duration}
                      </span>
                    </div>
                    <h4 className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-2">
                      {exp.company}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {exp.location}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-2">
                      {Array.isArray(exp.description) ? exp.description.join(' ') : exp.description}
                    </p>
                    <div className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read full experience
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedExp && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedExp(null);
                }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-h-[90vh] flex flex-col"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="p-8 overflow-y-auto custom-scrollbar">
                  <div className="mb-6 pr-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedExp.role}
                      </h2>
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {selectedExp.duration}
                      </span>
                    </div>
                    <h3 className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-1">
                      {selectedExp.company}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {selectedExp.location}
                    </p>
                  </div>

                  <div className="prose dark:prose-invert max-w-none">
                    {Array.isArray(selectedExp.description) ? (
                      <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                        {selectedExp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                        {selectedExp.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Experience;

