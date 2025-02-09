import AppointmentForm from '@/ui/AppointmentForm';
import React from 'react';
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
            <AppointmentForm />
        </div>
    );
};

export default page;