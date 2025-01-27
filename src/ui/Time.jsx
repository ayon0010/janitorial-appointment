'use client'
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animation from '../../public/assets/Animation - 1722366455549.json';

const Time = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Initialize Lottie animation
        const animationInstance = lottie.loadAnimation({
            container: containerRef.current, // The DOM element where the animation will render
            renderer: 'svg', // Use SVG for rendering
            loop: true, // Loop the animation
            autoplay: true, // Start playing immediately
            animationData: animation, // Pass in the animation data
        });

        // Cleanup the animation on component unmount
        return () => animationInstance.destroy();
    }, []);

    return (
        <div ref={containerRef} className="h-auto w-full" />
    );
};

export default Time;
