'use client'
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import dynamic from "next/dynamic";

const PaymentForm = dynamic(() => import("./PaymentForm"), {
  ssr: false, // Prevents server-side rendering (useful for client-only components)
  loading: () => <p>Loading Payment Form...</p>, // Optional: Show a loading state
});


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Payment({ price, product_Id, closeModal }) {
    const [clientSecret, setClientSecret] = useState("");
    const [dpmCheckerLink, setDpmCheckerLink] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        axiosSecure.post("/create-payment-intent", { price: price })
            .then(response => {
                setClientSecret(response.data.clientSecret);
            })
    }, [axiosSecure, price]);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };


    return (
        <div>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <PaymentForm price={price} product_Id={product_Id} dpmCheckerLink={dpmCheckerLink} closeModal={closeModal} />
                </Elements>
            )}
        </div>
    );
}