'use client';
import { useEffect, useRef, useState } from 'react';

const Load = () => {
    const [shouldShow, setShouldShow] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const alreadyVisited = sessionStorage.getItem('hasVisited');

        if (!alreadyVisited) {
            setShouldShow(true);
            const timer = setTimeout(() => {
                setShouldShow(false);
                sessionStorage.setItem('hasVisited', 'true');
            }, 2000); // 1.5 seconds

            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        if (!shouldShow) return;

        const loadLottieAnimation = async () => {
            const lottie = (await import('lottie-web')).default;
            const animationData = await import('@/../public/assets/Animation - 1722287102834.json');

            const animationInstance = lottie.loadAnimation({
                container: containerRef.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData.default,
            });

            return () => animationInstance.destroy();
        };

        loadLottieAnimation().catch(console.error);
    }, [shouldShow]);

    if (!shouldShow) return null;

    return (
        <div className="flex items-center justify-center h-screen absolute inset-0 top-0 left-0 bg-white z-[100] overflow-hidden">
            <div className="flex items-center justify-center">
                <div ref={containerRef} className="h-auto w-[400px]" />
            </div>
        </div>
    );
};

export default Load;
