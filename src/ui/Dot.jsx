'use client'
import { useEffect, useRef, useState } from 'react';

const Dot = ({ width }) => {
    const [isClient, setIsClient] = useState(false);
    const containerRef = useRef(null);

    // Check if the component is rendered on the client-side
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const lottie = require('lottie-web'); // Import lottie only on the client-side
            const animation = require('@/../public/assets/Animation - 1722287102834.json');

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
    }, [isClient]);

    if (!isClient) {
        return null; // Render nothing on the server-side
    }

    return (
        <div className="flex items-center justify-center pt-40 pb-20 px-10">
            <div className="flex items-center justify-center">
                <div ref={containerRef} className={`h-auto w-${width}`} />
            </div>
        </div>
    );
};

export default Dot;
