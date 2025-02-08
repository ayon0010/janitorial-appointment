'use client'
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animation from '../../public/assets/Animation - 1722287102834.json';

const Dot = ({ width }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (typeof document !== 'undefined' && document) {
            const animationInstance = lottie.loadAnimation({
                container: containerRef.current, // The DOM element where the animation will render
                renderer: 'svg', // Use SVG rendering
                loop: true, // Loop the animation
                autoplay: true, // Start playing immediately
                animationData: animation, // The animation data from the imported JSON file
            });

            // Cleanup the animation on component unmount
            return () => animationInstance.destroy();
        }
    }, []); // Empty dependency array to ensure this runs only once

    return (
        <div ref={containerRef} className={`h-auto ${width}`} />
    );
};

export default Dot;
