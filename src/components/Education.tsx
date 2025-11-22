import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const Education = () => {
  const educations = portfolioData.education;

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Education
        </motion.h1>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="glass dark:glass-dark rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <span className="text-sm text-purple-600 dark:text-purple-400 font-medium mt-2 md:mt-0">
                        {edu.year}
                      </span>
                    </div>
                    <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {edu.institution}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {edu.location}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

