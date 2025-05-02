'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import image1 from '../../public/assets/slide01.jpg';
import image2 from '../../public/assets/slide02.jpg';
import image3 from '../../public/assets/slide03.jpg';
import { useRef, useState } from 'react';
import ButtonPrimary from './ButtonPrimary';
import UpAnimation from '@/Animations/UpAnimation';

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const HeroBannerContent = ({
        heading,
        paragraph,
        buttonLabel,
        positionClasses = 'absolute 2xl:left-24 xl:left-24 2xl:-translate-x-0 xl:-translate-x-0 -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 w-full 2xl:p-0 xl:p-0 p-10',
        headingClasses = 'text-white text-5xl font-semibold 2xl:text-left xl:text-left text-center',
        paragraphClasses = 'text-white text-lg 2xl:text-left xl:text-left text-center',
    }) => {
        return (
            <div className={positionClasses}>
                <div className='space-y-8 max-w-[1440px] mx-auto'>
                    <UpAnimation delay={0.1} key={activeIndex}>
                        <h1 className={headingClasses}>
                            {heading}
                        </h1>
                    </UpAnimation>
                    <UpAnimation delay={0.3} key={activeIndex}>
                        <p className={paragraphClasses}>
                            {paragraph}
                        </p>
                    </UpAnimation>
                    <div className='w-fit 2xl:mx-0 xl:mx-0 mx-auto'>
                        <UpAnimation delay={0.5} key={activeIndex}>
                            <ButtonPrimary label={buttonLabel} />
                        </UpAnimation>
                    </div>
                </div>
            </div>
        );
    };
    const swiperRef = useRef(null);
    const handleSlideChange = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideToLoop(index);
        }
    };

    return (
        <div className='relative'>
            <Swiper
                ref={swiperRef}
                autoplay={{ delay: 3000 }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                loop={true}
                effect="fade"
                modules={[Navigation, Autoplay, Pagination, EffectFade]}
                className="mySwiper pointer-events-none"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                <SwiperSlide>
                    <div className='w-full h-[890px] relative'>
                        <Image src={image1} height={890} width={1920} className='object-cover w-full h-full' />
                        <HeroBannerContent

                            heading={<>Convert Leads With <br /> Integrated Call Center</>}
                            paragraph={<>Our Mexican debt collectors helped us handle three-times the <br />
                                amount of placements.</>}
                            buttonLabel={'Request Pricing'}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-[890px] slider'>
                        <Image src={image2} height={890} width={1920} className='object-cover w-full h-full' />
                        <HeroBannerContent

                            heading={<>Convert Leads With <br /> Integrated Call Center</>}
                            paragraph={<>Our Mexican debt collectors helped us handle three-times the <br />
                                amount of placements.</>}
                            buttonLabel={'Request Pricing'}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-[890px] slider '>
                        <Image src={image3} height={890} width={1920} className='object-cover w-full h-full' />
                        <HeroBannerContent
                            heading={<>Convert Leads With <br /> Integrated Call Center</>}
                            paragraph={<>Our Mexican debt collectors helped us handle three-times the <br />
                                amount of placements.</>}
                            buttonLabel={'Request Pricing'}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* Pagination Dots */}
            <div className='absolute top-1/2 -translate-y-1/2 z-50 pointer-events-auto left-6 xl:left-14 2xl:left-14'>
                <div className='flex flex-col gap-4'>
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className={`w-6 h-6 rounded-full bg-transparent pointer-events-auto ${activeIndex === index ? 'border-red-600 border' : 'border-none'
                                } relative`}
                        >
                            <button
                                onClick={() => handleSlideChange(index)}
                                className={`2xl:w-4 2xl:h-4 xl:w-4 xl:h-4 w-2 h-2 rounded-full transition-all cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${activeIndex === index ? 'bg-red-700' : 'bg-white'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Banner;
