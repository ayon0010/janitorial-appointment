import getLeads from "@/lib/getLeadById";
import LeadsByCity from "@/ui/LeadsByCity";
import { AppointmentButton } from "./Lead";
import { gilroy } from "@/app/(main)/layout";
import image from '../../public/assets/exclusive-commercial-cleaning-leads-1.webp'
import SectionTitles from "./SectionTitles";
import ContactInfo from "./ContactInfo";
import Link from "next/link";
import singleContent from "@/lib/singleContent";
import { PortableText } from "next-sanity";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";

function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}

const States = async ({ States }) => {
    const [leads, states] = States;
    const decodeState = decodeURIComponent(states);
    const data = await getLeads(leads, states);
    const availableStates = await getLeads(leads);
    const selectedStates = [...new Set(availableStates?.map(d => d.states))]?.sort();
    const stateContent = await singleContent(decodeState.toLowerCase());

    return (
        <>
            <AppointmentButton image={image} />
            <div className="ml-8 mt-10 bg-[#F8FAFB] w-fit px-4 py-2 rounded-[50px]">
                <h1 className={`${gilroy.className}`}>Home  {'>'}  {capitalizeFirstLetter(leads)}  {'>'}  {decodeState}</h1>
            </div>
            <div className="py-20 px-6">
                <div className="2xl:w-3/4 xl:w-3/4 w-full mx-auto mb-20">
                    <SectionTitles heading={'Exclusive commercial leads available in these states'} />
                    <ul className="w-full flex flex-nowrap mx-auto mt-10 items-center justify-center gap-y-6">
                        {selectedStates?.map((state) => (
                            <li key={state} className={`${decodeState !== state ? 'bg-state text-white' : 'text-deep-blue py-4 bg-gray-1'} flex-1 min-w-[148px] text-xl text-center py-2 border hover:underline transition-all duration-100 border-white ${gilroy.className} font-normal`}>
                                <Link href={`/search/${leads}/${state}`}>
                                    {state}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="flex 2xl:flex-row xl:flex-row flex-col items-center gap-4 justify-center">
                        <h2 className={`text-2xl inter font-medium text-center ${gilroy.className}`}>
                            Available {capitalizeFirstLetter(leads)} in {decodeState}
                        </h2>
                        <p className="text-[#6941C6] inter text-sm font-medium py-[3px] px-[10px] bg-[#F9F5FF] rounded-[18px]">
                            {data?.length} leads
                        </p>
                    </div>
                    <p className="text-[#667085] inter font-normal 2xl:text-base xl:text-base text-sm text-center mt-2">
                        Opportunites can range from city/state, construcion clean ups, airbnb cleanings, sub contracts, and more. The process of providing a quote varies for each opportunity, and contact information is available for reaching out to the respective contacts in every opportunity
                    </p>
                </div>
                {/* Table */}
                <LeadsByCity data={data} states={states} />
                {/*  */}
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
                            h1: ({ children }) => <h1 className="text-gray-900 text-center 2xl:text-6xl xl:text-5xl text-3xl font-normal mb-6">{children}</h1>,
                            h2: ({ children }) => <h2 className="2xl:text-4xl xl:text-3xl text-2xl text-gray-700 mb-5 text-center">{children}</h2>,
                            h3: ({ children }) => <h3 className="2xl:text-3xl xl:text-2xl text-xl text-gray-600 mb-4">{children}</h3>,
                        },
                    }} />
                </div>
            </div>
            <div className="">
                <SectionTitles heading={'Contact Us'} />
                <ContactInfo />
            </div>
        </>
    );
};

export default States;