import AppointmentForm from '@/ui/AppointmentForm';
import Image from 'next/image';
import React from 'react';
import image1 from '@/../public/assets/get-janitorial-appointments.webp'
import image1mbl from '@/../public/assets/get-janitorial-appointments-mobile.webp'

export const metadata = {
    title: 'Book a Janitorial Appointment | Commercial Cleaning Leads',
    description:
        'Book a janitorial appointment today and gain access to high-quality commercial cleaning leads. Streamline your business growth with verified janitorial leads and secure more cleaning contracts.',
    keywords: ['janitorial appointment', 'janitorial leads', 'commercial cleaning leads', 'book janitorial services', 'cleaning service appointments', 'commercial cleaning contracts', 'lead generation for janitorial services'],
    openGraph: {
        title: 'Book a Janitorial Appointment | Commercial Cleaning Leads',
        description:
            'Book an appointment to access verified janitorial and commercial cleaning leads for your business. Boost your cleaning service opportunities today.',
        url: 'https://www.janitorialappointment.com/book-appointment',
        type: 'website',
        images: [
            {
                url: 'https://www.janitorialappointment.com/path-to-image.jpg',
                alt: 'Janitorial Appointment Booking',
            },
        ],
    },
    twitter: {
        title: 'Book a Janitorial Appointment | Commercial Cleaning Leads',
        description:
            'Book an appointment for top-quality janitorial and commercial cleaning leads. Grow your cleaning service business today.',
        card: 'summary_large_image',
        images: ['https://www.janitorialappointment.com/path-to-image.jpg'],
    },
};

const page = () => {
    return (
        <div className='bg-white'>
            <div className='relative h-[600px] flex flex-col'>
                <div className='absolute inset-0 bg-black opacity-30 z-30'></div>
                <div className="absolute inset-0 z-20 h-full">
                    <Image
                        src={image1}
                        width={1263}
                        height={600}
                        priority
                        className='object-cover h-full w-full 2xl:block xl:block hidden'
                        alt='Book a janitorial appointment with top commercial cleaning leads'
                        sizes='(min-width:787px) 100vw'
                    />
                    <Image
                        src={image1mbl}
                        height={600}
                        width={430}
                        priority sizes='(max-width: 768px) 430px'
                        className='object-cover h-full w-full 2xl:hidden xl:hidden block'
                        alt='Get high-quality janitorial leads for commercial cleaning appointments'
                    />
                </div>
                <div className='my-auto 2xl:pl-40 xl:pl-40 2xl:w-1/2 xl:w-1/2 w-full pl-10 2xl:pr-0 xl:pr-0 pr-10 z-40'>
                    <h2 className='2xl:text-6xl xl:text-5xl text-3xl font-semibold 2xl:banner-text xl:banner-text text-white'>
                        Book Janitorial Appointments with <span className='text-green-600'>Top Commercial Cleaning Leads</span>
                    </h2>
                    <p className='my-6 inter 2xl:text-xl xl:text-xl text-sm font-semibold text-white opacity-80'>
                        Connect with businesses seeking janitorial services and secure valuable appointments effortlessly!
                    </p>
                </div>
            </div>
            <AppointmentForm />
        </div>
    );
};

export default page;