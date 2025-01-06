'use client';
import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const Chat = () => {
    return (
        <FacebookProvider appId="619890160420977">
            <CustomChat pageId="498761066660090" minimized={true} />
        </FacebookProvider>
    );
};

export default Chat;
