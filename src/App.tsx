import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';

const AppContent = () => {
  const { activeSection } = useNavigation();
  const mainRef = useRef<HTMLElement>(null);

  // Scroll to top smoothly when section changes
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [activeSection]);

  return (
    <div className="h-[100dvh] flex flex-col bg-transparent transition-colors duration-300 overflow-hidden">
      <Header />

      <main ref={mainRef} className="flex-grow flex flex-col relative overflow-y-auto scroll-smooth">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex flex-col"
            >
              <Hero />
            </motion.div>
          )}

          {activeSection === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-grow"
            >
              <Experience />
            </motion.div>
          )}

          {activeSection === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-grow"
            >
              <Education />
            </motion.div>
          )}

          {activeSection === 'recommendations' && (
            <motion.div
              key="recommendations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-grow"
            >
              <Recommendations />
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
