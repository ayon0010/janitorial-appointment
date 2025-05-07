import SingleDecisionMaker from '@/ui/SingleDecisonMaker';
import React from 'react';
import { PageSection } from '../about/page';
import image3 from '@/../public/assets/New Project (1).jpg';

export const metadata = {
    title: 'Exclusive Commercial Cleaning & Janitorial Leads | Single Decision Maker Insights',
    description: 'Gain insights from a single decision-maker perspective. Access exclusive commercial cleaning leads and janitorial appointment opportunities tailored for your business.',
    keywords: 'commercial cleaning leads, janitorial leads, janitorial appointment, decision maker insights',
};

const page = () => {
    return (
        <div>
            <PageSection image={image3} text={<>Coming Soon</>} title={<>Single Decision Maker</>} />
            <div className="max-w-[1150px] mx-auto">
                <SingleDecisionMaker />
            </div>
        </div>
    );
};

export default page;