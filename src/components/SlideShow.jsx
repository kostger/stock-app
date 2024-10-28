import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const Slideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[currentIndex].src}
          src={images[currentIndex].src}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Header caption */}
      <AnimatePresence>
        <motion.div
          key={images[currentIndex].caption}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4 "
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            {images[currentIndex].caption}
          </h2>
          <p className="text-sm md:text-base mt-2">
            {images[currentIndex].subheader}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
