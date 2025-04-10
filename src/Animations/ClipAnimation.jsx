import React from 'react';
import { motion } from "framer-motion";

const ClipAnimation = ({ children, key }) => {
    return (
        <motion.div
            key={key}
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0, }} animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1, }} transition={{ clipPath: { type: 'spring', duration: 1.5, ease: 'easeInOut', delay: 0.1, damping: 20, stiffness: 80 }, opacity: { duration: 1.5, ease: 'easeInOut', delay: 0.1 }, }}
            className='relative'>
            {children}
        </motion.div>
    );
};

export default ClipAnimation;