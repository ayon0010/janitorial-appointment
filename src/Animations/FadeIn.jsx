"use client";
import React from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const FadeIn = ({ children }) => {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
