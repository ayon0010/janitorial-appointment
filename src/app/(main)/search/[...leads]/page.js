import getLeads from '@/lib/getLeadById';
import LeadPage from '@/ui/Lead';
import SingleLead from '@/ui/SingleLead';
import States from '@/ui/States';
import React from 'react';


export function capitalizeFirstLetter(word) {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const revalidate = 1;

export async function generateStaticParams() {
    const leadsData = await getLeads();

    // Categories (one-level paths)
    const categories = leadsData.map((lead) => [lead?.category]);

    // States with Category (two-level paths)
    const statesWithCategory = leadsData.map((lead) => [lead?.category, lead?.states]);

    // Full paths with category, states, and lead ID (three-level paths)
    const allLeads = leadsData.map((lead) => [lead?.category, lead?.states, lead?._id]);

    // Combine all paths
    const pathSegments = [...categories, ...statesWithCategory, ...allLeads];

    // Return paths in the correct format
    return pathSegments.map((path) => ({ leads: path }));
}

export async function generateMetadata({ params }) {
    const { leads } = await params;
    if (leads) {
        return {
            title: `Exclusive Commercial Cleaning Leads | High-Quality Janitorial Leads`,
            description:
                "Get exclusive commercial cleaning leads and janitorial leads to grow your cleaning business. High-quality verified leads to help you secure more contracts.",
            keywords:
                "commercial cleaning leads, janitorial leads, exclusive cleaning leads, cleaning business leads, high-quality cleaning leads, cleaning contracts",
            robots: "index, follow",
            openGraph: {
                title: "Exclusive Commercial Cleaning Leads | High-Quality Janitorial Leads",
                description:
                    "Get exclusive commercial cleaning leads and janitorial leads to grow your cleaning business. High-quality verified leads to help you secure more contracts.",
                type: "website",
                url: "https://www.janitorialappointment.com",
                images: [
                    {
                        url: "https://www.janitorialappointment.com/your-image.jpg",
                        width: 1200,
                        height: 630,
                        alt: "Exclusive Commercial Cleaning Leads and Janitorial Leads",
                    },
                ],
            },
        };
    }
}

const page = async ({ params }) => {
    const { leads } = await params;
    console.log(leads);

    if (leads?.length === 3) {
        return (
            <SingleLead Lead={leads} />
        )
    }
    else if (leads?.length === 2) {
        return (
            <States States={leads} />
        );
    } else if (leads?.length === 1) {
        return (
            <LeadPage Lead={leads[0]} />
        );
    }

};

export default page;