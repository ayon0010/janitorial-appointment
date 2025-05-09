'use client'
import Loading from '@/app/(main)/loading';
import React, { useEffect, useState } from 'react';
const FrontLoader = ({ children }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 20); // Adjust the delay as needed
        return () => clearTimeout(timer);
    })
    return (
        <>
            {
                loading ? <Loading /> : <>{children}</>
            }
        </>
    );
};

export default FrontLoader;