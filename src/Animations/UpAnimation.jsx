'use client'
import React from 'react';
import { motion } from 'framer-motion';

const UpAnimation = ({ animationKey, children, delay = 0 }) => {
    return (
        <motion.div
            key={animationKey}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 1, ease: [0.4, 0, 0.2, 1] }} // cubic-bezier easing for smoother animation
        >
            {children}
        </motion.div>
    );
};

export default UpAnimation;
