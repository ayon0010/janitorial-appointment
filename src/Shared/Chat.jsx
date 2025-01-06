'use client';
import React, { useEffect } from 'react';

const Chat = () => {
    useEffect(() => {
        // Inject the Facebook SDK
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        // Initialize the Facebook SDK
        window.fbAsyncInit = function () {
            window.FB.init({
                xfbml: true,
                version: 'v17.0', // Replace with the latest version
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            {/* Facebook Customer Chat Plugin Code */}
            <div id="fb-root"></div>
            <div
                className="fb-customerchat"
                attribution="biz_inbox"
                page_id="498761066660090"
                app_id="619890160420977"
            ></div>
        </>
    );
};

export default Chat;
