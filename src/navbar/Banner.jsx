import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Banner({ message }) {
  return (
  <div className="fixed top-0 left-0 w-full z-40">
  <div className="bg-gradient-to-r from-[#145C84] to-[#1A729F] shadow-md flex justify-center items-center p-2">
    <AnimatePresence mode="wait">
      <motion.div
        key={message}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[#F7F2B3] text-center px-6 py-2 font-medium tracking-wide"
      >
        {message}
      </motion.div>
    </AnimatePresence>
  </div>
</div>

  );
}
