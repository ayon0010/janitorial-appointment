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
    const res = await fetch('http://localhost:5000/messages', {
        cache: 'no-cache',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    if (!data) {
        return
    }


    return (
        <div>
            <PageSection
                title={<>Admin Dashboard</>}
                text={<>See all messages</>}
                image={image}
            />
            <div className='2xl:px-[70px] xl:px-16 px-8 py-20'>
                <div className=''>
                    <SectionTitles heading={'Messages from Users'} subHeading={'See the user messages'} />
                </div>
                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <TableHead tableHead={['#', 'Email', 'Name', 'Company Name', 'Phone Number', 'Subject', 'Message']} />
                        <tbody>
                            {/* row 1 */}
                            {
                                data?.map((d, i) => (
                                    <tr key={d?._id} className="bg-base-200">
                                        <td>{i + 1}</td>
                                        <td>{d?.email}</td>
                                        <td>{d?.fullName}</td>
                                        <td>{d?.companyName}</td>
                                        <td>{d?.phoneNumber}</td>
                                        <td>{d?.subject}</td>
                                        <td>{d?.message}</td>
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