'use client'
import React from 'react';
import dynamic from 'next/dynamic';

const ContactInfo = dynamic(() => import('./ContactInfo'), {
    ssr: false // Set this to false if the component uses browser-specific APIs
});

const ContactAnimationForHome = () => {
    return (
        <ContactInfo />
    );
};

export default ContactAnimationForHome;