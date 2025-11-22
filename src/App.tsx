import { motion, AnimatePresence } from 'framer-motion';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

const AppContent = () => {
  const { activeSection } = useNavigation();

  return (
    <div className="h-[100dvh] flex flex-col bg-transparent transition-colors duration-300 overflow-hidden">
      <Header />

      <main className="flex-grow flex flex-col relative overflow-y-auto scroll-smooth">
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
        </AnimatePresence>
      </main>

      <Footer />
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
