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
    <div className="flex-grow flex flex-col justify-start md:justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
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
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {portfolioData.personal.bio}
            </p>

            {/* Top Skills Tiles */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Top Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {portfolioData.topSkills.slice(0, 6).map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.2 } }}
                    className="px-4 py-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm border border-blue-200 dark:border-blue-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center block">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Questions */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              {questions.map((question, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={question.action}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                >
                  {question.text}
                </motion.button>
              ))}
            </div>

            {/* Skills Marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
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

