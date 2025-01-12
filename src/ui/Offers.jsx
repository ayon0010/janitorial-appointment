'use client'
import Image from 'next/image';
import React from 'react';
import img1 from '../../public/assets/acquisition-_1_.svg'
import img2 from '../../public/assets/magnet.svg'
import img3 from '../../public/assets/appointment.svg'
import img4 from '../../public/assets/operator.png'
import img5 from '../../public/assets/png-transparent-web-design-icon-web-application-iphone-progressive-web-apps-icon-design-mobile-phones-line-symbol.png'
import img6 from '../../public/assets/pngtree-seo-setting-icon-png-image_328700.jpg'

const Offers = () => {
    return (
        <div>
            <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-10 mt-10' data-aos="fade-up">
                <div className="card card-compact py-4 bg-[#EEEEEE] shadow-xl">
                    <figure className='px-10 pt-4'>
                        <Image src={img1} className='2xl:w-[150px] xl:w-[120px] w-[90px] h-auto mx-auto' alt='sales' />
                    </figure>
                    <div className="card-body mt-6">
                        <h2 className="card-title w-fit mx-auto text-center 2xl:text-3xl xl:text-2xl  text-black font-bold poppins opacity-90">Optimized Sales Conversions</h2>
                        <p className='text-center inter text-black 2xl:text-sm xl:text-xs opacity-90 px-4'>Achieve sales conversion rates of 20% to 30%, customized based on your service needs and target areas, maximizing revenue opportunities.</p>
                    </div>
                </div>
                <div className="card card-compact bg-[#EEEEEE] shadow-xl pt-4 pb-10">
                    <figure className='px-10 pt-4'>
                        <Image src={img2} className='2xl:w-[150px] xl:w-[120px] w-[90px] h-auto mx-auto' alt='sales' />
                    </figure>
                    <div className="card-body mt-6">
                        <h2 className="card-title w-fit mx-auto text-center 2xl:text-3xl xl:text-2xl  text-black font-bold poppins opacity-90">Verified, High-Quality Leads</h2>
                        <p className='text-center inter text-black 2xl:text-sm xl:text-xs opacity-90 px-4'>Our thorough 3-step verification process ensures reliable, premium-quality leads tailored to your specifications across the U.S. and Canada.</p>
                    </div>
                </div>
                <div className="card card-compact bg-[#EEEEEE] shadow-xl py-4">
                    <figure className='px-10 pt-4'>
                        <Image src={img3} className='2xl:w-[150px] xl:w-[120px] w-[90px] h-auto mx-auto' alt='sales' />
                    </figure>
                    <div className="card-body mt-6">
                        <h2 className="card-title w-fit mx-auto text-center 2xl:text-3xl xl:text-2xl  text-black font-bold poppins opacity-90">Exclusive Appointment Setting for Janitorial Services</h2>
                        <p className='text-center inter text-black 2xl:text-sm xl:text-xs opacity-90 px-4'>We specialize in securing appointments for cleaning services, connecting you directly with key contacts through targeted telemarketing and social outreach.</p>
                    </div>
                </div>
            </div>
            <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-10 mt-10' data-aos="fade-up">
                <div className="card card-compact bg-[#EEEEEE] shadow-xl py-4">
                    <figure className='px-10 pt-4'>
                        <Image src={img4} className='2xl:w-[150px] xl:w-[120px] w-[90px] h-auto mx-auto' alt='sales' />
                    </figure>
                    <div className="card-body mt-6">
                        <h2 className="card-title w-fit mx-auto text-center 2xl:text-3xl xl:text-2xl text-black font-bold poppins opacity-90">
                            Expert Telemarketing for Janitorial Services
                        </h2>
                        <p className="text-center inter text-black 2xl:text-sm xl:text-xs opacity-90 px-4">
                            Our dedicated telemarketing team connects you directly with decision-makers, securing high-quality leads and appointments to grow your cleaning business effectively.
                        </p>
                    </div>
                </div>
                <div className="card card-compact bg-[#EEEEEE] shadow-xl py-4">
                    <figure className='px-10 pt-4'>
                        <Image src={img5} className='2xl:w-[150px] xl:w-[120px] w-[90px] h-auto mx-auto bg-[#EEEEEE]' alt='sales' />
                    </figure>
                    <div className="card-body mt-6">
                        <h2 className="card-title w-fit mx-auto text-center 2xl:text-3xl xl:text-2xl text-black font-bold poppins opacity-90">
                            Professional Web Solutions and Support Services
                        </h2>
                        <p className="text-center inter text-black 2xl:text-sm xl:text-xs opacity-90 px-4">
                            We specialize in creating and maintaining websites tailored to your business needs, while offering reliable technical support to ensure seamless operations and growth.
                        </p>
                    </div>
                </div>
                <div className="card card-compact bg-[#EEEEEE] shadow-xl py-4">
                    <figure className='px-10 pt-4'>
                        <Image src={img6} className='2xl:w-[150px] xl:w-[120px] w-[90px] h-auto mx-auto bg-[#EEEEEE]' alt='sales' />
                    </figure>
                    <div className="card-body mt-10">
                        <h2 className="card-title w-fit mx-auto text-center 2xl:text-3xl xl:text-2xl text-black font-bold poppins opacity-90">
                            Professional Web Solutions and Support Services
                        </h2>
                        <p className="text-center inter text-black 2xl:text-sm xl:text-xs opacity-90 px-4">
                            We specialize in creating and maintaining websites tailored to your business needs, while offering reliable technical support to ensure seamless operations and growth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;