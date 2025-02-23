'use client';
import { useEffect, useRef, useState } from 'react';

const Loading = () => {
    const [isClient, setIsClient] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const loadLottieAnimation = async () => {
                const lottie = (await import('lottie-web')).default;
                const animationData = await import('@/../public/assets/Animation - 1722287102834.json');

                const animationInstance = lottie.loadAnimation({
                    container: containerRef.current,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    animationData: animationData.default, // Ensure to use .default for dynamic imports
                });

                return () => animationInstance.destroy();
            };

            loadLottieAnimation().catch(console.error);
        }
    }, [isClient]);

    if (!isClient) {
        return null;
    }

    return (
        <div className="flex items-center justify-center pt-40 pb-20 px-10">
            <div className="flex items-center justify-center">
                <div ref={containerRef} className="h-auto w-[400px]" />
            </div>
        </div>
    );
};

export default Loading;
