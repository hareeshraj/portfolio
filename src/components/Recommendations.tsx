import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

interface Recommendation {
    id: number;
    name: string;
    position: string;
    company: string;
    image: string;
    text: string;
    linkedin?: string;
}

const Recommendations = () => {
    const recommendations = portfolioData.recommendations as Recommendation[];
    const [selectedRec, setSelectedRec] = useState<Recommendation | null>(null);

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
                >
                    Recommendations
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {recommendations.map((rec, index) => (
                        <motion.div
                            key={rec.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => setSelectedRec(rec)}
                            className="glass dark:glass-dark rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={rec.image}
                                    alt={rec.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md"
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {rec.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {rec.position}
                                    </p>
                                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                        {rec.company}
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-4">
                                "{rec.text}"
                            </p>

                            <div className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read full recommendation
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedRec && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedRec(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 overflow-hidden"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedRec(null)}
                                    className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                                    <img
                                        src={selectedRec.image}
                                        alt={selectedRec.name}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                                    />
                                    <div className="text-center md:text-left">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                            {selectedRec.name}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                                            {selectedRec.position}
                                        </p>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                                            {selectedRec.company}
                                        </p>
                                        {selectedRec.linkedin && (
                                            <a
                                                href={selectedRec.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                                View Profile
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="prose dark:prose-invert max-w-none">
                                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                                        "{selectedRec.text}"
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Recommendations;
