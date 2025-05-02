'use client'
import React from 'react';
import { motion } from 'framer-motion';

const UpAnimation = ({ animationKey, children, delay = 0 }) => {
    return (
        <motion.div
            key={animationKey}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'opacity, transform' }}
        >
            {children}
        </motion.div>
    );
};

export default UpAnimation;
