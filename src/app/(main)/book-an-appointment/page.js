import AppointmentForm from '@/ui/AppointmentForm';
import React from 'react';
import image1 from '@/../public/assets/appointment.jpg'
import { PageSection } from '../about/page';
import ButtonTertiary from '@/ui/ButtonTertiary';
import { Faq } from '../contact/page';

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

const Discover = () => {
    return (
        <div
            style={{ backgroundImage: "url('/assets/pattern-big.jpg')" }}
            className="w-full h-[210px] bg-cover bg-center flex justify-center items-center"
        >
            <div>
                <div className='2xl:w-[1150px] xl:w-[1150px] w-full 2xl:p-0 xl:p-0 p-10 m-auto flex 2xl:flex-row xl:flex-row flex-col items-center 2xl:justify-between xl:justify-between justify-center h-fit gap-6'>
                    <h2 className='text-white 2xl:text-3xl xl:text-3xl text-2xl 2xl:text-left xl:text-left text-center  font-medium'>
                        Ensure Your Business <br />
                        Continuity & Service Levels
                    </h2>
                    <ButtonTertiary label={'Discover More'} />
                </div>
            </div>
        </div>
    )
}

const page = () => {
    return (
        <div className='bg-white'>
            <PageSection image={image1} text={<>Schedule Your Appointment Today</>} title={<>Book a Janitorial Appointment</>} />
            <div className='max-w-[1150px] mx-auto'>
                <AppointmentForm />
            </div>
            <div className='my-20'>
                <Discover />
            </div>
            <div className='2xl:px-0 xl:px-0 px-10'>
                <Faq />
            </div>
        </div>
    );
};

export default page;