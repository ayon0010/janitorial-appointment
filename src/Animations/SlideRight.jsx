'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SlideRight = ({ children, delay = 0, amount = 0.2 }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile(); // Run on mount
        window.addEventListener('resize', checkMobile); // Listen to resize
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // If mobile, return children without animation
    if (isMobile) {
        return <div>{children}</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount }}
            transition={{
                delay,
                duration: 0.5,
                ease: 'easeOut',
            }}
            className="transform-gpu"
        >
            {children}
        </motion.div>
    );
};

export default SlideRight;
