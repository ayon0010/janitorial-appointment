// import getLeads from '@/lib/getLeadById';
// import LeadPage from '@/ui/Lead';
// import SingleLead from '@/ui/SingleLead';
// import States from '@/ui/States';
// import React from 'react';




// const page = async ({ params }) => {
//     const { leads } = await params;

//     if (leads?.length === 3) {
//         return (
//             <SingleLead Lead={leads} />
//         )
//     }
//     else if (leads?.length === 2) {
//         return (
//             <States States={leads} />
//         );
//     } else if (leads?.length === 1) {
//         return (
//             <LeadPage Lead={leads[0]} />
//         );
//     }

// };

// export default page;

// export const revalidate = 1;

// export async function generateStaticParams() {
//     const leadsData = await getLeads();

//     // Categories (one-level paths)
//     const categories = leadsData.map((lead) => [lead?.category]);

//     // States with Category (two-level paths)
//     const statesWithCategory = leadsData.map((lead) => [lead?.category, lead?.states]);

//     // Full paths with category, states, and lead ID (three-level paths)
//     const allLeads = leadsData.map((lead) => [lead?.category, lead?.states, lead?._id]);

//     // Combine all paths
//     const pathSegments = [...categories, ...statesWithCategory, ...allLeads];

//     // Return paths in the correct format
//     return pathSegments.map((path) => ({ leads: path }));
// }


import React from 'react';

const page = async ({ params }) => {
    return (
        <div>
            <h1>Search Page</h1>
        </div>
    );
};

export default page;