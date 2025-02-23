'use client';
import { useEffect, useRef, useState } from 'react';

const Offline = () => {
    const [isClient, setIsClient] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            import('lottie-web').then((lottie) => {
                import('../../public/assets/Animation - 1722326215234 (1).json').then((animation) => {
                    const animationInstance = lottie.default.loadAnimation({
                        container: containerRef.current,
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        animationData: animation.default,
                    });

                    return () => animationInstance.destroy();
                });
            });
        }
    }, [isClient]);

    if (!isClient) return null;

    return <div ref={containerRef} className="h-auto w-[20px]" />;
};

export default Offline;
