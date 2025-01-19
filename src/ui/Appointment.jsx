
import React from 'react';
import SectionTitles from './SectionTitles';
import Link from 'next/link';
import ButtonTertiary from './ButtonTertiary';
import { nunito } from '@/Shared/nunito';

const Appointment = () => {
    return (
        <div>
            <div className='appointment p-10'>
                <h3 className={`${nunito.className} text-white font-semibold 2xl:text-4xl xl:text-4xl text-2xl`}>Book Appointment</h3>
                <p className={`${nunito.className} text-white font-normal 2xl:text-lg xl:text-lg text-base mt-1 text-opacity-70`}>Set an appointment with us</p>
                <div>
                    <form className='flex items-center justify-between 2xl:flex-row xl:flex-row flex-col gap-4 my-8'>
                        <input type="text" placeholder="Your Name" className="input input-bordered rounded-none w-full bg-[#645CFF] !py-3 !p-3 book-appointment text-white" />
                        <input type="email" placeholder="Your Email" className="input input-bordered rounded-none w-full bg-[#645CFF] !py-3 !p-3 book-appointment text-white" />
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