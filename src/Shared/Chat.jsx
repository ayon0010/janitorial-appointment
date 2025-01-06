'use client'
import React from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';

const Chat = () => {
    return (
        <div>
            <h3>Ayon</h3>
            <FacebookProvider appId="1121645909753321" chatSupport>
                <CustomChat pageId="498761066660090" minimized={true} />
            </FacebookProvider>
        </div>
    );
};

export default Chat;