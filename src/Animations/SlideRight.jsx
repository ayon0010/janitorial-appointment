'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SlideRight = ({ children, delay = 0, amount = 0.1 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 200 }} // Less distance for better performance on small devices
            animate={isInView ? { opacity: 1, x: 0 } : {}}
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
