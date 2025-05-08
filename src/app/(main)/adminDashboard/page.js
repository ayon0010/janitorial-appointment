export const dynamic = "force-dynamic";
import DashboardCard from '@/Shared/DashBoardCard';
import ProfileCard from '@/Shared/ProfileCard';
import Profiled from '@/Shared/Profiled';
import React from 'react';
import FaStatus from '@/icons/FaStatus';
import FaUpload from '@/icons/FaUpload';
import { FaAddressBook } from "@react-icons/all-files/fa/FaAddressBook";
import { FaBlog } from "@react-icons/all-files/fa/FaBlog";
import { FaDollarSign } from "@react-icons/all-files/fa/FaDollarSign";
import { FaFacebookMessenger } from "@react-icons/all-files/fa/FaFacebookMessenger";
import { FaMailBulk } from "@react-icons/all-files/fa/FaMailBulk";
import FaUserData from '@/icons/FaUserData';
import { PageSection } from '../about/page';
import image from '@/../public/assets/New Project (1).jpg';
const page = () => {
    return (
        <div>
            <PageSection
                title={<>Admin Dashboard</>}
                text={<>Control users, settings, and system data.</>}
                image={image}
            />
            <div className='dashboard max-w-[1150px] mx-auto 2xl:gap-14 xl:gap-10 gap-5 2xl:px-0 xl:px-0 px-8 py-20'>
                <div className=''>
                    <Profiled />
                    <div className='2xl:my-32 xl:my-24 my-10'>
                        <div className='w-full grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 2xl:gap-6 xl:gap-6 gap-5'>
                            <DashboardCard
                                Icon={FaFacebookMessenger}
                                href={'/adminDashboard/messages'}
                                title="Messages"
                                description="Your Messages"
                                iconMargin="4px"
                            />
                            <DashboardCard
                                Icon={FaAddressBook}
                                href={'/adminDashboard/appointments'}
                                title="Appointments"
                                description="See the people waiting for you"
                                iconMargin="4px"
                            />
                            <DashboardCard
                                href={'/adminDashboard/premiumUsers'}
                                Icon={FaDollarSign}
                                title="Premium Users"
                                description="See the payment status "
                                iconMargin="4px"
                            />

                            <DashboardCard
                                href={'/adminDashboard/allUser'}
                                Icon={FaUserData}
                                title="Users details"
                                description="See the user details"
                                iconMargin="4px"
                            />
                            <DashboardCard
                                href={'/adminDashboard/allLeads'}
                                Icon={FaStatus}
                                title="Lead Verification Status"
                                description="See verified leads"
                                iconMargin="4px"
                            />
                            <DashboardCard
                                Icon={FaUpload}
                                href={'/adminDashboard/leadUpload'}
                                title="Upload your leads"
                                description="Sell your potential leads through us"
                                iconMargin="4px"
                            />
                            <DashboardCard
                                Icon={FaMailBulk}
                                href={'/adminDashboard/subcribedEmail'}
                                title="Subscribed Email"
                                description="Sell all the subscribers"
                                iconMargin="4px"
                            />


                            <DashboardCard
                                Icon={FaBlog}
                                href={'https://clean-jobs.sanity.studio/'}
                                title="Blogs"
                                description="Write Blogs"
                                iconMargin="4px"
                            />
                        </div>
                    </div>
                </div>
                <ProfileCard adminDashboard={true} />
            </div>
        </div>

    );
};

export default page;