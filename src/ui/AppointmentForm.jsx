'use client';
import React, { useEffect, useState } from 'react';
import animation from '../../public/assets/Animation - 1737791900666appointment.json';
// import { motion } from 'framer-motion'; // Assuming you're using motion in the rest of the code as well
import { motion } from 'framer-motion'; // This is kept as it was in your code
import InputField from '@/Shared/InputField';
import { useForm } from 'react-hook-form';
import FormButton from '@/Shared/FormButton';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import lottie from 'lottie-web'
// Import lottie-web
import useAxiosPublic from '@/Hooks/useAxiosPublic';

const AppointmentForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined' && document) {
            const email = localStorage.getItem('email');
            const name = localStorage.getItem('name');
            setEmail(email);
            setName(name);
        }
    }, []);

    console.log(email, name);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            companyName: name,
            email: email
        }
    });

    useEffect(() => {
        reset({
            companyName: name,
            email: email
        });
    }, [email, name]);


    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data);

        try {
            Swal.fire({
                title: 'Updating user...',
                text: 'Please wait while we update your information.',
                icon: 'info',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });

            await axiosPublic.post('/appointment', data)

            if (typeof window !== 'undefined' && document) {
                const email = localStorage.removeItem('email');
                const name = localStorage.removeItem('name');
            }

            Swal.fire({
                title: 'Success!',
                text: 'Your information has been successfully updated.',
                icon: 'success',
                timer: 1200,
                showConfirmButton: false,
            });
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong while updating your information.',
                icon: 'error',
                confirmButtonText: 'Try Again',
            });
            console.error('Error updating user info:', error);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && document) {
            const animationContainer = document.getElementById('lottie-animation');
            lottie.loadAnimation({
                container: animationContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animation
            });

            // Cleanup on component unmount
            return () => {
                lottie.destroy();
            };
        }
    }, []);

    return (
        <div className="pt-[100px] px-10 pb-20">
            <div>
                <div className="flex 2xl:flex-row xl:flex-row flex-col items-center justify-center">
                    <motion.div
                        initial={{ x: 150 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 1,
                            ease: [0.42, 0, 0.58, 1],
                            delay: 0.5,
                        }}
                        className="w-fit"
                    >
                        <div id="lottie-animation" className="h-auto 2xl:w-[300px] xl:w-[300px] bg-transparent" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: [0.42, 0, 0.58, 1],
                            delay: 1.5,
                        }}
                    >
                        <h1 className="text-green-500 2xl:text-4xl xl:text-4xl text-2xl font-semibold 2xl:text-start xl:text-start text-center">
                            Book an appointment
                        </h1>
                        <p className="text-gray-700 text-sm font-semibold mt-4 2xl:text-start xl:text-start text-center">
                            Get in touch with our team to schedule <br /> a convenient time for your cleaning service.<br /> We're here to help!
                        </p>
                    </motion.div>
                </div>
                <form className="mt-10 grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-10 max-w-[1440px] mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        label={'Company Name *'}
                        placeholder={'Enter your company name'}
                        type={'text'}
                        register={register}
                        name={'companyName'}
                        errors={errors}
                    />
                    <InputField
                        label={'Email *'}
                        placeholder={'Enter your email'}
                        type={'email'}
                        register={register}
                        name={'email'}
                        errors={errors}
                    />
                    <InputField
                        label={'Contact Number *'}
                        placeholder={'Enter your contact number'}
                        type={'text'}
                        register={register}
                        name={'number'}
                        errors={errors}
                    />
                    <InputField
                        label={'Service Area *'}
                        placeholder={'Enter your service area'}
                        type={'text'}
                        register={register}
                        name={'area'}
                        errors={errors}
                    />
                    <InputField
                        label={'Your monthy minimum Frequency for cleaning.*'}
                        placeholder={'frequency'}
                        type={'text'}
                        register={register}
                        name={'frequency'}
                        errors={errors}
                    />
                    <InputField
                        label={'How much do you charge for 1000 Square Feet? *'}
                        placeholder={'charged for 1000 Square Feet'}
                        type={'text'}
                        register={register}
                        name={'rate'}
                        errors={errors}
                    />
                    <InputField
                        label={'What kind of cleaning you do?*'}
                        placeholder={'charged for 1000 Square Feet'}
                        type={'text'}
                        register={register}
                        name={'variations'}
                        errors={errors}
                    />
                    <InputField
                        label={'Is there any DNC list that you dont want us to call?*'}
                        placeholder={'DNC list'}
                        type={'text'}
                        register={register}
                        name={'dnc'}
                        errors={errors}
                    />
                    <div className="2xl:w-3/4 xl:w-3/4 w-full">
                        <FormButton label={'Book an appointment'} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;
