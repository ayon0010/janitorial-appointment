'use client';
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animation from '../../public/assets/Animation - 1720847116099.json';

const FireIcon = ({ width }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && document) {
            const animationInstance = lottie.loadAnimation({
                container: containerRef.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animation,
            });

            // Cleanup the animation on component unmount
            return () => animationInstance.destroy();
        }
    }, []);

    return (
        <div
            ref={containerRef}
            title="popular"
            style={{ width: `${width}px` }}
            className="h-auto"
        />
    );
};

export default FireIcon;

