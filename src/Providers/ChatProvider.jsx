'use client'
import React, { useEffect } from 'react';

const ChatProvider = ({ children }) => {
    useEffect(() => {
        if (typeof document !== 'undefined') {
            const loadTawkScript = () => {
                const script = document.createElement('script');
                script.async = true;
                script.src = 'https://embed.tawk.to/6794f69c3a8427326074c7fe/1iieu6lic';
                script.charset = 'UTF-8';
                script.setAttribute('crossorigin', '*');
                document.body.appendChild(script);
            };

            // Load the script after the initial render (avoids blocking render)
            const scriptTimeout = setTimeout(loadTawkScript, 0);

            return () => {
                // Cleanup: remove script when the component unmounts
                clearTimeout(scriptTimeout);
                const existingScript = document.querySelector(`script[src="https://embed.tawk.to/6794f69c3a8427326074c7fe/1iieu6lic"]`);
                if (existingScript) {
                    document.body.removeChild(existingScript);
                }
            };
        }
    }, []);

    return <>{children}</>;
};

export default ChatProvider;
