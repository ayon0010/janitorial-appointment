'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import img1 from '../../public/assets/martha-dominguez-de-gouveia-KF-h9HMxRKg-unsplash (1).jpg'
import img2 from '../../public/assets/kate-darmody-TDIdPmW2P9k-unsplash.jpg'
import img3 from '../../public/assets/benjamin-child-GWe0dlVD9e0-unsplash.jpg'
import img5 from '../../public/assets/gautam-arora-78Ae6N7rNvI-unsplash.jpg'
import img6 from '../../public/assets/debby-hudson-sgdyBq6kheQ-unsplash (1).jpg'
import img4 from '../../public/assets/danielle-cerullo-CQfNt66ttZM-unsplash.jpg'
import { FaBook, FaBusinessTime, FaLanguage, FaUserGraduate } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';

// import img3 from '../../public/assets/'




export default function Leads() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setActiveIndex(index);
        }
    };

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex); // Reinitialize AOS to apply animations to the new slide
    };


    const Card = ({ img, headline, text, icon }) => {
        const [hover, setHover] = useState(false);
        return (
            <div className="relative overflow-hidden" onMouseEnter={(e) => setHover(true)} onMouseLeave={() => setHover(false)}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/60 z-40 pointer-events-none" />
                <motion.div
                    className='absolute bottom-0 right-0 left-0 z-[45] bg-gradient-to-b from-black/70 via-black/60 to-black/40 pointer-events-none'
                    initial={{ top: "100%", opacity: 0 }}
                    animate={hover ? { top: "0%", opacity: 1 } : { top: "100%", opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1], // Ease out cubic for a realistic flow
                        opacity: { duration: 0.5, ease: "easeInOut" }, // Fading effect
                    }}
                    delay={0.2}
                >
                    <div className='p-6'>
                        <h3 className={`text-white text-2xl `}>{headline}</h3>
                        <p className={`text-white text-base mt-8 `}>{text}</p>
                    </div>
                </motion.div>
                <figure>
                    {/* Animated Image */}
                    <motion.div
                        className="h-[230px] w-full z-30"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "linear", type: 'spring' }}
                        delay={0.5}
                    >
                        <Image
                            src={img}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </motion.div>
                    {/* Icon */}
                    <div className={`absolute bottom-8 left-6 z-50 ${hover && 'hidden'}`}>
                        {icon}
                        <div className='mt-1'>
                            <h3 className={`text-white text-2xl`}>{headline}</h3>
                        </div>
                    </div>
                </figure>
            </div>
        )
    }

    return (

        <div className='my-20'>
            <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 gap-y-8'>
                <Card img={img1} headline={'Medical Cleaning Leads'} text={'Secure high-quality medical cleaning leads tailored to your business needs. Our service connects you with key decision-makers in healthcare facilities, ensuring reliable opportunities to grow your cleaning operations effectively.'} />
                <Card
                    img={img4}
                    headline={'Gym/Fitness Center Cleaning Leads'}
                    text={'Gain access to high-quality gym and fitness center cleaning leads. Our service connects you with gym owners and managers, providing tailored cleaning opportunities to help maintain clean and hygienic workout environments.'}
                />
                <Card
                    img={img5}
                    headline={'Daycare Cleaning Leads'}
                    text={'Expand your cleaning business with exclusive daycare cleaning leads. We connect you with trusted decision-makers in daycare centers, helping you secure long-term contracts and reliable growth opportunities.'}
                />

                <Card
                    img={img2}
                    headline={'Apartment Cleaning Leads'}
                    text={'Secure valuable apartment cleaning leads designed to grow your business. Our service connects you with property managers and landlords, providing access to high-demand cleaning opportunities in residential complexes.'}
                />
                <Card
                    img={img3}
                    headline={'General Office Cleaning Leads'}
                    text={'Unlock valuable office cleaning leads tailored to meet your business needs. Our service connects you with office managers and businesses, offering consistent opportunities to maintain clean, professional workspaces.'}
                />
                <Card
                    img={img6}
                    headline={'Church Cleaning Leads'}
                    text={'Access high-quality church cleaning leads tailored to your business needs. Our service connects you with church administrators and organizers, providing opportunities to maintain clean and welcoming places of worship.'}
                />
            </div>
        </div>
    );
}