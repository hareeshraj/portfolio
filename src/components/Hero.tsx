import { motion } from 'framer-motion';
import { useNavigation } from '../context/NavigationContext';
import portfolioData from '../data/portfolio.json';
import FlipImage from './FlipImage';
import SkillsMarquee from './SkillsMarquee';

const Hero = () => {
  const { setActiveSection } = useNavigation();

  const questions = [
    {
      text: 'know my experience',
      action: () => setActiveSection('experience'),
    },
    {
      text: 'education background',
      action: () => setActiveSection('education'),
    },
  ];

  return (
    <div className="flex-grow flex flex-col justify-start md:justify-center pt-20 pb-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <FlipImage />
          </motion.div>

          {/* Right Side - Bio and Questions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {portfolioData.personal.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6">
              {portfolioData.personal.title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed px-4 md:px-0">
              {portfolioData.personal.bio}
            </p>

            {/* Top Skills Tiles */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Top Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-2 sm:grid sm:grid-cols-3 sm:gap-3">
                {portfolioData.topSkills.slice(0, 6).map((skill) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.2 } }}
                    className="px-4 py-2 sm:px-4 sm:py-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm border border-blue-200 dark:border-blue-800 rounded-full sm:rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
                  >
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center block leading-tight whitespace-nowrap">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Questions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mb-4 w-full">
              {questions.map((question, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={question.action}
                  className="group relative px-6 py-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 dark:border-gray-700/30 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 overflow-hidden w-[90%] sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center sm:justify-start gap-3">
                    {index === 0 ? (
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    )}
                    <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {index === 0 ? 'want to see my work?' : 'what i learned?'}
                    </span>
                    <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Skills Marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full max-w-[100vw] overflow-hidden"
            >
              <SkillsMarquee />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

