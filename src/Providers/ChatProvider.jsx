'use client'
import React, { useEffect } from 'react';

const ChatProvider = ({ children }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://embed.tawk.to/6794f69c3a8427326074c7fe/1iieu6lic';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        document.body.appendChild(script);

        return () => {
            // Cleanup script when the component unmounts
            document.body.removeChild(script);
        };
    }, [])
    return (
        <>
            {children}
        </>
    );
};

export default ChatProvider;