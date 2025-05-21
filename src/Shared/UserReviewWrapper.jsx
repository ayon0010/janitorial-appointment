'use client';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const UserReview = dynamic(() => import('@/ui/Home/ReviewSwiper'), {
    loading: () => <p>Loading reviews...</p>,
    ssr: false,
});

const UserReviewWrapper = () => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once it's visible
                }
            },
            {
                root: null, // Use viewport
                rootMargin: '0px',
                threshold: 0.1, // Adjust as needed
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Initialize particles once the section is visible
    useEffect(() => {
        if (!isVisible) return;

        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                console.log('Particles initialized during idle time');
                // particlesJS('particles-js', { ... });
            });
        } else {
            setTimeout(() => {
                console.log('Fallback: Particles initialized');
                // particlesJS('particles-js', { ... });
            }, 1000);
        }
    }, [isVisible]);

    return (
        <div ref={containerRef} className='h-[932px]'>
            {isVisible && <UserReview />}
        </div>
    );
};

export default UserReviewWrapper;
