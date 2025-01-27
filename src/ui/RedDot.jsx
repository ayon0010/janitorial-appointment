'use client'
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animation from '../../public/assets/Animation - 1722325725232.json';

const RedDot = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Initialize Lottie animation
        const animationInstance = lottie.loadAnimation({
            container: containerRef.current, // The DOM element where the animation will render
            renderer: 'svg', // Use SVG rendering
            loop: true, // Loop the animation
            autoplay: true, // Start playing immediately
            animationData: animation, // The animation data from the imported JSON file
        });

        // Cleanup the animation on component unmount
        return () => animationInstance.destroy();
    }, []); // Empty dependency array to ensure this runs only once

    return (
        <div ref={containerRef} className="h-auto w-[30px]" />
    );
};

export default RedDot;
