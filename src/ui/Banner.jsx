'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import ButtonTertiary from './ButtonTertiary';
import Image from 'next/image';
import image1 from '../../public/assets/janitorial-appointments.jpg';
// import image1 from '@/../public/assets/New Project (13).jpg';
// import image1mbl from '../../public/assets/janitorial-appointments-mobile.webp';
import image2 from '@/../public/assets/book-an-janitorial-appointments.webp';
import image2mbl from '@/../public/assets/book-an-janitorial-appointments-mobile.webp';
// import image3 from '@/../public/assets/New Project (14).jpg'
import image4 from '@/../public/assets/commercial-cleaning-leads-usa.jpg'
// import image5 from '@/../public/assets/web-and-app-services.webp'
// import image5mbl from '../../public/assets/web-and-app-services-mobile.webp'
import { DynamicBanner } from './DynamicBanner';
import ClipAnimation from '@/Animations/ClipAnimation';
import { useState } from 'react';
const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
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
                    loop={false}
                    effect="slide" // Changed from "fade" to "slide" for better performance
                    style={{
                        '--swiper-pagination-color': '#16a34a',
                    }}
                    modules={[Navigation, Autoplay, Pagination]}
                    className="mySwiper"
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                    {/* 1st slider */}
                    <SwiperSlide>
                        <ClipAnimation key={activeIndex}>
                            <DynamicBanner
                                desktopImage={image1}
                                mobileImage={image1}
                                title="Unlock Cleaning"
                                highlightedText="Opportunities"
                                description="Connect with key decision-makers and receive valuable opportunities delivered straight to your inbox—automatically!"
                                buttonText="Sign Up"
                                buttonLink="/register"
                                note="No Credit Card Required"
                                isTertiaryButton={false}
                                priority={true}
                            />
                        </ClipAnimation>
                    </SwiperSlide>
                    {/* 2nd Slider */}

                    <SwiperSlide>
                        <ClipAnimation key={activeIndex}>
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
                        </ClipAnimation>
                    </SwiperSlide>

                    {/* Slider 3 */}
                    <SwiperSlide>
                        <ClipAnimation key={activeIndex}>
                            <div className="flex flex-col min-h-[600px] max-h-[800px] h-auto relative">
                                <div className='absolute inset-0 z-20 h-full'>
                                    <Image src={image4}
                                        sizes="(max-width:786px) 100vw,100vw"
                                        alt='Exclusive Commercial cleaning leads all over the usa'
                                        fill
                                        className='object-cover h-full'
                                    />
                                </div>
                                {/* <div className='absolute inset-0 bg-black opacity-50 z-30'></div> */}
                                <div className='m-auto z-30 2xl:w-[80%] xl:w-[80%] w-[90%]'>
                                    <h1 className='text-white text-center font-bold  2xl:text-6xl xl:text-5xl text-3xl'>Find <span className=''>Qualified, Exclusive Janitorial Leads</span> <br className='2xl:block xl:block hidden' /> available in Your Area!</h1>
                                    <p className='2xl:my-6 xl:my-6 my-6 inter 2xl:text-xl xl:text-xl text-sm font-semibold text-white opacity-80 text-center'>A reliable and stress-free appointment-setting service designed for janitors.<br />
                                        Partner with the trusted provider of quality janitorial job opportunities.</p>
                                    <Link className="flex justify-center items-center" href={'/search/exclusive-leads'}>
                                        <ButtonTertiary label={'Explore Now'} />
                                    </Link>
                                </div>
                            </div>
                        </ClipAnimation>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>

    );
};

export default Banner;
