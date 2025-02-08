'use client'
import React from 'react';
import dynamic from 'next/dynamic';

const FireIcon = dynamic(() => import('./FireIcon'), {
    ssr: false // Only use this if the component depends on browser-specific APIs
});

const FireClient = () => {
    return (
        <FireIcon width={"30"} />
    );
};

export default FireClient;