import getLeads from "@/lib/getLeadById";
import SearchState from "@/Shared/SearchState";
import Link from "next/link";



const LeadPage = async ({ Lead }, params) => {
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

    console.log(selectedStates);


    return (
        <div className="py-20 px-10">
            <SearchState data={data} leads={Lead} />
            <div className="w-3/4 mx-auto mt-10">
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
    );
};

export default LeadPage;
