
import React from 'react';
import SectionTitles from './SectionTitles';
import Link from 'next/link';
import ButtonTertiary from './ButtonTertiary';
import { nunito } from '@/Shared/nunito';

const Appointment = () => {
    return (
        <div>
            {/* <div className="2xl:px-10 xl:px-10 px-6 mb-20">
                <h5 className="text-secondary nunito text-center font-light text-xl mt-20 mb-4">Schedule Your Appointment.</h5>
                <SectionTitles
                    heading={"Book an Appointment to Discuss Your Desired Leads and Requirements"}
                    subHeading={
                        "Schedule a time with us to share your business needs, preferred service areas, and other specifics, so we can connect you with the most relevant leads and opportunities."
                    }
                />
            </div>
            <div className='parallax h-[400px] relative flex flex-col'>
                <div className="absolute inset-0 z-30 bg-black bg-opacity-40"></div>
                <div className="w-3/4 m-auto bg-transparent z-40 h-fit p-10 space-y-6">
                    <h1 className='text-center text-white text-3xl font-semibold'>Schedule Appointment</h1>
                    <p className='text-center text-lg text-white'>Express your needs to us and boost your business</p>
                    <div className='w-fit mx-auto'>
                        <Link href={'/book-an-appointment'}>
                            <ButtonTertiary label={'Book an Appointment'} />
                        </Link>
                    </div>
                </div>
            </div> */}
            <div className='appointment p-10'>
                <h3 className={`${nunito.className} text-white font-semibold 2xl:text-4xl xl:text-4xl text-2xl`}>Book Appointment</h3>
                <p className={`${nunito.className} text-white font-normal 2xl:text-lg xl:text-lg text-base mt-1 text-opacity-70`}>Set an appointment with us</p>
                <div>
                    <form className='flex items-center justify-between 2xl:flex-row xl:flex-row flex-col gap-4 my-8'>
                        <input type="text" placeholder="Your Name" className="input input-bordered rounded-none w-full bg-[#645CFF] !py-3 !p-3 book-appointment" />
                        <input type="email" placeholder="Your Email" className="input input-bordered rounded-none w-full bg-[#645CFF] !py-3 !p-3 book-appointment" />
                        <select className="select select-bordered rounded-none w-full bg-[#645CFF] py-3 book-appointment text-white">
                            <option disabled selected value="" className="text-white">---</option>
                            <option>Janitorial Leads</option>
                            <option>IT Support</option>
                        </select>
                    </form>
                </div>
                <div className='flex 2xl:items-center xl:items-center items-start 2xl:flex-row xl:flex-row flex-col 2xl:justify-between xl:justify-between justify-start gap-4'>
                    <p className={`${nunito.className} text-white font-normal 2xl:text-lg xl:text-lg text-base mt-1 text-opacity-70`}>Our team will reach you at your desired time</p>
                    <Link href={'/book-an-appointment'}>
                        <button className='bg-[#20DFE3] btn border-none text-white hover:bg-[#20DFE3]'>
                            Get Appointment
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Appointment;