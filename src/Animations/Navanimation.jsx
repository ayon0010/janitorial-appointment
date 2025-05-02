'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/Shared/Navbar/Navbar';
const NavAnimation = ({ children, animationKey }) => {
    // Nav Position
    const [topPosition, setTopPosition] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 90) {
                    setTopPosition(true);
                }
                else {
                    setTopPosition(false)
                }
            }
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }

    }, [])

    console.log(topPosition)

    return (
        <div
            // initial={{ opacity: 0, translateY: -100 }}
            // animate={{ opacity: 1, translateY: 0 }}
            // transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className={`${topPosition ? 'fixed top-0 left-0 right-0 2xl:h-[100px] xl:h-[100px]' : 'hidden'}`}
        >
            <Navbar />
        </div>
    );
};

export default NavAnimation;