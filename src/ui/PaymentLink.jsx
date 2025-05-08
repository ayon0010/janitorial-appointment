'use client'
import useAuth from '@/Hooks/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react';
import ButtonPrimary from '../Shared/Buttons/ButtonPrimary';

const PaymentLink = ({ link, plan }) => {
    const router = useRouter();
    const { user } = useAuth();
    const handleLink = () => {
        if (typeof window !== 'undefined') {
            if (link) {
                sessionStorage.setItem('paymentLink', link);
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
            {/* <button className={`btn ${plan.buttonclassName} font-semibold w-full`}>Start Now</button> */}
            <ButtonPrimary label={'Start Now'}/>
        </div>
    );
};

export default PaymentLink;