import SectionTitles from "@/Shared/SectionTitles";
import TableHead from '@/ui/TableHead';
import { cookies } from 'next/headers';
import React from 'react';
import { PageSection } from "../../about/page";
import image from '@/../public/assets/New Project (1).jpg';

const page = async () => {
    const cookieStore = await cookies();
    const userTokenObj = cookieStore.get('userToken');
    const token = userTokenObj?.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/appointment`, {
        cache: 'no-cache',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    const janitorialData = data?.filter(d => d?.it === false);
    const itData = data?.filter(d => d?.it === true);

    if (!data) {
        return
    }


    return (
        <div>
            <PageSection
                title={<>Admin Dashboard</>}
                text={<>Appointments</>}
                image={image}
            />
            <div className='2xl:px-[70px] xl:px-16 px-8 py-20'>
                <div className=''>
                    <SectionTitles heading={'Booked Janitorial Appointments'} subHeading={'See the user messages'} />
                </div>
                <div className="overflow-x-auto mt-10">
                    <table className="table w-full">
                        {/* head */}
                        <TableHead tableHead={['#', 'Email', 'Company Name', 'Phone Number', 'Area', 'Frequency', 'Rate', 'Variations', 'Dnc']} />
                        <tbody>
                            {/* row 1 */}
                            {
                                janitorialData?.map((d, i) => (
                                    <tr key={d?._id} className="bg-base-200">
                                        <td>{i + 1}</td>
                                        <td>{d?.email}</td>
                                        <td>{d?.companyName}</td>
                                        <td>{d?.number}</td>
                                        <td>{d?.area}</td>
                                        <td>{d?.frequency}</td>
                                        <td>{d?.rate}</td>
                                        <td>{d?.variations}</td>
                                        <td>{d?.dnc}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='2xl:px-[70px] xl:px-16 px-8 py-20'>
                <div className=''>
                    <SectionTitles heading={'Booked IT Appointments'} subHeading={'See the user messages'} />
                </div>
                <div className="overflow-x-auto mt-10">
                    <table className="table w-full">
                        {/* head */}
                        <TableHead tableHead={['#', 'Email', 'Company Name', 'Phone Number', 'Service Type', 'Budget', 'Finish Date', 'Current Website']} />
                        <tbody>
                            {/* row 1 */}
                            {
                                itData?.map((d, i) => (
                                    <tr key={d?._id} className="bg-base-200">
                                        <td>{i + 1}</td>
                                        <td>{d?.email}</td>
                                        <td>{d?.companyName}</td>
                                        <td>{d?.number}</td>
                                        <td>{d?.serviceType}</td>
                                        <td>{d?.budget}</td>
                                        <td>{d?.completionDate}</td>
                                        <td>{d?.websiteUrl}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default page;