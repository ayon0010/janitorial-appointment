import DecisionMaker from '@/ui/DecisionMaker';
import React from 'react';
import image3 from '@/../public/assets/slide03.jpg';
import { PageSection } from '../about/page';
export const metadata = {
    title: 'Find Commercial Cleaning & Janitorial Leads | Janitorial Appointment Services',
    description: 'Explore high-quality commercial cleaning leads and exclusive janitorial leads. Partner with us for stress-free janitorial appointment-setting services to grow your business.',
    keywords: 'commercial cleaning leads, janitorial leads, janitorial appointment, cleaning business growth',
};
const page = () => {
    return (
        <div>
            <PageSection image={image3} text={<>Coming Soon</>} title={<>Decision Maker</>} />
            <div className="max-w-[1150px] mx-auto">
                <DecisionMaker />
            </div>
        </div>
    );
};

export default page;