'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { gilroy } from './gilroy';

const LeadAppointment = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();
    const onSubmit = async (data) => {
        // Show loading alert
        Swal.fire({
            title: 'Processing...',
            text: 'Please wait while we set up your appointment.',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            // Simulate an API request with a delay
            if (typeof window !== 'undefined') {
                setTimeout(() => {
                    Swal.close();
                    router.push('/book-an-appointment');
                }, 1000)
            }

        } catch (error) {
            console.log(error);
            // Show error alert in case of failure
            Swal.fire({
                icon: 'error',
                title: 'Something Went Wrong!',
                text: 'Please try again later.',
                confirmButtonColor: '#FF6F61',
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='bg-transparent backdrop-blur-[100px] p-6 rounded-xl  2xl:block xl:block hidden'
        >
            <div className="flex items-center justify-between 2xl:flex-row xl:flex-row flex-col">
                {/* Name Field */}
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Your Name"
                        {...register('name', { required: 'Name is required' })}
                        className="input rounded-tl-lg rounded-bl-lg rounded-none focus:outline-none focus:ring-0 border-none text-2xl w-full bg-white text-black h-[100px]"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>

                {/* Email Field */}
                <div className="w-full border-l-2 border-r-2 border-[#EEEEEE]">
                    <input
                        type="email"
                        placeholder="Your Email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value:
                                    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Enter a valid email address',
                            },
                        })}
                        className="input rounded-none focus:outline-none focus:ring-0 text-2xl w-full text-black h-[100px]"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Service Selection */}
                <div className="w-full">
                    <label htmlFor="service" className="sr-only">Choose a Service</label>
                    <select
                        aria-label="Choose a Service"
                        {...register('service', { required: 'Please select a service' })}
                        className={`select rounded-tr-lg rounded-br-lg rounded-tl-none rounded-bl-none lead text-2xl focus:outline-none focus:ring-0 border-none w-full py-3 text-black h-[100px] ${gilroy.className}`}
                    >
                        <option value="" disabled defaultValue={'Choose Type'} selected>
                            Choose Type
                        </option>
                        <option value='Janitorial Appointment'>Janitorial Leads</option>
                        <option value='It'>IT Support</option>
                    </select>
                    {errors.service && (
                        <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                    )}
                </div>
                <button type='submit' className={`ml-2 h-[100px] hover:bg-primary text-xl btn border-none hover:text-white text-white border border-black bg-orange ${gilroy.className}`}>
                    Get Appointment
                </button>
            </div>
        </form>
    );
};

export default LeadAppointment;
