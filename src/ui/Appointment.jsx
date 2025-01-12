
import React from 'react';import SectionTitles from './SectionTitles';
import image from '../../public/assets/sebastian-herrmann-O2o1hzDA7iE-unsplash.jpg'

const Appointment = () => {
    return (
        <div>
            <div className="2xl:px-10 xl:px-10 px-6">
                <h5 className="text-secondary nunito text-center font-light text-xl mt-20 mb-4">Schedule Your Appointment.</h5>
                <SectionTitles
                    heading={"Book an Appointment to Discuss Your Desired Leads and Requirements"}
                    subHeading={
                        "Schedule a time with us to share your business needs, preferred service areas, and other specifics, so we can connect you with the most relevant leads and opportunities."
                    }
                />
            </div>
            <div className='parallax h-[400px] mt-20'>
                
            </div>
        </div>
    );
};

export default Appointment;