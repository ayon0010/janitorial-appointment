'use client'
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import BuyLeadMessage with a fallback loading component
const BuyLeadMessage = dynamic(() => import('./BuyLeadMessage'), {
    loading: () => <p>Loading...</p>, // Optional: Show a loading message or spinner
    ssr: false, // Optionally disable server-side rendering if the component is client-only
});


const Stripe = ({ isDisabled, leads, appointmentDate, product_Id, prize }) => {
    return (
        <div>
            <BuyLeadMessage isDisabled={isDisabled} leads={leads} appointmentDate={appointmentDate} product_Id={product_Id} prize={prize} />
        </div>
    );
};

export default Stripe;