import getLeads from "@/lib/getLeadById";
import LeadsByCity from "@/ui/LeadsByCity";
import { AppointmentButton } from "./Lead";
import { gilroy } from "@/app/(main)/layout";
import image from '../../public/assets/exclusive-commercial-cleaning-leads-1.webp'
import SectionTitles from "./SectionTitles";
import ContactInfo from "./ContactInfo";

function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}

const States = async ({ States }) => {

    const [leads, states] = States;
    const decodeState = decodeURIComponent(states);
    const data = await getLeads(leads, states);

    return (
        <>
            <AppointmentButton image={image} />
            <div className="ml-8 mt-10 bg-[#F8FAFB] w-fit px-4 py-2 rounded-[50px]">
                <h1 className={`${gilroy.className}`}>Home  {'>'}  {capitalizeFirstLetter(leads)}  {'>'}  {capitalizeFirstLetter(states)}</h1>
            </div>
            <div className="py-20 px-6">
                {/* <SectionTitles heading={'Choose Cities'} /> */}
                <div>
                    <div className="flex 2xl:flex-row xl:flex-row flex-col items-center gap-4 justify-center">
                        <h4 className={`text-2xl inter font-medium text-center ${gilroy.className}`}>
                            Available {capitalizeFirstLetter(leads)} in {decodeState}
                        </h4>
                        <p className="text-[#6941C6] inter text-sm font-medium py-[3px] px-[10px] bg-[#F9F5FF] rounded-[18px]">
                            {data?.length} leads
                        </p>
                    </div>
                    <p className="text-[#667085] inter font-normal 2xl:text-base xl:text-base text-sm text-center mt-2">
                        Opportunites can range from city/state, construcion clean ups, airbnb cleanings, sub contracts, and more. The process of providing a quote varies for each opportunity, and contact information is available for reaching out to the respective contacts in every opportunity
                    </p>
                </div>
                <LeadsByCity data={data} states={states} />
                <div className="2xl:w-3/4 xl:w-3/4 w-full mx-auto my-20">
                    <SectionTitles heading={`Get Exclusive Commercial Cleaning leads in ${decodeState}`} />
                    <p className={`text-center ${gilroy.className} my-10`}>
                        Located at the heart of the industry, we specialize in providing commercial cleaning leads in {decodeState} to help businesses grow. Our janitorial appointment-setting service connects you with high-quality clients actively seeking cleaning services across {decodeState}. We generate exclusive commercial cleaning leads by targeting decision-makers who need reliable cleaning solutions. Whether you're a startup or an established cleaning company, our dedicated team works around the clock to deliver qualified janitorial appointments in {decodeState}, helping you maximize your business potential and keep your pipeline full of prospects.
                    </p>
                </div>
            </div>
            <div className="mb-10">
                <SectionTitles heading={'Contact Us'} />
                <ContactInfo />
            </div>
        </>
    );
};

export default States;