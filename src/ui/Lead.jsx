import getLeads from "@/lib/getLeadById";
import Image from "next/image";
import Link from "next/link";
import image from '@/../public/assets/exclusive-commercial-cleaning-leads.webp'
import { capitalizeFirstLetter } from "@/app/(main)/search/[...leads]/page";
import LeadAppointment from "@/Shared/LeadAppointment";
import SectionTitles from "./SectionTitles";
import { gilroy } from "@/app/(main)/layout";
import ContactInfo from "./ContactInfo";
import singleContent from "@/lib/singleContent";
import { PortableText } from "next-sanity";
import { urlFor } from "@/lib/sanity";
import { PageSection } from "@/app/(main)/about/page";

export const AppointmentButton = ({ leadName, image }) => {
    return (
        <div
            style={{ backgroundImage: "url('/assets/pattern-big.jpg')" }}
            className="w-full h-[260px] bg-cover bg-center flex justify-center items-center"
        >
            <div className="max-w-[1150px] mx-auto">
                <h3 className="text-white text-center text-2xl font-medium">Book an Appointment</h3>
                <LeadAppointment />
            </div>
        </div>
    )
}

const LeadPage = async ({ Lead, params }) => {
    const stateContent = await singleContent('USA');
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
            <PageSection image={image} title={`Get ${leadName} Leads`} text={<>High-Quality, {leadName} Leads Only</>} />
            <div className="max-w-[1150px] mx-auto">
                <div className="ml-8 mt-10 bg-[#F8FAFB] w-fit px-4 py-2 rounded-[50px]">
                    <h1 className={`${gilroy.className}`}>Home  {'>'}  {capitalizeFirstLetter(Lead)}</h1>
                </div>
                <div className="2xl:py-20 xl:py-20 py-10">
                    <SectionTitles heading={'Choose your states'} />
                    {/* <SearchState data={data} leads={Lead} /> */}
                    <ul className="w-full flex flex-wrap mx-auto mt-10 items-center justify-center gap-y-6">
                        {selectedStates?.map((state) => (
                            <li key={state} className={`bg-state flex-1 max-w-[160px] min-w-[148px] text-white text-xl text-center py-2 border hover:underline transition-all duration-100 border-white ${gilroy.className} font-normal`}>
                                <Link href={`${state}`}>
                                    {state}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-20 mx-auto prose prose-2xl font-normal my-10">
                        <PortableText value={stateContent?.content} components={{
                            types: {
                                imageGroup: ({ value }) => {
                                    const { images, layout } = value;
                                    if (!images || images.length === 0) return null;
                                    const imageUrls = images.map(image => urlFor(image.asset).url());

                                    return (
                                        <div className={`${layout === 'grid' ? 'grid 2xl:grid-cols-3 xl:grid-cols-3 gap-4 items-stretch' : 'block w-fit mx-auto'
                                            }`}>
                                            {
                                                imageUrls?.map((url, i) => {
                                                    return (
                                                        <Image
                                                            key={i}
                                                            src={url}
                                                            alt={`Cleaning Map of ${states}`}
                                                            width={950}
                                                            height={665}
                                                            className={`rounded-lg shadow-lg ${layout === 'grid' ? 'w-full h-auto' : ' w-[500px] h-[300px]'
                                                                } `}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }
                            },
                            block: {
                                normal: ({ children }) => <p className="text-base text-gray-800 leading-relaxed mb-4">{children}</p>,
                                h1: ({ children }) => <h1 className="text-gray-900 2xl:text-6xl xl:text-5xl text-3xl text-center font-normal mb-6">{children}</h1>,
                                h2: ({ children }) => <h2 className="2xl:text-4xl xl:text-3xl text-2xl text-center text-gray-700 mb-5">{children}</h2>,
                                h3: ({ children }) => <h3 className="2xl:text-3xl xl:text-2xl text-xl text-gray-600 mb-4">{children}</h3>,
                            },
                        }} />
                    </div>
                </div>
            </div>
            <div className="mb-20">
                {/* <Discover /> */}
                <AppointmentButton />
            </div>
            <div className="mb-10 max-w-[1150px] mx-auto">
                <SectionTitles heading={'Contact Us'} />
                <ContactInfo />
            </div>
        </div>
    );
};

export default LeadPage;
