"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

const FadeIn = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ position: "relative" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeIn;
