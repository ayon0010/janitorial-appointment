'use client';
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const SlideRight = ({ children, delay = 0, amount = 0.1 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 200 }} // Less distance for better performance on small devices
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                delay,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94], // easeOutCubic
            }}
            viewport={{ once: true }}
            className="transform-gpu"
        >
            {children}
        </motion.div>
    );
};

export default SlideRight;
