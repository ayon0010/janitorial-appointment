'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import ButtonTertiary from './ButtonTertiary';
import ButtonPrimary from './ButtonPrimary';
import Image from 'next/image';
import image1 from '@/../public/assets/janitorial-appointments.webp';
import image1mbl from '../../public/assets/janitorial-appointments-mobile.webp';
import image2 from '@/../public/assets/book-an-janitorial-appointments.webp';
import image2mbl from '@/../public/assets/book-an-janitorial-appointments-mobile.webp';
import image3 from '@/../public/assets/telemarketing-for-janitorial-campaign.webp'
import image4 from '@/../public/assets/commercial-cleaning-leads-usa.webp'
import image5 from '@/../public/assets/web-and-app-services.webp'
import image5mbl from '../../public/assets/web-and-app-services-mobile.webp'
import { useEffect, useState } from 'react';

export const DynamicBanner = ({
    desktopImage,
    mobileImage,
    title,
    highlightedText,
    description,
    buttonText,
    buttonLink,
    note,
    isTertiaryButton,
    cover,
    priority
}) => {
    const [isMobile, setIsMobile] = useState(null);
    useEffect(() => {
        // Check screen width on mount & window resize
        const handleResize = () => setIsMobile(window.innerWidth < 786);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    if (isMobile === null) return null;
    return (
        <div className="flex flex-col relative min-h-[600px] max-h-[800px] h-auto w-full">
            {/* Background Images */}
            <div className="absolute inset-0 z-20 h-full">
                <Image
                    src={isMobile ? mobileImage : desktopImage}
                    alt="Mobile janitorial appointments"
                    fill
                    objectFit="cover"
                    className="h-full w-full"
                    priority={priority}
                    sizes="(max-width: 786px) 350px,(max-width: 1260px) 800px, 1920px"
                />
            </div>

            {/* Overlays */}
            <div className="absolute inset-0 bg-black opacity-40 z-30"></div>

            {/* Content Section */}
            <div className="my-auto 2xl:pl-40 xl:pl-40 2xl:w-1/2 xl:w-1/2 w-full pl-10 2xl:pr-0 xl:pr-0 pr-10 z-40">
                <h1 className="text-white font-bold 2xl:text-6xl xl:text-5xl text-3xl">
                    {title} <span className="text-green-600 banner-text">{highlightedText}</span>
                </h1>
                <p className="my-6 2xl:text-xl xl:text-xl text-sm font-semibold text-white opacity-80">
                    {description}
                </p>
                <div className="flex items-center gap-6">
                    <Link href={`${buttonLink ? buttonLink : ''}`}>
                        {isTertiaryButton ? (
                            <ButtonTertiary label={buttonText} />
                        ) : (
                            <ButtonPrimary label={buttonText} />
                        )}
                    </Link>
                    {note && (
                        <p className="text-white opacity-8 font-bold 2xl:text-base xl:text-base text-xs">
                            {note}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};


const Banner = () => {
    return (
        <>
            <div className='relative z-30'>
                <Swiper
                    navigation={true}
                    autoplay={{
                        delay: 7000,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                    }}
                    loop={true}
                    effect="slide" // Changed from "fade" to "slide" for better performance
                    style={{
                        '--swiper-pagination-color': '#16a34a',
                    }}
                    modules={[Navigation, Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {/* 1st slider */}
                    <SwiperSlide>
                        <DynamicBanner
                            desktopImage={image1}
                            mobileImage={image1mbl}
                            title="Unlock Cleaning"
                            highlightedText="Opportunities"
                            description="Connect with key decision-makers and receive valuable opportunities delivered straight to your inbox—automatically!"
                            buttonText="Sign Up"
                            buttonLink="/register"
                            note="No Credit Card Required"
                            isTertiaryButton={false}
                            priority={true}
                        />
                    </SwiperSlide>
                    {/* 2nd Slider */}
                    <SwiperSlide>
                        <DynamicBanner
                            desktopImage={image2}
                            mobileImage={image2mbl}
                            title="Schedule"
                            highlightedText="Appointments"
                            description="Book appointments now to get the desired leads that match your business needs and unlock new opportunities effortlessly!"
                            buttonText="Book an Appointment"
                            buttonLink="/book-an-appointment"
                            isTertiaryButton={true}
                            priority={false}
                        />
                    </SwiperSlide>
                    {/* Slider 3 */}
                    <SwiperSlide>
                        <div className="flex flex-col min-h-[600px] max-h-[800px] h-auto relative">
                            <div className='absolute inset-0 z-20 h-full'>
                                <Image src={image4}
                                    sizes="(max-width:786px) 100vw,100vw"
                                    alt='Exclusive Commercial cleaning leads all over the usa'
                                    fill
                                    className='object-cover h-full'
                                />
                            </div>
                            <div className='absolute inset-0 bg-black opacity-50 z-30'></div>
                            <div className='m-auto z-30 2xl:w-[80%] xl:w-[80%] w-[90%]'>
                                <h1 className='text-white text-center font-bold  2xl:text-6xl xl:text-5xl text-3xl'>Find <span className=''>Qualified, Exclusive Janitorial Leads</span> <br className='2xl:block xl:block hidden' /> available in Your Area!</h1>
                                <p className='2xl:my-6 xl:my-6 my-6 inter 2xl:text-xl xl:text-xl text-sm font-semibold text-white opacity-80 text-center'>A reliable and stress-free appointment-setting service designed for janitors.<br />
                                    Partner with the trusted provider of quality janitorial job opportunities.</p>
                                <Link className="flex justify-center items-center" href={'/search/exclusive-leads'}>
                                    <ButtonTertiary label={'Explore Now'} />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slider 4 */}
                    <SwiperSlide>
                        <div className="flex flex-col min-h-[600px] max-h-[800px] h-auto">
                            <div className='absolute inset-0 z-20 h-full'>
                                <Image
                                    src={image3}
                                    alt="Telemarketing services for janitorial appointments and commercial cleaning leads"
                                    fill
                                    sizes="(max-width:786px) 100vw,100vw"
                                    className='h-full'
                                />
                            </div>
                            <div className='absolute inset-0 bg-black opacity-50 z-30'></div>
                            <div className='m-auto z-40 w-3/4'>
                                <h1 className='text-white text-center font-bold  2xl:text-6xl xl:text-5xl text-3xl banner-text'>EXPANDING YOUR BUSINESS IS OUR GOAL!</h1>
                                <p className='my-6 inter 2xl:text-xl xl:text-xl text-sm font-semibold text-white opacity-70 text-center'>The Most Dependable Company for Cleaning & Janitorial Leads!
                                    <br />
                                    Our expert services, including
                                    <span className="ml-2">
                                        <TypeAnimation
                                            preRenderFirstString={true}
                                            sequence={[
                                                500,
                                                ' Janitorial Appointments',
                                                1000,
                                                ' Cold Calling Service',
                                                1000,
                                                ' Cleaning Websites',
                                                1000,
                                                ' SEO Services',
                                                500,
                                            ]}
                                            speed={40}
                                            className='2xl:text-xl xl:text-xl text-sm'
                                            repeat={Infinity}
                                        />
                                    </span>
                                </p>
                                <div className='flex items-center justify-center gap-6'>
                                    <Link className='flex items-center gap-2' href={'/contact'}>
                                        <ButtonTertiary label={'Contact Us'} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slider 5 */}
                    <SwiperSlide>
                        <DynamicBanner
                            desktopImage={image5}
                            mobileImage={image5mbl}
                            title="Elevate Your Brand, Expert "
                            highlightedText="Digital Marketing, Web & App Solutions"
                            description="Connect with key decision-makers and receive valuable opportunities delivered straight to your inbox—automatically!"
                            buttonText="Sign Up"
                            buttonLink="/register"
                            note="No Credit Card Required"
                            isTertiaryButton={false}
                            cover={true}
                            priority={false}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>

    );
};

export default Banner;
