'use client';

import React, { useEffect, useState } from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const Chat = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Ensure this code runs only on the client side
        setIsClient(true);

        // Dynamically load Facebook SDK
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/sdk.js';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.onload = () => {
            if (window.FB) {
                window.FB.init({
                    appId: '1121645909753321',
                    autoLogAppEvents: true,
                    xfbml: true,
                    version: 'v14.0', // Update to the latest Facebook API version
                });
            }
        };
        document.body.appendChild(script);
    }, []);

    if (!isClient) return null; // Prevent rendering on the server

    return (
        <div>
            <FacebookProvider appId="1121645909753321">
                <CustomChat pageId="498761066660090" minimized={true} />
            </FacebookProvider>
        </div>
    );
};

export default Chat;
