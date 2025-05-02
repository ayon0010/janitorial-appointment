'use effect'
import React from 'react';
import { motion } from "framer-motion";

const FadeIn = ({ key, children }) => {
    return (
        <motion.div
            key={key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;