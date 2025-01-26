'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import img1 from '../../public/assets/martha-dominguez-de-gouveia-KF-h9HMxRKg-unsplash (1)_result_result.webp';
import img2 from '../../public/assets/kate-darmody-TDIdPmW2P9k-unsplash_result_result_result.webp'
import img3 from '../../public/assets/benjamin-child-GWe0dlVD9e0-unsplash_result_result_result.webp'
import img5 from '../../public/assets/gautam-arora-78Ae6N7rNvI-unsplash_result_result.webp'
import img6 from '../../public/assets/debby-hudson-sgdyBq6kheQ-unsplash (1)_result_result_result.webp'
import img4 from '../../public/assets/danielle-cerullo-CQfNt66ttZM-unsplash_result_result_result.webp'

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


    const Card = ({ img, headline, text, icon, alt }) => {
        return (
            <div
                className="relative overflow-hidden group"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-40 pointer-events-none" />

                {/* Content that appears on hover */}
                <div
                    className="absolute bottom-0 right-0 left-0 top-0 z-[45] bg-gradient-to-b from-black/70 via-black/60 to-black/40 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-out pointer-events-none"
                >
                    <div className="p-6">
                        <h3 className="text-white text-xl xl:text-2xl">{headline}</h3>
                        <p className="text-white text-xs xl:text-base mt-8">{text}</p>
                    </div>
                </div>

                <figure>
                    {/* Image with hover effect */}
                    <div
                        className="h-[230px] w-full z-30 transform transition-transform duration-500 ease-out group-hover:scale-110"
                    >
                        <Image
                            src={img}
                            alt={alt}
                            className="h-full w-full object-cover"
                            width={4032}
                            height={3024}
                            loading='lazy'
                        />

                    </div>

                    {/* Icon and headline */}
                    <div className="absolute bottom-8 left-6 z-50 group-hover:hidden">
                        {icon}
                        <div className="mt-1">
                            <h3 className="text-white text-2xl">{headline}</h3>
                        </div>
                    </div>
                </figure>
            </div>
        );
    };


    return (

        <div className='my-20'>
            <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 gap-y-8'>
                <Card img={img1} headline={'Medical Cleaning Leads'} text={'Secure high-quality medical cleaning leads tailored to your business needs. Our service connects you with key decision-makers in healthcare facilities, ensuring reliable opportunities to grow your cleaning operations effectively.'}
                    alt="Medical cleaning leads for healthcare facilities and janitorial services"
                />
                <Card
                    img={img4}
                    headline={'Gym/Fitness Center Cleaning Leads'}
                    text={'Gain access to high-quality gym and fitness center cleaning leads. Our service connects you with gym owners and managers, providing tailored cleaning opportunities to help maintain clean and hygienic workout environments.'}
                    alt="Gym and fitness center cleaning leads for janitorial services"
                />
                <Card
                    img={img5}
                    headline={'Daycare Cleaning Leads'}
                    alt="Daycare cleaning leads for janitorial services and facility maintenance"
                    text={'Expand your cleaning business with exclusive daycare cleaning leads. We connect you with trusted decision-makers in daycare centers, helping you secure long-term contracts and reliable growth opportunities.'}
                />

                <Card
                    img={img2}
                    headline={'Apartment Cleaning Leads'}
                    alt="Apartment cleaning leads for janitorial services and residential cleaning"
                    text={'Secure valuable apartment cleaning leads designed to grow your business. Our service connects you with property managers and landlords, providing access to high-demand cleaning opportunities in residential complexes.'}
                />
                <Card
                    img={img3}
                    headline={'General Office Cleaning Leads'}
                    alt="General office cleaning leads for professional janitorial services and facility upkeep"
                    text={'Unlock valuable office cleaning leads tailored to meet your business needs. Our service connects you with office managers and businesses, offering consistent opportunities to maintain clean, professional workspaces.'}
                />
                <Card
                    img={img6}
                    headline={'Church Cleaning Leads'}
                    alt="Church cleaning leads for janitorial services and religious facility maintenance" 
                    text={'Access high-quality church cleaning leads tailored to your business needs. Our service connects you with church administrators and organizers, providing opportunities to maintain clean and welcoming places of worship.'}
                />
            </div>
        </div>
    );
}