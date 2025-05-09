'use client';
import React from 'react';
import { motion } from 'framer-motion';

const SlideRight = ({ children, delay = 0, amount = 0.2 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount }}
            transition={{
                delay,
                duration: 0.5,  // Optional: Adjust the duration of the animation
                ease: 'easeOut',  // Standard easing function
            }}
            className="transform-gpu"
        >
            {children}
        </motion.div>
    );
};

export default SlideRight;
