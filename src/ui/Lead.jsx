import getLeads from "@/lib/getLeadById";
import SearchState from "@/Shared/SearchState";
import Image from "next/image";
import Link from "next/link";
import image from '../../public/assets/cytonn-photography-n95VMLxqM2I-unsplash_result_result.webp'
import { capitalizeFirstLetter } from "@/app/(main)/search/[...leads]/page";

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
            <div className="relative h-[500px] flex flex-col">
                <Image src={image} className="object-cover h-full absolute inset-0 z-20" alt={`${leadName} janitorial leads for cleaning businesses – High-quality commercial cleaning leads`} />
                <div className='absolute inset-0 bg-black opacity-30 z-30'></div>
                <div className='my-auto 2xl:pl-40 xl:pl-40 2xl:w-1/2 xl:w-1/2 w-full pl-10 2xl:pr-0 xl:pr-0 pr-10 z-40'>
                    <h2 className='2xl:text-6xl xl:text-5xl text-3xl font-semibold 2xl:banner-text xl:banner-text text-white'>
                        Boost Your Business with <span className='text-green-600'>{leadName} Janitorial & Commercial Cleaning Leads</span>
                    </h2>
                </div>
            </div>
            <div className="py-20 px-10">
                <SearchState data={data} leads={Lead} />
                <div className="2xl:w-3/4 xl:w-3/4 w-full mx-auto mt-10">
                    <ul>
                        {selectedStates?.map((state) => (
                            <Link key={state} href={`${Lead}/${state}`}>
                                <li className="p-3 hover:bg-[#F7F8F9] border-b-2 rounded">
                                    <div>
                                        <h3 className="text-base font-medium">{state}</h3>
                                        <p className="text-[#64748B] font-semibold text-xs mt-2">
                                            {filteredData(state) || 0}
                                        </p>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeadPage;
