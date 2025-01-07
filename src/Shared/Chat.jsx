<<<<<<< HEAD
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
=======
"use client"; // Ensure this is a client component
import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    // Ensure the code only runs on the client side
    if (typeof window !== "undefined") {
      window.fbAsyncInit = function () {
        FB.init({
          appId: "619890160420977", // Your Facebook App ID
          xfbml: true,
          version: "v17.0", // Use the latest SDK version
        });
      };

      // Load the Facebook SDK script
      (function (d, s, id) {
        if (d.getElementById(id)) return;
        const js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        const fjs = d.getElementsByTagName(s)[0];
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="498761066660090" // Your Facebook Page ID
        theme_color="#0084ff" // Customize the theme color
        logged_in_greeting="Hi! How can we assist you?"
        logged_out_greeting="Hi! Please log in to chat with us."
      ></div>
    </>
  );
};

export default Chat;
>>>>>>> 7c548443f9a9f7fdb8b0a3b249c66a09e55e7a82
