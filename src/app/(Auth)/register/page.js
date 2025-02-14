import Register from '@/Shared/Register';
import React from 'react';
export const metadata = {
    title: 'Register - Janitorial Appointment',
    description: 'Create an account to access janitorial leads, janitorial appointments, and commercial cleaning leads.',
    keywords: 'janitorial leads, janitorial appointment, commercial cleaning leads',
}
const page = () => {
    return (
        <div>
            <Register />
        </div>
    );
};

export default page;