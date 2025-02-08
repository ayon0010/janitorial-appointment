'use client'
import React from 'react';
import dynamic from 'next/dynamic';
const Dot = dynamic(() => import('@/ui/Dot'), { ssr: false });
const DotClient = () => {
    return (
        <div>
            <Dot width={'30px'} />
        </div>
    );
};

export default DotClient;