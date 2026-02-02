"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/background';
import Loading from './components/Loading';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // On affiche le modal juste après que le loader commence à partir
      setShowModal(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loader" />}
      </AnimatePresence>

      {/* Le contenu du site */}
      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Background />
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </motion.div>
      )}

      {/* Le Modal Beta */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* L'arrière-plan qui assombrit le site */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)} // Ferme au clic sur le fond
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* La boîte de dialogue (Modal) */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center border border-zinc-200 dark:border-zinc-800"
            >
              <h2 className="text-2xl font-bold text-black mb-4">Version Bêta 🚧</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Mon portfolio est encore en cours de construction. Certaines sections peuvent être incomplètes.
              </p>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                Continuer la visite
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}