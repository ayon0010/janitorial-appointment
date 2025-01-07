// 'use client';
// import React, { useEffect } from 'react';

// const Chat = () => {
//     useEffect(() => {
//         // Inject the Facebook SDK
//         const script = document.createElement('script');
//         script.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//         script.async = true;
//         script.defer = true;
//         document.body.appendChild(script);

//         // Initialize the Facebook SDK
//         window.fbAsyncInit = function () {
//             window.FB.init({
//                 xfbml: true,
//                 version: 'v17.0', // Replace with the latest version
//             });
//         };

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);

//     return (
//         <>
//             {/* Facebook Customer Chat Plugin Code */}
//             <div id="fb-root"></div>
//             <div
//                 className="fb-customerchat"
//                 attribution="biz_inbox"
//                 page_id="498761066660090"
//                 app_id="619890160420977"
//             ></div>
//         </>
//     );
// };

// export default Chat;

'use client';

import { useEffect } from 'react';

const MessengerChat = () => {
  useEffect(() => {
    // Initialize Facebook SDK
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v16.0',
      });
    };

    // Load the Facebook SDK script
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


