'use client'
import { useEffect } from 'react';

const MessengerChat = () => {
    useEffect(() => {
        // Load the Facebook SDK script
        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v16.0', // Use the latest version of the API
            });
        };

        (function (d, s, id) {
            const fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            const js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }, []);

    return (
        <>
            <div id="fb-root"></div>
            <div
                className="fb-customerchat"
                attribution="setup_tool"
                page_id="498761066660090" // Replace with your Facebook Page ID
                theme_color="#0084ff"
                logged_in_greeting="Hi! How can we help you?"
                logged_out_greeting="Hi! How can we help you?"
            ></div>
        </>
    );
};

export default MessengerChat;



//  page_id=""
//                 app_id=""

