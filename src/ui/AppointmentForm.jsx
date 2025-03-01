'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // This is kept as it was in your code
import InputField from '@/Shared/InputField';
import { useForm } from 'react-hook-form';
import FormButton from '@/Shared/FormButton';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import image1 from '../../public/assets/linkedin-sales-solutions-1A8yP_5msac-unsplash_result_result.webp'
import image1mbl from '../../public/assets/behnam-norouzi-kmikcu4jrsY-unsplash_result_result_result (1).webp'
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import SelectField from '@/Shared/SelectField';

const ContactAnimation = dynamic(() => import('./ContactAnimation'), {
    ssr: false // Set to false if the component relies on browser-specific APIs
});


const AppointmentForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [it, setIt] = useState(false);
    console.log(it);


    useEffect(() => {
        if (typeof window !== 'undefined' && document) {
            const email = localStorage.getItem('email');
            const name = localStorage.getItem('name');
            setEmail(email);
            setName(name);
        }
    }, []);

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        defaultValues: {
            companyName: name,
            email: email,
        }
    });

    const selectedType = watch("type");

    useEffect(() => {
        console.log(selectedType);
        if (selectedType === 'It') {
            setIt(true);
        }
        else {
            setIt(false);
        }
    }, [selectedType])

    useEffect(() => {
        const it = localStorage.getItem('it');
        reset({
            companyName: name,
            email: email,
            type: it,
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

            await axiosPublic.post('/appointment', { ...data, it })

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


    return (
        <div className="">
            <div className='relative h-[600px] flex flex-col'>
                <div className='absolute inset-0 bg-black opacity-30 z-30'></div>
                <div className="absolute inset-0 z-20 h-full">
                    <Image
                        src={image1}
                        width={1263}
                        height={600}
                        priority
                        className='object-cover h-full 2xl:block xl:block hidden'
                        alt='Book a janitorial appointment with top commercial cleaning leads'
                        sizes='(min-width:786px) 100vw'
                    />
                    <Image src={image1mbl} height={600} width={430} priority sizes='(max-width: 768px) 100vw' className='object-cover h-full 2xl:hidden xl:hidden block' alt='Get high-quality janitorial leads for commercial cleaning appointments' />
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
            <div className='pt-20 px-10 pb-20'>
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
                        <ContactAnimation />
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
                    <SelectField
                        type={['Janitorial Appointment', 'It']} register={register} label={'Choose type'} name={'type'} errors={errors} placeholder={'--'} />
                    {
                        it ?
                            <>
                                <InputField
                                    label={'Service Type *'}
                                    placeholder={'Enter the service type (e.g., Web Development, App Development, SEO)'}
                                    type={'text'}
                                    register={register}
                                    name={'serviceType'}
                                    errors={errors}
                                />
                                <InputField
                                    label={'Expected Completion Date *'}
                                    placeholder={'Enter expected project completion date'}
                                    type={'date'}
                                    register={register}
                                    name={'completionDate'}
                                    errors={errors}
                                />

                                <InputField
                                    label={'Project Budget *'}
                                    placeholder={'Enter your budget for the service'}
                                    type={'number'}
                                    register={register}
                                    name={'budget'}
                                    errors={errors}
                                />
                                <InputField
                                    label={'Existing Website URL'}
                                    placeholder={'Enter your current website URL (if applicable)'}
                                    type={'url'}
                                    register={register}
                                    name={'websiteUrl'}
                                    errors={errors}
                                    noRequired={true}
                                />
                                <InputField
                                    label={'Mobile App Features'}
                                    placeholder={'Describe features you want in the app'}
                                    type={'text'}
                                    register={register}
                                    name={'mobileAppFeatures'}
                                    errors={errors}
                                    noRequired={true}
                                />
                                <InputField
                                    label={'Competitor Websites'}
                                    placeholder={'Enter competitor websites you like or want to compete with'}
                                    type={'url'}
                                    register={register}
                                    name={'competitorWebsites'}
                                    errors={errors}
                                    noRequired={true}
                                />
                                <InputField
                                    label={'Additional Notes'}
                                    placeholder={'Any additional details or requirements?'}
                                    type={'text'}
                                    register={register}
                                    name={'additionalNotes'}
                                    errors={errors}
                                    noRequired={true}
                                />

                            </>
                            :
                            <>
                                <InputField
                                    label={'Service Area *'}
                                    placeholder={'Enter your service area'}
                                    type={'text'}
                                    register={register}
                                    name={'area'}
                                    errors={errors}
                                />
                                <InputField
                                    label={'Monthly minimum cleaning frequency.*'}
                                    placeholder={'frequency'}
                                    type={'text'}
                                    register={register}
                                    name={'frequency'}
                                    errors={errors}
                                />
                                <InputField
                                    label={'Charge for 1000 Square Feet? *'}
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
                                    label={'Is there any DNC list not to call?*'}
                                    placeholder={'DNC list'}
                                    type={'text'}
                                    register={register}
                                    name={'dnc'}
                                    errors={errors}
                                />
                            </>
                    }
                    <div></div>
                    <div className="2xl:w-3/4 xl:w-3/4 w-full">
                        <FormButton label={'Book an appointment'} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;
