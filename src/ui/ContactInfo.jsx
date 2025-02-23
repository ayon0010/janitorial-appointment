'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import image from '../../public/assets/contact-us-janitorial-appointments.jpg';
// Lottie animation paths
import fb from '@/../public/assets/Frame (8).svg';
import linked from '@/../public/assets/Frame (11).svg';
import twitt from '@/../public/assets/Frame (12).svg';

const ContactInfo = () => {
    const animation2Ref = useRef(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Ensure component runs only on the client
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const lottie = require('lottie-web');
            const animationPath2  = require('/assets/Animation - 1737470167441contact.json');
            if (animation2Ref.current) {
                lottie.loadAnimation({
                    container: animation2Ref.current,
                    renderer: 'svg',
                    loop: false,
                    autoplay: true,
                    path: animationPath2,
                });
            }

            return () => {
                lottie.destroy(); // Cleanup Lottie animations
            };
        }
    }, [isClient]);

    if (!isClient) return null;

    const message = encodeURIComponent('Hello! I would like to inquire about your commercial cleaning leads.');

    return (
        <div className="px-10 grid 2xl:grid-cols-2 xl:grid-cols-2 items-center">
            <div className="w-full h-auto">
                <Image src={image} alt='Contact Us - Janitorial Appointment' className='w-full h-auto' height={400} width={600} />
            </div>

            <div className="space-y-8">
                {/* Lottie animation for the second animation */}
                <div ref={animation2Ref} className="h-[200px] w-full" />
                <p className="text-3xl font-semibold text-center">+8801726108060</p>
                <div>
                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-2 2xl:gap-8 xl:gap-8 gap-6">
                        <Link href="https://www.facebook.com/commercialcleaningleads/" target="_blank">
                            <Image className="cursor-pointer" src={fb} alt="Facebook" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/janitorial-appointments-commercial-cleaning-leads/about/?viewAsMember=true" target="_blank">
                            <Image className="cursor-pointer" src={linked} alt="LinkedIn" />
                        </Link>
                        <Link href="https://x.com/cleaningleads12" target="_blank">
                            <Image className="cursor-pointer" src={twitt} alt="Twitter" />
                        </Link>
                        <Link
                            href={`https://wa.me/${+8801726108060}?text=${message}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border w-full border-[#DDDDDD] rounded-md flex flex-col"
                        >
                            <FaWhatsapp size="4rem" color="#006600" className="w-fit m-auto" />
                        </Link>
                    </div>
                </div>
                <p className="text-lg text-center">
                    With your specific requirements, we can accurately determine the category of janitorial jobs you are prepared to handle!
                </p>
            </div>
        </div>
    );
};

export default ContactInfo;
