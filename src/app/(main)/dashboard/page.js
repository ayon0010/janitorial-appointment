export const dynamic = "force-dynamic";
import { FaList } from "@react-icons/all-files/fa/FaList";
import FaContract from '@/icons/FaContract';
import FaShoppingCart from '@/icons/FaShoppingCart';
import FaHand from '@/icons/FaHand';
import Profiled from '@/Shared/Profiled';
import DashboardCard from '@/Shared/DashBoardCard';
import ProfileCard from '@/Shared/ProfileCard';
import FaNetwork from '@/icons/FaNetwork';
import image from '@/../public/assets/New Project (1).jpg';
import { PageSection } from "../about/page";

const Page = () => {
    return (
        <div>
            <PageSection
                title={<>Dashboard</>}
                text={<>Manage leads and track your progress.</>}
                image={image}
            />
            <div className='dashboard max-w-[1150px] mx-auto 2xl:gap-14 xl:gap-10 gap-5 2xl:px-0 xl:px-0 px-8 py-20'>
                <div className=''>
                    <Profiled />
                    <div className='2xl:my-32 xl:my-24 my-10'>
                        <div className='w-full grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 2xl:gap-6 xl:gap-6 gap-5'>

                            <DashboardCard
                                href={'/dashboard/myLeads'}
                                Icon={FaList}
                                title="My Lead List"
                                description="See all the lead you saved"
                                iconMargin="4px"
                            />

                            <div className='2xl:col-span-2 xl:col-span-2 2xl:row-start-1 xl:row-start-1 row-start-1'>
                                <DashboardCard
                                    href={'/search'}
                                    Icon={FaNetwork}
                                    title="Find Exclusive Lead in Your Area"
                                    description="See all the leads around you & grab opportunities"
                                    iconMargin="4px"
                                />
                            </div>

                            <DashboardCard
                                href={''}
                                Icon={FaContract}
                                title="Post for Sub-Contractor"
                                description="Submit if you have a lead list"
                                iconMargin="4px"
                            />

                            <DashboardCard
                                href={'/dashboard/purchasedLeads'}
                                Icon={FaShoppingCart}
                                title="Purchase Leads"
                                description="See the lead list you own"
                                iconMargin="4px"
                            />

                            <DashboardCard
                                href={'/other-services'}
                                Icon={FaHand}
                                title="Explore Our Other Services"
                                description="We offer all kind of IT solutions, check us out"
                                iconMargin="1px"
                            />

                        </div>
                    </div>
                </div>
                <ProfileCard userDashboard={true} />
            </div>
        </div>
    );
};

export default Page;