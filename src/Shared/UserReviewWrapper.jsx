'use client'
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the UserReview component with a loading state
const UserReview = dynamic(() => import('@/ui/Home/ReviewSwiper'), {
    loading: () => <p>Loading reviews...</p>, // Display loading text while the component is being loaded
    ssr: false, // Disable server-side rendering for this component
});

const UserReviewWrapper = () => {
    // Function to initialize particles during idle time
    const initializeParticles = () => {
        if (window.requestIdleCallback) {
            // If the browser supports requestIdleCallback, use it to initialize particles during idle time
            requestIdleCallback(() => {
                // Initialize the `tsParticles` or any particle-related logic here
                console.log("Particles initialized during idle time");

                // Example particle logic (replace this with your actual tsParticles initialization)
                // particlesJS('particles-js', { ... }); 
            });
        } else {
            // Fallback for browsers that don't support requestIdleCallback
            setTimeout(() => {
                // Initialize particles after a short delay if requestIdleCallback is not available
                console.log("Fallback: Particles initialized");

                // Example particle logic (replace this with your actual tsParticles initialization)
                // particlesJS('particles-js', { ... });
            }, 1000); // Delay initialization by 1 second
        }
    };

    // Run the initializeParticles function when the component is mounted
    useEffect(() => {
        initializeParticles();
    }, []);

    return (
        <div>
            {/* Display the UserReview component */}
            <UserReview />
        </div>
    );
};

export default UserReviewWrapper;
