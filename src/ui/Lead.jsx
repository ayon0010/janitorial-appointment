import getLeads from "@/lib/getLeadById";
import Image from "next/image";
import Link from "next/link";
import image from '../../public/assets/exclusive-commercial-cleaning-leads.webp'
import { capitalizeFirstLetter } from "@/app/(main)/search/[...leads]/page";
import LeadAppointment from "@/Shared/LeadAppointment";
import SectionTitles from "./SectionTitles";
import { gilroy } from "@/app/(main)/layout";
import ContactInfo from "./ContactInfo";

export const AppointmentButton = ({ leadName, image }) => {
    return (
        <div>
            <Link href={'/book-an-appointment'} className="bg-black p-2 fixed z-[60] top-[80px] w-full h-[90px] 2xl:hidden xl:hidden block">
                <button className={`w-full h-full text-lg hover:bg-primary btn border-none hover:text-white text-white border border-black bg-[#14516D] font-normal rounded-md ${gilroy.className}`}>
                    Get Appointment
                </button>
            </Link>
            <div className="relative h-[350px]">
                <Image priority src={image} sizes='100vw' fill className="object-cover object-center z-30" alt={`${leadName} janitorial leads for cleaning businesses – High-quality commercial cleaning leads`} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-40">
                    <LeadAppointment />
                    <h2 className='text-2xl font-semibold 2xl:hidden xl:hidden block text-white'>Boost Your Business with <span className='text-green-600'>{leadName} Janitorial & Commercial Cleaning Leads</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

const LeadPage = async ({ Lead, params }) => {
    console.log(params);

    let data = [];
    try {
        data = await getLeads(Lead); // Ensure this is optimized for server fetching
    } catch (error) {
        console.error('Error fetching lead data:', error);
        return <div className="pt-40 pb-20 px-10">Error loading data</div>;
    }

    const filteredData = (state) => {
        return data?.filter(d => d.states === state)?.length;
    };

    const selectedStates = [...new Set(data?.map(d => d.states))]?.sort();

    const leadName = capitalizeFirstLetter(Lead.split('-')[0]);

    return (
        <div>
            <AppointmentButton image={image} leadName={leadName} />
            <div className="ml-8 mt-10 bg-[#F8FAFB] w-fit px-4 py-2 rounded-[50px]">
                <h1 className={`${gilroy.className}`}>Home  {'>'}  {capitalizeFirstLetter(Lead)}</h1>
            </div>
            <div className="2xl:py-20 xl:py-20 py-10 px-10">
                <SectionTitles heading={'Choose your states'} />
                {/* <SearchState data={data} leads={Lead} /> */}
                <ul className="2xl:w-3/4 xl:w-3/4 w-full grid 2xl:grid-cols-6 xl:grid-cols-5 grid-cols-2 mx-auto mt-10 items-center justify-center gap-y-6">
                    {selectedStates?.map((state) => (
                        <li key={state} className={`bg-state text-white text-xl text-center py-2 border hover:underline transition-all duration-100 border-white ${gilroy.className} font-normal`}>
                            <Link href={`${Lead}/${state}`}>
                                {state}
                            </Link>
                        </li>

                    ))}
                </ul>
                <div className="2xl:w-3/4 xl:w-3/4 w-full mx-auto 2xl:my-16 xl:my-16 my-10">
                    <SectionTitles heading={'Get Exclusive Commercial Cleaning leads in all over the USA'} />
                    <p className={`text-center ${gilroy.className} my-10`}>
                        Located at the heart of the industry, we specialize in commercial cleaning leads to help businesses grow. Our janitorial appointment-setting service ensures you connect with high-quality clients actively seeking cleaning services. With our expertise, you can get janitorial appointments with decision-makers who need reliable and professional cleaning solutions. Our dedicated team works around the clock to generate exclusive leads, schedule meetings, and maximize your business potential. Whether you're a startup or an established cleaning company, we provide tailored solutions to keep your pipeline full of qualified prospects.
                    </p>
                </div>
            </div>
            <div className="mb-10">
                <SectionTitles heading={'Contact Us'} />
                <ContactInfo />
            </div>
        </div>
    );
};

export default LeadPage;
