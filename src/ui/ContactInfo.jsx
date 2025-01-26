'use client'
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import React from 'react';
import animation from '../../public/assets/Animation - 1737470603251c.json'
import animation2 from '../../public/assets/Animation - 1737470167441contact.json'
import fb from '@/../public/assets/Frame (8).svg'
import insta from '@/../public/assets/Frame (10).svg'
import linked from '@/../public/assets/Frame (11).svg'
import twitt from '@/../public/assets/Frame (12).svg'
import youtube from '@/../public/assets/Frame (13).svg'
import Image from 'next/image';
import Link from 'next/link';


const ContactInfo = () => {
    return (
        <div className='px-10 grid 2xl:grid-cols-2 xl:grid-cols-2 items-center'>
            <div className='w-full h-auto'>
                <Lottie animationData={animation} className='w-full h-full' loop={true} />
            </div>
            <div className='space-y-8'>
                {/* <h2 className='text-green-500 font-semibold 2xl:text-5xl xl:text-5xl'>Contact Us Today</h2> */}

                <div>
                    <Lottie animationData={animation2} className='h-[200px] w-auto' loop={true} speed={0.4} />
                </div>
                <p className='text-3xl font-semibold text-center'>+8801726108060</p>
                <div className=''>
                    {/* <SectionTitles heading={'Find Us on Social Media'} subHeading={"If you want to contact us in person or simply want to know more about us, here's some helpful information about us"} /> */}
                    <div className='grid 2xl:grid-cols-5 xl:grid-cols-5 grid-cols-2 2xl:gap-8 xl:gap-8 gap-6'>
                        <Link href="https://www.facebook.com" target="_blank">
                            <Image className='cursor-pointer' src={fb} alt="Facebook" />
                        </Link>
                        <Link href="https://www.instagram.com" target="_blank">
                            <Image className='cursor-pointer' src={insta} alt="Instagram" />
                        </Link>
                        <Link href="https://www.linkedin.com" target="_blank">
                            <Image className='cursor-pointer' src={linked} alt="LinkedIn" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank">
                            <Image className='cursor-pointer' src={twitt} alt="Twitter" />
                        </Link>
                        <Link href="https://www.youtube.com" target="_blank">
                            <Image className='cursor-pointer' src={youtube} alt="YouTube" />
                        </Link>
                    </div>
                </div>
                <p className='text-lg text-center'>With your specific requirements, we can accurately determine the category of janitorial jobs you are prepared to handle!</p>
            </div>
        </div>
    );
};

export default ContactInfo;