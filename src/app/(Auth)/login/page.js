import Login from '@/Shared/Login';
import React from 'react';
export const metadata = {
    title: 'Login - Janitorial Appointment',
    description: 'Log in to access your account and manage janitorial leads, janitorial appointments, and commercial cleaning leads.',
    keywords: 'janitorial leads, janitorial appointment, commercial cleaning leads',
}
const page = () => {
    return (
        <div>
            <Login />
        </div>
    );
};

export default page;