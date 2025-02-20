'use client'
import React from 'react';
import dynamic from "next/dynamic";
// Dynamically import providers (disable SSR)
const AuthProvider = dynamic(() => import("./AuthProvider"), { ssr: false });
const QueryProvider = dynamic(() => import("./QueryProvider"), { ssr: false });
const ChatProvider = dynamic(() => import("./ChatProvider"), { ssr: false });

const Providers = ({ children }) => {
    return (
        <>
            <AuthProvider>
                <QueryProvider>
                    <ChatProvider>
                        {children}
                    </ChatProvider>
                </QueryProvider>
            </AuthProvider>
        </>
    );
};

export default Providers;