
import getDateDifference from "@/js/calculateDate";
import Bookmarks from "@/ui/Bookmarks";
import getLeads from "@/lib/getLeadById";
import DotClient from "./DotClient";
import FireClient from "./FireClient";
import { gilroy } from '@/Shared/gilroy';
import Stripe from "./Stripe";
import { PageSection } from "@/app/(main)/about/page";
import image from '@/../public/assets/exclusive-commercial-cleaning-leads-1.webp'

function isDateInPast(dateStr) {
    const today = new Date();
    const inputDate = new Date(dateStr);

    const todayStr = today.toISOString().split('T')[0];
    const inputDateStr = inputDate.toISOString().split('T')[0];

    return inputDateStr < todayStr;
}



const SingleLead = async ({ Lead }) => {
    const [leads, states, id] = Lead;
    const data = await getLeads(leads, states, id);
    const appointmentDate = data?.date;
    const isDisabled = isDateInPast(appointmentDate);
    console.log(isDisabled);
    

    return (
        <div>
            <PageSection image={image} title={`Get ${leads} Leads in ${states}`} text={<>High-Quality, {leads} Leads in {states}</>} />
            <div className={`pt-20 pb-20 px-10 bg-white ${gilroy.className} max-w-[1150px] mx-auto`}>
                <div>
                    {
                        data?.sold ?
                            <div className="flex items-center bg-red-100 rounded-[20px] py-[3px] px-4 w-fit mx-auto">
                                <p className="text-red-600 inter text-sm font-medium">Sold</p>
                            </div>
                            :
                            <div className="flex items-center justify-center gap-4 w-fit mx-auto">
                                <div className="flex items-center bg-[#ECFDF3] rounded-[20px] py-[3px] pl-[10px] pr-[20px] w-fit mx-auto">
                                    <DotClient />
                                    <p className="text-[#027A48] inter text-sm font-medium">Available</p>
                                </div>
                                <Bookmarks id={data?._id} />
                            </div>
                    }
                    <div className="flex justify-center items-end">
                        <h3 className={`2xl:text-7xl xl:text-5xl text-3xl text-center mt-6 ${gilroy.className}`}>
                            {data?.scope} <span className={`2xl:text-3xl xl:text-2xl text-xl text-secondary font-semibold ${gilroy.className}`}>-{data?.frequency}</span>
                        </h3>
                        <FireClient />
                    </div>
                    <p className="text-center text-[#585860] font-medium text-2xl mt-4">{getDateDifference(data?.uploadDate)}</p>
                    <div className="mt-10 grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-10">
                        <DetailCard title="Location" content={`${data?.city}, ${data?.states}`} />
                        <DetailCard title="Type" content={data?.type} />
                        <DetailCard title="Scope" content={data?.scope} />
                        <DetailCard title="Cleaning" content="Outsourced" />
                        <DetailCard title="Size" content={`Total: ${data?.area} sq/ft`} />
                        <DetailCard title="Frequency" content={data?.frequency} />
                        <DetailCard title="Note" content={data?.additionalDetails} />
                        <DetailCard title="Posted" content={getDateDifference(data?.uploadDate)} />
                    </div>
                    {data?.sold ? (
                        <SoldMessage />
                    ) : (
                        <Stripe isDisabled={isDisabled} leads={leads} appointmentDate={data?.date} product_Id={id} prize={data?.prize} />
                    )}
                </div>
            </div>
        </div>
    );
};

const DetailCard = ({ title, content }) => (
    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
        <h4 className="text-[#246532] poppins text-xs  px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">{title}</h4>
        <p className="text-sm font-medium text-center mt-4">{content}</p>
    </div>
);

const SoldMessage = () => (
    <div className="w-1/2 mx-auto mt-10">
        <h3 className="poppins text-6xl font-semibold text-center">Oops! You missed</h3>
        <p className="poppins text-xl font-medium text-center mt-5">Looks like you missed this one. Get an Unlimited subscription and get instant notifications when leads are posted.</p>
    </div>
);



export default SingleLead;