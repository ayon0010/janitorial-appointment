'use client';
import { useEffect, useRef, useState } from 'react';

const FireIcon = ({ width }) => {
    const [isClient, setIsClient] = useState(false);
    const containerRef = useRef(null);

    // Check if the component is rendered on the client-side
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            if (typeof window !== 'undefined' && document) {
                const lottie = require('lottie-web');
                const animation = require('../../public/assets/Animation - 1720847116099.json');
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
        }
    }, [isClient]);
    if (!isClient) {
        return null; // Render nothing on the server-side
    }

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

