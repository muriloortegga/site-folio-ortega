import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] bg-[#1A1916] flex flex-center flex-col items-center justify-center gap-8 cursor-pointer"
          onClick={() => setLoading(false)}
        >
          <motion.div 
            initial={{ opacity: 0, y: -40, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-12 h-12"
          >
            <svg viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-white">
              <path d="M12 0C12 0 2 10 2 17C2 22.5 6.5 27 12 27C17.5 27 22 22.5 22 17C22 10 12 0 12 0Z"/>
            </svg>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/40 text-[11px] font-sans uppercase tracking-[0.2em] font-light"
          >
            Carregando Experiência
          </motion.p>
          
          <div className="fixed bottom-0 left-0 w-full h-[1px] bg-white/10">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.4, duration: 2, ease: [0.4, 0, 0.2, 1] }}
              className="h-full bg-white"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
