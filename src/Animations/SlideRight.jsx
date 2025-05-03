'use client'
import React from 'react';
import { motion } from 'framer-motion';

const SlideRight = ({ children, delay = 0, amount = 0.4 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 110 }} // Smaller offset feels smoother
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: amount }}
            transition={{
                delay,
                duration: 1.5, // slightly longer for fluid motion
                ease: [0.22, 1, 0.36, 1], // standard "easeOutExpo" feel
            }}
            style={{ willChange: 'opacity, transform' }}
        >
            {children}
        </motion.div>
    );
};

export default SlideRight;
