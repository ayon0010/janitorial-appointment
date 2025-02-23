'use client';
import { useEffect, useRef, useState } from 'react';

const FireIcon = ({ width }) => {
    const [isClient, setIsClient] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            import('lottie-web').then((lottie) => {
                import('../../public/assets/Animation - 1720847116099.json').then((animation) => {
                    if (typeof window !== 'undefined' && document) {
                        const animationInstance = lottie.loadAnimation({
                            container: containerRef.current,
                            renderer: 'svg',
                            loop: true,
                            autoplay: true,
                            animationData: animation.default,
                        });

                        return () => animationInstance.destroy();
                    }
                });
            });
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
