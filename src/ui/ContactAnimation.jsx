'use client'
import React, { useEffect, useState } from 'react';
const ContactAnimation = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            if (typeof window !== 'undefined' && document) {
                const lottie = require('lottie-web');
                const animation = require('@/../public/assets/Animation - 1737470167441contact.json');
                const animationContainer = document.getElementById('lottie-animation');
                lottie.loadAnimation({
                    container: animationContainer,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    animationData: animation
                });

                // Cleanup on component unmount
                return () => {
                    lottie.destroy();
                };
            }
        }
    }, [isClient]);

    if (!isClient) {
        return null; // Render nothing on the server-side
    }

    return (
        <div id="lottie-animation" className="h-auto 2xl:w-[300px] xl:w-[300px] bg-transparent" />
    );
};

export default ContactAnimation;