'use client'
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animation from '../../public/assets/Animation - 1737470603251c.json';
import animation2 from '../../public/assets/Animation - 1737470167441contact.json';
import fb from '@/../public/assets/Frame (8).svg';
import insta from '@/../public/assets/Frame (10).svg';
import linked from '@/../public/assets/Frame (11).svg';
import twitt from '@/../public/assets/Frame (12).svg';
import youtube from '@/../public/assets/Frame (13).svg';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const ContactInfo = () => {
    const animationRef = useRef(null);
    const animation2Ref = useRef(null);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        // Initialize Lottie animations for both refs
        if (isClient) {
            const animationInstance = lottie.loadAnimation({
                container: animationRef.current,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                animationData: animation,
            });

            const animation2Instance = lottie.loadAnimation({
                container: animation2Ref.current,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                animationData: animation2,
                speed: 0.4,
            });

            // Cleanup Lottie animations on component unmount
            return () => {
                animationInstance.destroy();
                animation2Instance.destroy();
            };
        }
    }, []);

    if (!isClient) {
        return null; // Render nothing on the server-side
    }

    const message = encodeURIComponent('Hello! I would like to inquire about your commercial cleaning leads.');

    return (
        <div className='px-10 grid 2xl:grid-cols-2 xl:grid-cols-2 items-center'>
            <div className='w-full h-auto'>
                {/* Lottie animation for the first animation */}
                <div ref={animationRef} className='w-full h-full' />
            </div>
            <div className='space-y-8'>
                {/* Lottie animation for the second animation */}
                <div ref={animation2Ref} className='h-[200px] w-auto' />
                <p className='text-3xl font-semibold text-center'>+8801726108060</p>
                <div className=''>
                    <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-2 2xl:gap-8 xl:gap-8 gap-6'>
                        <Link href="https://www.facebook.com/commercialcleaningleads/" target="_blank">
                            <Image className='cursor-pointer' src={fb} alt="Facebook" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/janitorial-appointments-commercial-cleaning-leads/about/?viewAsMember=true" target="_blank">
                            <Image className='cursor-pointer' src={linked} alt="LinkedIn" />
                        </Link>
                        <Link href="https://x.com/cleaningleads12" target="_blank">
                            <Image className='cursor-pointer' src={twitt} alt="Twitter" />
                        </Link>
                        <Link href={`https://wa.me/${+8801726108060}?text=${message}`}
                            target="_blank"
                            rel="noopener noreferrer" className='border w-full border-[#DDDDDD] rounded-md flex flex-col' target="_blank">
                            <FaWhatsapp size={'4rem'} color='#006600' className='w-fit m-auto' />
                        </Link>
                    </div>
                </div>
                <p className='text-lg text-center'>With your specific requirements, we can accurately determine the category of janitorial jobs you are prepared to handle!</p>
            </div>
        </div>
    );
};

export default ContactInfo;
