import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const SkillsMarquee = () => {
    const skills = portfolioData.skills || [];

    return (
        <div className="w-full overflow-hidden py-8 relative">
            {/* Gradient Masks for smooth fade out at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none"></div>

            <div className="flex">
                <motion.div
                    className="flex gap-4 px-4"
                    animate={{
                        x: ['0%', '-50%'],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 100,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Duplicate list for seamless loop */}
                    {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full shadow-sm whitespace-nowrap"
                        >
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {skill}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default SkillsMarquee;
