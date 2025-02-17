import SectionTitles from '@/ui/SectionTitles';
import TableHead from '@/ui/TableHead';
import { cookies } from 'next/headers';
import React from 'react';

const page = async () => {
    const cookieStore = await cookies();
    const userTokenObj = cookieStore.get('userToken');
    const token = userTokenObj?.value;
    const res = await fetch('https://https://backend.janitorialappointment.com/premiumUsers', {
        cache: 'no-cache',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json() || [];
    if (!data) {
        return
    }


    function formatTimestamp(isoTimestamp) {
        const date = new Date(isoTimestamp);

        const day = date.getDate().toString().padStart(2, "0");
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert 0 to 12 for midnight

        return `${day}-${month} ${year} ${hours}:${minutes} ${ampm}`;
    }

    function getStatus(endDate) {
        const now = new Date();
        const end = new Date(endDate);

        return now > end ? <p className='text-red-600'>Non-Active</p> : <p className='text-green-500'>Active</p>;
    }


    return (
        <div className="2xl:px-[70px] xl:px-16 px-8 py-20">
            <div className=''>
                <SectionTitles heading={'Premium Users'} subHeading={'See premium users'} />
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <TableHead tableHead={['#', 'Email', 'Company Name', 'Phone Number', 'Period', 'Start Date', 'End Date', 'Status']} />
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map((d, i) => (
                                <tr key={i} className="bg-base-200">
                                    <td>{i + 1}</td>
                                    <td>{d?.user?.email}</td>
                                    <td>{d?.user?.companyName}</td>
                                    <td>{d?.user?.phoneNumber}</td>
                                    <td>{d?.period}</td>
                                    <td>{formatTimestamp(d?.startDate)}</td>
                                    <td>{formatTimestamp(d?.endDate)}</td>
                                    <td>{getStatus(d?.endDate)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default page;