import formatTimestamp from '@/js/convertTime';
import { cookies } from 'next/headers';
import React from 'react';

function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}


const page = async ({ params }) => {
    const cookieStore = cookies();
    const userTokenObj = cookieStore.get('userToken');
    const token = userTokenObj?.value;

    const id = params?.lead;
    const res = await fetch(`clean-job-backend-final.vercel.app/allLeads/${id}`, {
        cache: 'no-cache',
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();

    if (!data) {
        return
    }

    // Destructure the data object
    const {
        companyName,
        businessName,
        uploadDate,
        location,
        firstName,
        lastName,
        cleaning,
        frequency,
        area,
        scope,
        opportunityType,
        audio,
        additionalDetails,
        leadName,
        time,
        states,
        city,
        type,
        verified,
        sold,
        prize,
        date
    } = data || {};
    console.log(data);


    return (
        <div className="2xl:px-40 xl:px-28 2xl:pt-52 xl:pt-40 py-28 px-6 space-y-2">
            <h3 className="text-2xl font-semibold ">Uploader: {companyName}</h3>
            <h4 className="text-xl font-semibold ">
                <span>Business Name</span>: {businessName}
            </h4>
            <p className="text-base font-semibold  text-black">
                Appointment On: <span className="text-gray-500 text-sm ">{formatDate(date)} at {time}</span>
            </p>
            <p className="text-base font-semibold  text-black">
                Address: <span className="text-gray-500 text-sm ">{location}</span>
            </p>
            <h4 className="text-xl font-semibold ">
                <span>Decision Maker:</span> {firstName} {lastName}
            </h4>
            <p className="text-base font-semibold  text-black">
                Current Cleaning Status (Inhouse/Outsourced):{' '}
                <span className="text-gray-500 text-sm ">{cleaning}</span>
            </p>
            <p className="text-base font-semibold  text-black">
                Cleaning Frequency: <span className="text-gray-500 text-sm ">{frequency}</span>
            </p>
            <p className="text-base font-semibold  text-black">
                Size of the facility: <span className="text-gray-500 text-sm ">{area} unit</span>
            </p>
            <p className="text-base font-semibold  text-black">
                Common area: <span className="text-gray-500 text-sm ">{scope}</span>
            </p>
            <p className="text-base font-semibold  text-black">
                Opportunity Type: <span className="text-gray-500 text-sm ">{opportunityType}</span>
            </p>

            {/* New Fields */}
            <p className="text-base font-semibold  text-black">
                Additional Details: <span className="text-gray-500 text-sm ">{additionalDetails}</span>
            </p>
            <p className="text-base font-semibold  text-black">
                Lead Name: <span className="text-gray-500 text-sm ">{leadName}</span>
            </p>
            <p className="text-base font-semibold  text-black">
                Meeting Time: <span className="text-gray-500 text-sm ">{time}</span>
            </p>
            <p className="text-base font-semibold  text-black">
                State: <span className="text-gray-500 text-sm ">{states}</span>
            </p>
            <p className="text-base font-semibold  text-black">
                City: <span className="text-gray-500 text-sm ">{city}</span>
            </p>
            <p className="text-base font-semibold  text-black">
                Facility Type: <span className="text-gray-500 text-sm ">{type}</span>
            </p>
            <p className="text-base font-semibold  text-black">
                Verified: <span className="text-gray-500 text-sm ">{verified ? 'Yes' : 'No'}</span>
            </p>
            <p className="text-base font-semibold  text-black">
                Sold: <span className="text-gray-500 text-sm ">{sold ? 'Yes' : 'No'}</span>
            </p>
            <p className="text-base font-semibold  text-black">
                Prize: <span className="text-gray-500 text-sm ">${prize}</span>
            </p>
            <p className="text-base font-semibold  text-black">
                Upload Date: <span className="text-gray-500 text-sm ">{formatTimestamp(uploadDate)}</span>
            </p>

            {/* Audio Section */}
            {audio && (
                <div className="audio-section flex items-center gap-2">
                    <h4 className="text-xl font-semibold ">Audio Message:</h4>
                    <audio controls className="w-full">
                        <source src={audio} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}
        </div>
    );
};

export default page;
