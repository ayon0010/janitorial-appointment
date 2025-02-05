'use client'
import useAuth from '@/Hooks/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react';

const PaymentLink = ({ link, plan }) => {
    const router = useRouter();
    const { user } = useAuth();
    const handleLink = () => {
        if (typeof window !== 'undefined') {
            if (link) {
                localStorage.setItem('paymentLink', link);
            }
            if (user) {
                router.push(link + `?prefilled_email=${user.email}`);
            }
            else {
                router.push('/login');
            }
        }

    }

    return (
        <div onClick={() => handleLink()}>
            <button className={`btn ${plan.buttonclassName} font-semibold w-full`}>Start Now</button>
        </div>
    );
};

export default PaymentLink;