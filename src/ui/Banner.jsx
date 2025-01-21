'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import 'swiper/css/pagination';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import ButtonTertiary from './ButtonTertiary';
import ButtonPrimary from './ButtonPrimary';
import Image from 'next/image';
import image1 from '@/../public/assets/1904c9e7a4e1664e4e229a2f3c915594.png'
import image1mbl from '@/../public/assets/1904c9e7a4e1664e4e229a2f3c9155941.png'
import image2 from '@/../public/assets/sebastian-herrmann-O2o1hzDA7iE-unsplash.jpg'
import image2mbl from '@/../public/assets/sebastian-herrmann-O2o1hzDA7iE-unsplash1.jpg'
import image3 from '@/../public/assets/c4fff5f6b137dec9009b9e4e2c05c82f.png'

const Banner = () => {
    return (
        <div className='relative z-30 pt-20'>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 7000,
                }}
                pagination={{ clickable: true }}
                loop={true}
                effect="fade"
                style={{
                    '--swiper-pagination-color': '#16a34a',
                }}
                modules={[Navigation, Autoplay, Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="flex flex-col relative min-h-[600px] max-h-[800px] h-auto">
                        <div className='absolute inset-0 z-20 h-full'>
                            <Image src={image1} alt='' fill className='2xl:object-cover xl:object-cover object-center 2xl:block xl:block hidden' />
                            <Image src={image1mbl} alt='' className='object-cover min-h-[600px] object-center 2xl:hidden xl:hidden block' />
                        </div>
                        <div className='absolute inset-0 banner-1 z-30 2xl:block xl:block hidden'></div>
                        <div className='absolute inset-0 bg-black opacity-55 z-30 2xl:hidden xl:hidden block'></div>
                        <div className='my-auto 2xl:pl-40 xl:pl-40 2xl:w-1/2 xl:w-1/2 w-full pl-10 2xl:pr-0 xl:pr-0 pr-10 z-40' data-aos="fade-right">
                            <h1 className='text-white font-bold 2xl:text-6xl xl:text-5xl text-3xl'>Unlock Cleaning <br /><span className='text-green-600 banner-text'>Opportunities</span> with Ease</h1>
                            <p className='my-6 inter 2xl:text-xl xl:text-xl text-sm font-semibold text-white opacity-80'>Connect with key decision-makers and receive valuable opportunities delivered straight to your inbox—automatically!</p>
                            <div className='flex items-center gap-6'>
                                <div>
                                    <Link href={'/register'}>
                                        <ButtonPrimary label={'Sign Up'} />
                                    </Link>
                                </div>
                                <p className='text-white opacity-80 inter font-bold 2xl:text-base xl:text-base text-xs'>No Credit Card Required</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col relative min-h-[600px] max-h-[800px] h-auto">
                        <div className='absolute inset-0 z-20 h-full'>
                            <Image src={image2} alt='' fill className='2xl:block xl:block hidden' />
                            <Image src={image2mbl} fill alt='' className='min-h-[600px] object-center 2xl:hidden xl:hidden block' />
                        </div>
                        <div className='absolute inset-0 bg-black opacity-55 z-30'></div>
                        <div className='my-auto 2xl:pl-40 xl:pl-40 2xl:w-1/2 xl:w-1/2 w-full pl-10 2xl:pr-0 xl:pr-0 pr-10 z-40'>
                            <h1 className='text-white font-bold 2xl:text-6xl xl:text-5xl text-3xl'>Schedule <span className='text-green-600 banner-text'>Appointments</span> with Confidence</h1>
                            <p className='my-6 inter 2xl:text-xl xl:text-xl text-sm font-semibold text-white opacity-80'>Book appointments now to get the desired leads that match your business needs and unlock new opportunities effortlessly!</p>
                            <div className='flex items-center gap-6'>
                                <Link href={'/book-an-appointment'}>
                                    <ButtonTertiary label={'Book an Appointment'} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-2 flex flex-col h-full">
                        <div className='absolute inset-0 bg-black opacity-50'></div>
                        <div className='m-auto z-30 2xl:w-[80%] xl:w-[80%] w-[90%]'>
                            <h1 className='text-white text-center font-bold poppins 2xl:text-6xl xl:text-5xl text-3xl'>Find <span className=''>Qualified, Exclusive Janitorial Leads</span> <br className='2xl:block xl:block hidden' /> available in Your Area!</h1>
                            <p className='2xl:my-6 xl:my-6 my-6 inter 2xl:text-xl xl:text-xl text-sm font-semibold text-white opacity-80 text-center'>A reliable and stress-free appointment-setting service designed for janitors.<br />
                                Partner with the trusted provider of quality janitorial job opportunities.</p>
                            <Link className="flex justify-center items-center" href={'/search/exclusive-leads'}>
                                <ButtonTertiary label={'Explore Now'} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-3 flex flex-col min-h-[600px] max-h-[800px] h-auto">
                        <div className='absolute inset-0 z-20 h-full'>
                            <Image src={image3} className='' alt='' fill />
                        </div>
                        <div className='absolute inset-0 bg-black opacity-50 z-30'></div>

                        <div className='m-auto z-40 w-3/4'>
                            <h1 className='text-white text-center font-bold poppins 2xl:text-6xl xl:text-5xl text-3xl banner-text'>EXPANDING YOUR BUSINESS IS OUR GOAL!</h1>
                            <p className='my-6 inter 2xl:text-xl xl:text-xl text-sm font-semibold text-white opacity-70 text-center'>The Most Dependable Company for Cleaning & Janitorial Leads!
                                <br />
                                Our expert services, including
                                <span className="ml-2"> {/* Add margin left for spacing */}
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
                                        className='2xl:text-xl xl:text-xl text-sm' // Change to your desired color (e.g., a shade of orange)
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
                <SwiperSlide>
                    <div className="banner-6 flex flex-col h-full">
                        <div className='2xl:w-1/2 xl:w-1/2 w-full my-auto ml-auto z-30 pr-10 2xl:px-6 xl:px-6 px-10'>
                            <h2 className='2xl:text-6xl xl:text-5xl text-3xl font-semibold 2xl:banner-text xl:banner-text'>
                                Elevate Your Brand, Expert <span className='text-green-600'>Digital Marketing, Web & App Solutions</span>
                            </h2>
                            <p className='inter 2xl:text-xl xl:text-xl text-sm font-semibold my-6'>
                                We deliver premier IT solutions designed specifically for cleaning companies, empowering your business to achieve greater efficiency and growth.</p>
                            <Link href={'/contact'}>
                                <ButtonTertiary label={'Contact Us'} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;