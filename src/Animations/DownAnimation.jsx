'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const DownAnimation = ({ animationKey, children, delay = 0 }) => {
    const pathName = usePathname()
    return (
        <motion.div
            key={pathName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
        >
            {children}
        </motion.div>
    );
};

export default DownAnimation;
