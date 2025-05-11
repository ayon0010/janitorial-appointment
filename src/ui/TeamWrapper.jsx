'use client'; // Add this if you're inside a client component

import dynamic from 'next/dynamic';
const Team = dynamic(() => import('./Home/Team'), {
    loading: () => <p>Loading team section...</p>,
    ssr: false,
});

import React from 'react';

const TeamWrapper = () => {
    return (
        <div>
            <Team />
        </div>
    );
};

export default TeamWrapper;