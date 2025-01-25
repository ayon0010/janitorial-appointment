'use client'
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { nunito } from '@/Shared/nunito';
import { useRouter } from 'next/navigation';

const Appointment = () => {
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
                const email = localStorage.setItem('email', data.email);
                const name = localStorage.setItem('name', data.name);
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
        <div>
            <div className="appointment p-10">
                <h3
                    className={`${nunito.className} text-white font-semibold 2xl:text-4xl xl:text-4xl text-2xl`}
                >
                    Book Appointment
                </h3>
                <p
                    className={`${nunito.className} text-white font-normal 2xl:text-lg xl:text-lg text-base mt-1 text-opacity-70`}
                >
                    Set an appointment with us
                </p>
                <div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="flex items-center justify-between 2xl:flex-row xl:flex-row flex-col gap-4 my-8">
                            {/* Name Field */}
                            <div className="w-full">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    {...register('name', { required: 'Name is required' })}
                                    className="input input-bordered rounded-none w-full bg-[#645CFF] !py-3 !p-3 book-appointment text-white"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="w-full">
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
                                    className="input input-bordered rounded-none w-full bg-[#645CFF] !py-3 !p-3 book-appointment text-white"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Service Selection */}
                            <div className="w-full">
                                <select
                                    {...register('service', { required: 'Please select a service' })}
                                    className="select select-bordered rounded-none w-full bg-[#645CFF] py-3 book-appointment text-white"
                                >
                                    <option value="" disabled selected>
                                        ---
                                    </option>
                                    <option value="Janitorial Leads">Janitorial Leads</option>
                                    <option value="IT Support">IT Support</option>
                                </select>
                                {errors.service && (
                                    <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex 2xl:items-center xl:items-center items-start 2xl:flex-row xl:flex-row flex-col 2xl:justify-between xl:justify-between justify-start gap-4">
                            <p
                                className={`${nunito.className} text-white font-normal 2xl:text-lg xl:text-lg text-base mt-1 text-opacity-70`}
                            >
                                Our team will reach you at your desired time
                            </p>
                            <button type='submit' className="bg-[#20DFE3] btn border-none text-white hover:bg-[#20DFE3]">
                                Get Appointment
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Appointment;
