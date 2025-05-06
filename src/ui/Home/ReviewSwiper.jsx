'use client'
import Image from 'next/image';
import cs1 from '@/../public/assets/testimonials_01.jpg'
import cs2 from '@/../public/assets/testimonial_03.jpg'
import { FaQuoteLeft } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';


const ReviewSwiper = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const handleSlideChange = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideToLoop(index);
        }
    };

    const BigSlide = ({ review, name, title, image }) => {
        return (
            <div className='p-10 bg-white w-full h-[420px] 2xl:block xl:block hidden'>
                <div className='w-[490px] flex items-start justify-between gap-10'>
                    <Image src={image} alt='Customer One' loading='lazy' height={340} className='w-[240px] h-[340px]' width={240} />
                    <div className='h-[300px] flex flex-col justify-between'>
                        <div className='w-fit ml-auto'>
                            <FaQuoteLeft color='red' size={'2.5rem'} />
                        </div>
                        <p className="text-base text-[#777] font-light leading-7 service-text">{review}</p>
                        <div className='space-y-2'>
                            <h3 className='text-2xl font-semibold text-black'>{name}</h3>
                            <p className="text-base text-[#777] font-light leading-7 service-text">{title}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    const SmallSlide = ({ review, name, title, image }) => {
        return (
            <div className='p-10 bg-white w-full h-[420px] 2xl:block xl:block hidden'>
                <div className='w-[190px]'>
                    <div className='h-[300px] flex flex-col justify-between w-full'>
                        <div className='w-fit ml-auto'>
                            <FaQuoteLeft color='red' size={'2.5rem'} />
                        </div>
                        <p className="text-sm text-[#777] font-light leading-7 service-text">{review}</p>
                        <div className='flex gap-2 items-center'>
                            <Image src={image} width={50} height={50} alt='customer 2' className='w-[50px] h-[50px] rounded-full' />
                            <div className='space-y-2'>
                                <h3 className='text-xl font-semibold text-black'>{name}</h3>
                                <p className="text-sm text-[#777] font-light leading-7 service-text">{title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const MobileSlide = ({ name, title, image, review }) => {
        return (
            <div className='bg-white w-[400px] space-y-6 p-10 mx-auto 2xl:hidden xl:hidden block h-full'>
                <div className='w-fit ml-auto'>
                    <FaQuoteLeft color='red' size={'3.5rem'} />
                </div>
                <p className="text-sm text-[#777] font-light leading-7 service-text">{review}</p>
                <div className='flex gap-2 items-center'>
                    <Image src={image} width={50} height={50} alt="customer 3" className='w-[50px] h-[50px] rounded-full' />
                    <div className='space-y-2'>
                        <h3 className='text-xl font-semibold text-black'>{name}</h3>
                        <p className="text-sm text-[#777] font-light leading-7 service-text">{title}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='max-w-[1150px] mx-auto relative'>
            <Swiper
                ref={swiperRef}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                initialSlide={2}
                autoplay={{ delay: 3000 }}
                spaceBetween={20}
                slidesPerView={'auto'}
                breakpoints={{
                    0: {
                        slidesPerView: 1, // 👈 1 slide on all screen sizes below 640px
                    },
                    640: {
                        slidesPerView: 'auto', // 👈 auto on medium screens and up
                    }
                }}
                modules={[Pagination]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mySwiper review-items">

                <SwiperSlide className="2xl:!w-[570px] xl:!w-[570px] !w-full !h-[290px]">
                    <BigSlide image={cs1} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                    <MobileSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                </SwiperSlide>
                <SwiperSlide className="2xl:!w-[270px] xl:!w-[270px] !w-full !h-[290px]">
                    <SmallSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                    <MobileSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                </SwiperSlide>
                <SwiperSlide className="2xl:!w-[270px] xl:!w-[270px] !w-full !h-[290px]">
                    <SmallSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                    <MobileSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                </SwiperSlide>
                <SwiperSlide className="2xl:!w-[570px] xl:!w-[570px] !w-full !h-[290px]">
                    <BigSlide image={cs1} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                    <MobileSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                </SwiperSlide>
                <SwiperSlide className="2xl:!w-[270px] xl:!w-[270px] !w-full !h-[290px]">
                    <SmallSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                    <MobileSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                </SwiperSlide>
                <SwiperSlide className="2xl:!w-[270px] xl:!w-[270px] !w-full !h-[290px]">
                    <SmallSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                    <MobileSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                </SwiperSlide>
                <SwiperSlide className="2xl:!w-[570px] xl:!w-[570px] !w-full !h-[290px]">
                    <BigSlide image={cs1} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                    <MobileSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                </SwiperSlide>
                <SwiperSlide className="2xl:!w-[270px] xl:!w-[270px] !w-full !h-[290px]">
                    <SmallSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                    <MobileSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                </SwiperSlide>
                <SwiperSlide className="2xl:!w-[270px] xl:!w-[270px] !w-full !h-[290px]">
                    <SmallSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                    <MobileSlide image={cs2} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                </SwiperSlide>
            </Swiper>
            <div className='absolute z-50 left-1/2 -translate-x-1/2'>
                <div className='flex flex-row 2xl:gap-4 xl:gap-4 gap-3'>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 rounded-full bg-transparent pointer-events-auto ${activeIndex === index ? 'border-red-600 border' : 'border-none'
                                } relative`}
                        >
                            <button
                                onClick={() => handleSlideChange(index)}
                                aria-label={index}
                                className={`w-2 h-2 rounded-full transition-all cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${activeIndex === index ? 'bg-red-700' : 'bg-white'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewSwiper;