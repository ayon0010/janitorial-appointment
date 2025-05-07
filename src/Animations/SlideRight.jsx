'use client';
import React from 'react';
import { motion } from 'framer-motion';

const SlideRight = ({ children, delay = 0, amount = 0.2 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 80 }} // Less movement
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount }}
            transition={{
                delay,
                duration: 0.6,
                ease: 'easeOut',
            }}
            layout="position"
            className="transform-gpu will-change-transform"
        >
            {children}
        </motion.div>
    );
};

export default SlideRight;
