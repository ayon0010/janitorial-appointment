'use client'
import { useEffect, useRef, useState } from 'react';

const Time = () => {
    const [isClient, setIsClient] = useState(false);
    const containerRef = useRef(null);

    // Check if the component is rendered on the client-side
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        // Initialize Lottie animation
        if (isClient) {
            const lottie = require('lottie-web');
            const animation = require('../../public/assets/Animation - 1722366455549.json');
            const animationInstance = lottie.loadAnimation({
                container: containerRef.current, // The DOM element where the animation will render
                renderer: 'svg', // Use SVG for rendering
                loop: true, // Loop the animation
                autoplay: true, // Start playing immediately
                animationData: animation, // Pass in the animation data
            });

            // Cleanup the animation on component unmount
            return () => animationInstance.destroy();
        }
    }, [isClient]);
    if (!isClient) {
        return null; // Render nothing on the server-side
    }

    return (
        <div ref={containerRef} className="h-auto w-full" />
    );
};

export default Time;
