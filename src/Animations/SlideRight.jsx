'use client'
import React from 'react';
import { motion } from 'framer-motion';

const SlideRight = ({ children, delay = 0, amount = 0.2 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: amount }}
            transition={{
                delay,
                duration: 0.9,
                ease: 'easeOut',
            }}
            style={{
                willChange: 'opacity, transform',
                transform: 'translateZ(0)',
            }}
        >
            {children}
        </motion.div>

    );
};

export default SlideRight;
