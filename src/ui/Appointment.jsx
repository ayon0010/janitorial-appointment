
import React from 'react';
import SectionTitles from './SectionTitles';
import Link from 'next/link';
import ButtonTertiary from './ButtonTertiary';

const Appointment = () => {
    return (
        <div>
            <div className="2xl:px-10 xl:px-10 px-6 mb-20">
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
            </div>
        </div>
    );
};

export default Appointment;