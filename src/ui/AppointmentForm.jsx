'use client'
import React, { useEffect, useState } from 'react';
import animation from '../../public/assets/Animation - 1737791900666appointment.json'
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import { motion } from 'framer-motion';
import SectionTitles from './SectionTitles';
import Image from 'next/image';
import fb from '@/../public/assets/Frame (8).svg'
import insta from '@/../public/assets/Frame (10).svg'
import linked from '@/../public/assets/Frame (11).svg'
import twitt from '@/../public/assets/Frame (12).svg'
import youtube from '@/../public/assets/Frame (13).svg'
import InputField from '@/Shared/InputField';
import { useForm } from 'react-hook-form';
import FormButton from '@/Shared/FormButton';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const AppointmentForm = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const email = localStorage.getItem('email');
            const name = localStorage.getItem('name');
            setEmail(email);
            setName(name);
        }
    }, [])

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
        })
    }, [email, name])



    const onSubmit = async (data) => {
        console.log(data);

        try {
            // Show loading alert
            Swal.fire({
                title: 'Updating user...',
                text: 'Please wait while we update your information.',
                icon: 'info',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading(); // Display loading spinner
                },
            });
            console.log(data);
            // On success, show success alert
            if (typeof window !== 'undefined') {
                const email = localStorage.removeItem('email');
                const name = localStorage.removeItem('name');
            }
            Swal.fire({
                title: 'Success!',
                text: 'Your information has been successfully updated.',
                icon: 'success',
                timer: 1200, // Auto close after 3 seconds
                showConfirmButton: false,
            });
            // refetch();

        } catch (error) {
            // On error, show error alert
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong while updating your information.',
                icon: 'error',
                confirmButtonText: 'Try Again',
            });
            console.error('Error updating user info:', error);
        }
    };
    return (
        <div className='pt-[100px] px-10 pb-20'>
            <div>
                <div
                    className='flex 2xl:flex-row xl:flex-row flex-col items-center justify-center'
                >
                    <motion.div
                        initial={{ x: 150 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 1, // Animation duration in seconds
                            ease: [0.42, 0, 0.58, 1], // Makes the animation smooth
                            delay: 0.5, // Adds a delay of 0.5 seconds before the animation starts
                        }}
                        className='w-fit'>
                        <Lottie animationData={animation} loop={false} className={`h-auto 2xl:w-[300px] xl:w-[300px] bg-transparent`} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, }}
                        animate={{ opacity: 1, scale: 1, }}
                        transition={{
                            duration: 0.4, // Animation duration in seconds
                            ease: [0.42, 0, 0.58, 1], // Makes the animation smooth
                            delay: 1.5, // Adds a delay of 1 second before the animation starts
                        }}
                    >
                        <h1 className='text-green-500 2xl:text-4xl xl:text-4xl text-2xl font-semibold 2xl:text-start xl:text-start text-center'>Book an appointment</h1>
                        <p className='text-gray-700 text-sm font-semibold mt-4 2xl:text-start xl:text-start text-center'>Get in touch with our team to schedule <br /> a convenient time for your cleaning service.<br /> We're here to help!</p>
                        {/* <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-3 justify-center mt-4 gap-2 w-[200px]'>
                            <Image className='cursor-pointer' src={fb} alt='fb' />
                            <Image className='cursor-pointer' src={insta} alt='insta' />
                            <Image className='cursor-pointer' src={linked} alt='linked' />
                            <Image className='cursor-pointer' src={twitt} alt='twitt' />
                            <Image className='cursor-pointer' src={youtube} alt='youtube' />
                        </div> */}
                    </motion.div>
                </div>
                {/* <div className='w-3/4 mx-auto space-y-6'>
                    <SectionTitles heading={'Find Us on Social Media'} subHeading={"If you want to contact us in person or simply want to know more about us, here's some helpful information about us"} />

                </div> */}
                <form className='mt-10 grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-10 max-w-[1440px] mx-auto' onSubmit={handleSubmit(onSubmit)}>
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
                    {/* <div className='2xl:block xl:block hidden'></div> */}
                    <div className="2xl:w-3/4 xl:w-3/4 w-full">
                        <FormButton label={'Book an appointment'} />
                    </div>
                </form>
            </div>
        </div >
    );
};

export default AppointmentForm;