'use client'
import { useEffect, useRef, useState } from 'react';

const Dot = ({ width, h }) => {
    const [isClient, setIsClient] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            import('lottie-web').then((lottie) => {
                import('@/../public/assets/Animation - 1722287102834.json').then((animation) => {
                    const animationInstance = lottie.loadAnimation({
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

    if (!isClient) {
        return null;
    }

    return (
        <div className={`${!h ? 'flex items-center justify-center pt-40 pb-20 px-10' : ''}`}>
            <div className="flex items-center justify-center">
                <div ref={containerRef} className={`h-auto w-[${width}]`} />
            </div>
        </div>
    );
};

export default Dot;
