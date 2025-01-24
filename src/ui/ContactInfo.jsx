'use client'
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import React from 'react';
import animation from '../../public/assets/Animation - 1737470603251c.json'
import animation2 from '../../public/assets/Animation - 1737470167441contact.json'


const ContactInfo = () => {
    return (
        <div className='px-10 grid 2xl:grid-cols-2 xl:grid-cols-2 items-center'>
            <div className='w-full h-auto'>
                <Lottie animationData={animation} className='w-full h-full' loop={true} />
            </div>
            <div className='space-y-6'>
                {/* <h2 className='text-green-500 font-semibold 2xl:text-5xl xl:text-5xl'>Contact Us Today</h2> */}

                <div>
                    <Lottie animationData={animation2} className='h-[200px] w-auto' loop={true} speed={0.4} />
                </div>
                <p className='text-3xl font-semibold text-center'>+8801726108060</p>
                <p className='text-lg text-center'>With your specific requirements, we can accurately determine the category of janitorial jobs you are prepared to handle!</p>
            </div>
        </div>
    );
};

export default ContactInfo;